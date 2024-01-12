<script>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { enhance } from '$app/forms';

    const auth = getAuth();
    let email = "";
    let password = "";

    async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error logging in:');
    }
  }
</script>

<main>
    <h3>Login</h3>
    <form on:submit|preventDefault="{login}" use:enhance class="flex flex-col gap-4">
        <input bind:value={email} type="email" placeholder="Email">
        <input bind:value={password} type="password" placeholder="Password">
        <input class="btn bg-primary-500" type="submit" value="Log In">
    </form>
</main>