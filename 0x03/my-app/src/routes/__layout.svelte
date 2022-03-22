<script>
  import '../app.css';
  import DevTopBottom from './../lib/components/DevTopBottom.svelte';
  import DevTop from './../lib/components/DevTop.svelte';
  import Header from '$lib/components/Header.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<DevTop />
<Header />
<main class="container">
  <Nav />
  <slot />
</main>
<Footer />
<DevTopBottom />
