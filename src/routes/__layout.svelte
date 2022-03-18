<script lang="ts">
	import Header from '$lib/page-components/Header.svelte';
	import Banner from '$lib/page-components/Banner.svelte';

	import '../app.css';
</script>

<Header />
<Banner />

<main>
	<slot />
</main>

<footer />

<style>
</style>
