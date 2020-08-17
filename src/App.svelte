<script>
  import Nav from './components/Nav.svelte';
  import Products from './components/Products';
  import Cart from './components/Cart.svelte';
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(0, 0, 0, 0.06);
  }
  .App {
    margin: 25px;
  }
</style>

<main class="App">
  <Nav />
  <Products />
  <Cart />
</main>
