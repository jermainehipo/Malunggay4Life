<script>
	import { authHandlers } from "../../store/store";

  function logout() {
    authHandlers.logout();
    console.log("Logged out");
  }
</script>

<main>
	<h1>Account</h1>

	<!-- TEMP -->
	<a href="/log-in">Log In</a>
	<a href="/sign-up">Sign Up</a>

	<button on:click={logout} class="btn bg-primary-500"> 
    Sign out
  </button>
</main>
