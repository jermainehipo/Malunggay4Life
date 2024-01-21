<script>
	import { auth } from "$lib/firebase/firebase";
	import { authHandlers } from "../../store/store";

  function logout() {
    console.log(auth.currentUser);
    if (!auth.currentUser) {
      console.log("returned logout")
      return;
    } 
    authHandlers.logout();
    console.log("Logged out");
    window.location.href = "/";
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
