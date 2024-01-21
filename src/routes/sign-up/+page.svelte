<script>
	import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
	import { enhance } from "$app/forms";
	import { authHandlers } from "../../store/store";

	// const auth = getAuth();
	let firstName = "";
	let lastName = "";
	let email = "";
	let password = "";
	let confirmPassword = "";
	let error = false;
	let authenticating = false;

	async function signup() {
		if (authenticating) return;

		if (!email || !password || (password != confirmPassword)) {
			error = true;
			return;
		}

		authenticating = true

		try {
			authHandlers.signup(email, password);
			console.log("Signed Up");
		} catch (error) {
			console.error("There was an error signing up: " + error);
			authenticating = false;
			error = true;
		}
	}
</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[4rem]">
	<div class="flex justify-center">
		<h1>Sign Up</h1>
	</div>
	<div class="flex justify-center gap-[4rem] mt-[3.31rem] mb-[7.19rem]">
		<form class="flex flex-col gap-[1.25rem]">
			<div class="flex gap-[1.25rem]">
				<input bind:value={firstName} type="text" placeholder="First name" class="input" />
				<input bind:value={lastName} type="text" placeholder="Last name" class="input" />
			</div>
			<input bind:value={email} type="email" placeholder="Email" class="input" />
			<input bind:value={password} type="password" placeholder="Password" class="input" />
			<input bind:value={confirmPassword} type="password" placeholder="Confirm Password" class="input" />
			<div class="flex">
				<button on:click={signup} class="btn bg-primary-500">
					{#if authenticating}
						<!-- (January 20, 2024) spinner from FontAwesome. https://fontawesome.com/icons/spinner?f=classic&s=solid -->
						<i class="fa-solid fa-spinner spin"></i>					
					{:else}
						Sign Up
					{/if}
				</button>
				<div class="container grid items-center justify-items-center">
					<div>
						<span>Already have an account?</span>
						<a href="/log-in" class="hover:font-semibold underline">Log In</a>
					</div>
				</div>
			</div>
		</form>
	</div>
</main>
