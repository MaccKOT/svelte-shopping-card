<script>
  import products from '../store/cart';
  export let product = {};

  const buyProduct = () => {
    for (let item of $products) {
      if (item.id === product.id) {
        item.quantity++;
        $products = $products;
        return null;
      }
    }
    product.quantity = 1;
    $products = [...$products, product];
  };
</script>

<style>
  .card {
    background-color: #fff;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
</style>

<div class="card">
  <p>id: {product.id}</p>
  <p>name: {product.name}</p>
  <p>price: {product.price}</p>
  <button on:click={buyProduct}>Buy</button>
</div>
