<script>
	import { auth } from "$lib/firebase/firebase";
	import { authHandlers, authStore } from "../../store/store";
	import { onMount } from "svelte";
	// import { useNavigate } from "svelte-navigator";

	// const navigate = useNavigate();

	function logout() {
		// If not authenticated return;
		if (!auth.currentUser) return;

		// Log out and redirect to landing page
		authHandlers.logout();
		console.log("Logged out");
		window.location.href = "/";
	}

	onMount(() => {
		return new Promise(() => {
			auth.onAuthStateChanged((user) => {
				console.log(user + " " + auth.currentUser);
				if (!user) {
					console.log("Not authenticated, redirecting");
					window.location.href = "/log-in";
				}
			});
		});
	});
</script>

{#if !$authStore.loading}
	<main class="container max-w-[90rem] mt-[4.37rem] mb-[7.75rem]">
		<div>
			<h1 class="text-[3rem] leading-[3.7rem] sm:text-[64px] sm:leading-[80px] text-center">Your Account</h1>
		</div>
		<div class="flex flex-wrap justify-center gap-[4rem] lg:gap-[6rem] my-8">
			<button on:click={logout} class="btn bg-primary-500"> Sign out </button>
		</div>
	</main>
{/if}
