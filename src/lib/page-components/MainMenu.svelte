<script lang="ts">
	import { loggedIn } from '../../store';
	import { menuOpen } from './components-store';

	const closeButtonClick = () => ($menuOpen = false);
</script>

<div class={menuOpen ? 'main-menu-container menu-open' : 'main-menu-container'}>
	<div class="main-menu">
		<div class="close">
			<button on:click={closeButtonClick}>X</button>
		</div>
		{#if loggedIn}
			<ul class="menu-list">
				<li class="menu-list-item">
					<a href="/">Home</a>
				</li>
				<li class="menu-list-item">
					<a href="/">About</a>
				</li>
			</ul>
		{:else}
			<ul class="menu-list">
				<li class="menu-list-item">
					<a href="/">Home</a>
				</li>
			</ul>
		{/if}
	</div>
</div>

<style lang="scss">
	.main-menu-container {
		position: fixed;
		display: none;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #f7f9fb;
	}

	.main-menu-container.menu-open {
		display: grid;
		place-content: center;
	}

	.close {
		width: min-content;
		float: right;
	}

	.close button {
		cursor: pointer;
		padding: 0.5em;
		color: #5085a5;
		border-color: #8fc1e3;
		border-radius: 0.25em;
		background-color: #ffffff;
	}

	.main-menu {
		min-width: 50vw;
		min-height: 50vh;
	}

	.menu-list {
		list-style-type: none;
		display: flex;
		flex-direction: column;
	}

	.menu-list-item {
		padding: 0.5em;
	}

	.menu-list-item a {
		color: #31708e;
		text-decoration: none;
	}
</style>
