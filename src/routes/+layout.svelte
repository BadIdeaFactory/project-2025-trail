<svelte:head>
	<link rel="stylesheet" href="/main.css" />
	<meta
		name="description"
		content="Go west and navigate the barren American wasteland of Project 2025."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
	<meta
		property="og:description"
		content="Go west and navigate the barren American wasteland of Project 2025."
	/>
</svelte:head>

<div id="header"></div>

<div id="content">
	<slot />
</div>

<div id="footer">
	<p>A <a href="https://biffud.com">Bad Idea Factory Project</a>.</p>
	<em>This site is Open Source.</em> Want to make an improvement?
	<a href="https://github.com/BadIdeaFactory/project-2025-trail/">Open a PR</a>.
</div>

<style>
	#header {
		text-align: center;
	}
	#content {
		max-width: 800px;
		margin: auto;
	}
	* {
		font-family: arial;
	}
	#footer {
		text-align: center;
		margin-top: 40px;
		font-size: 0.8em;
	}
</style>
