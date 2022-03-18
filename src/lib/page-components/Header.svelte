<script lang="ts">
	import { menuOpen } from './components-store';
	import MainMenu from './MainMenu.svelte';
	import MainMenuButton from './MainMenuButton.svelte';

	const menuButtonClick = () => ($menuOpen = !$menuOpen);
</script>

<header>
	<nav>
		<div>
			<button class="main-menu-button" on:click={menuButtonClick}><MainMenuButton /></button>
			{#if $menuOpen}
				<MainMenu />
			{/if}
		</div>
	</nav>
</header>

<style lang="scss">
	.main-menu-button {
		height: 1em;
		width: 1em;
		cursor: pointer;
		display: inline-block;
		background-color: transparent;
		border: none;
		padding: 0.25em;
	}
</style>
