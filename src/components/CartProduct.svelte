<script>
  import products from '../store/cart';
  export let product;

  let disabledMinus = true;

  const addOne = () => {
    disabledMinus = false;
    product.quantity++;
    $products = $products;
  };
  const minusOne = () => {
    if (product.quantity <= 1) {
      disabledMinus = true;
      return null;
    }
    product.quantity--;
    $products = $products;
  };
  const deleteProduct = () => {
    $products = $products.filter((item) => product.id !== item.id);
  };
</script>

<style>
  .product {
    background-color: #fff;
    border: 1px solid gray;
    margin-bottom: 0.5rem;
    padding: 0 0.3rem;
    width: 55%;
  }
  .product p {
    margin: 0.25em 0;
  }
</style>

<div class="product">
  <p>
    <strong>Name</strong>
    : {product.name}
  </p>
  <p>
    <strong>Price</strong>
    : {product.price}
  </p>
  <p>
    <strong>Units :</strong>
    <button on:click={minusOne} disabled={disabledMinus}>-</button>
    {product.quantity}
    <button on:click={addOne}>+</button>
    <button on:click={deleteProduct}>Delete from cart</button>
  </p>
</div>
