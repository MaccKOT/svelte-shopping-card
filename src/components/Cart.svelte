<script>
  import products from '../store/cart';
  import CartProduct from './CartProduct.svelte';
  import { each } from 'svelte/internal';
</script>

<style>

</style>

<h1>Cart</h1>
<!-- {JSON.stringify($products)} -->
{#each $products as product}
  <CartProduct {product} />
{/each}
