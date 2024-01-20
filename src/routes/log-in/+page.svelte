<script>
	import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
	import { enhance } from "$app/forms";

	// const auth = getAuth();
	let email = "";
	let password = "";

	async function login() {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("User logged in successfully!");
		} catch (error) {
			console.error("Error logging in:");
		}
	}
</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[4rem]">
	<div class="flex justify-center">
		<h1>Log In</h1>
	</div>
	<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8 mt-[3.31rem] mb-[7.19rem]">
		<form on:submit|preventDefault={login} use:enhance class="flex flex-col gap-[1.12rem] max-w-[19rem]">
			<input bind:value={email} type="email" placeholder="Email" class="input" />
			<input bind:value={password} type="password" placeholder="Password" class="input" />
			<div class="flex">
				<input type="submit" value="Sign In" class="btn bg-primary-500 w-[14rem]" />
				<div class="container grid items-center justify-items-center">
					<a href="/login" class="hover:font-semibold underline">Forgot Password?</a>
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
