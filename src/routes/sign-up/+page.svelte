<script>
</script>

<main class="container max-w-[90rem] mt-[4.37rem] mb-[4rem]">
	<div class="flex justify-center">
		<h1>Sign Up</h1>
	</div>
	<div class="flex justify-center gap-[4rem] mt-[3.31rem] mb-[7.19rem]">
		<form class="flex flex-col gap-[1.25rem]">
			<div class="flex gap-[1.25rem]">
				<input id="sign-up-firstname" type="text" placeholder="First name" class="input" />
				<input id="sign-up-lastname" type="text" placeholder="Last name" class="input" />
			</div>
			<input id="sign-up-email" type="text" placeholder="Email" class="input" />
			<input id="sign-up-password" type="password" placeholder="Password" class="input" />
			<input id="sign-up-confirm-password" type="password" placeholder="Confirm Password" class="input" />
			<div class="flex">
				<input type="submit" value="Sign Up" class="btn bg-primary-500 w-[rem]" />
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
