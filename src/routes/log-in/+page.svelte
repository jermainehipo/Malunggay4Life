<script>
	import { auth } from "$lib/firebase/firebase";
	import { authHandlers } from "../../store/store";

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

		authenticating = true;

		try {
			await authHandlers.login(email, password);
			if (!auth.currentUser) {
				throw new Error("Trouble signing in");
			}
			authenticated = true;
			authenticating = false;
			error = false;
			return;
		} catch (err) {
			authenticated = false;
			authenticating = false;
			error = true;
			return;
		}
	}
</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[4rem]">
	<div>
		<h1 class="text-[3rem] leading-[3.7rem] sm:text-[64px] sm:leading-[80px] text-center">Log In</h1>
	</div>
	<div class="flex flex-col justify-center text-center gap-[1rem] lg:gap-[6rem] my-8 mt-[3.31rem] mb-[7.19rem]">
		{#if error}
			<p>Trouble signing in, check your username and password!</p>
		{/if}
		{#if authenticated}
			<div>
				<p>Succesfully signed in!</p>
				<a href="/account" class="underline">Continue to account page</a>
			</div>
		{/if}
		<div class="flex justify-center">
			<form class="flex flex-col gap-[1.12rem] max-w-[19rem]">
				<input bind:value={email} type="email" placeholder="Email" class="input" />
				<input bind:value={password} type="password" placeholder="Password" class="input" />
				<div class="flex">
					<button on:click={login} class="btn bg-primary-500 w-[14rem]">
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
	</div>
</main>
