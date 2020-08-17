<script>
  import products from '../store/products';
  import Product from './Product.svelte';
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>

<h1>Products</h1>
<!-- you need refer to value from store through $ -->
<!-- {JSON.stringify($products)} -->
<div class="wrapper">
  {#each $products as product}
    <Product {product} />
  {/each}
</div>
