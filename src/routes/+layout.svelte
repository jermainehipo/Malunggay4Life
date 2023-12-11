<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppShell, ListBox } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, LightSwitch } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-secondary-500">
			<svelte:fragment slot="lead">
				<img class="w-[400px]" alt="Malunggay 4 Life Logo" src="src\lib\Logos\M4L-transparent.png">
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>
					<a href="/">Shop</a>
					<a href="/">Contact Us</a>
					<a href="/">Our Story</a>
					<a href="/">Cart</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<main class="bg-secondary-500">
		<slot />
	</main>
</AppShell>

