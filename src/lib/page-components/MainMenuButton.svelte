<svg
	class="menu-button"
	width="150"
	height="150"
	viewBox="0 0 39.687501 39.687501"
	version="1.1"
	id="svg5"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs id="defs2" />
	<g id="layer1">
		<circle
			class="top-circle"
			style="fill-rule:evenodd;stroke-width:0.322097;fill-opacity:1"
			id="path31"
			cx="19.84375"
			cy="7.9375005"
			r="5.291667"
		/>
		<circle
			class="middle-circle"
			style="fill-rule:evenodd;stroke-width:0.322097;fill-opacity:1"
			id="path31-3"
			cx="19.78459"
			cy="19.84375"
			r="5.291667"
		/>
		<circle
			class="bottom-circle"
			style="fill-rule:evenodd;stroke-width:0.322097;fill-opacity:1"
			id="path31-3-6"
			cx="19.84375"
			cy="31.750002"
			r="5.291667"
		/>
	</g>
</svg>

<style lang="scss">
	.menu-button {
		transition: all 0.7s ease-in-out;
		height: 3em;
		width: 3em;
	}

	.menu-button:hover {
		transform: rotate(90deg);
	}

	.menu-button circle.top-circle {
		fill: #687864;
		transition: all 0.25s ease-in-out;
	}

	.menu-button circle.middle-circle {
		fill: #687864;
		transition: all 0.25s ease-in-out;
		transition-delay: 0.15s;
	}

	.menu-button circle.bottom-circle {
		fill: #687864;
		transition: all 0.25s ease-in-out;
		transition-delay: 0.3s;
	}

	.menu-button:hover circle.top-circle {
		fill: #31708e;
	}

	.menu-button:hover circle.middle-circle {
		fill: #31708e;
	}

	.menu-button:hover circle.bottom-circle {
		fill: #31708e;
	}
</style>
