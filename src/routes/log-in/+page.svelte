<script>
	import { authHandlers } from "../../store/store";
	import { goto } from "$app/navigation";

	// const auth = getAuth();
	let email = "";
	let password = "";
	let error = false;
	let authenticating = false;
	let authenticated = false;

	async function login() {
		if (authenticating) return;

		if (!email || !password) {
			error = true;
			return;
		}

		authenticating = true

		try {
			authHandlers.login(email, password)
			console.log("Signed In");
			authenticating = false;
		} catch (error) {
			console.error("There was an error logging in: " + error);
			authenticating = false;
			error = true;
		}
	}

</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[4rem]">
	<div>
		<h1 class="text-[3rem] leading-[3.7rem] sm:text-[64px] sm:leading-[80px] text-center">Log In</h1>
		
	</div>
	<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8 mt-[3.31rem] mb-[7.19rem]">
		<form class="flex flex-col gap-[1.12rem] max-w-[19rem]">
			<input bind:value={email} type="email" placeholder="Email" class="input" />
			<input bind:value={password} type="password" placeholder="Password" class="input" />
			<div class="flex">
				<button on:click={login} class="btn bg-primary-500 w-[14rem]" >
					{#if authenticating}
						<!-- (January 20, 2024) spinner from FontAwesome. https://fontawesome.com/icons/spinner?f=classic&s=solid -->
						<i class="fa-solid fa-spinner spin"></i>					
					{:else}
						Sign In
					{/if}
				</button>
				<div class="container grid items-center justify-items-center">
					<a href="/log-in" class="hover:font-semibold underline">Forgot Password?</a>
				</div>
			</div>
			<hr />
			<div class="flex justify-center">
				<span>Don't have an Account?</span>
				<a href="/sign-up" class="hover:font-semibold underline">Sign Up</a>
			</div>
		</form>
	</div>
</main>
