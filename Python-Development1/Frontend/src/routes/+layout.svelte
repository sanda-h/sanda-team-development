<script>
	import '../app.css';
	//import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" /> <!--タブの画像-->
</svelte:head>
<Header /> <!--自分で自己閉じしている。Headerコンポーネントを指定して表示している。-->
<main>
	{@render children()} <!--親(+page)コンポーネントの渡した内容を表示する-->
</main>



