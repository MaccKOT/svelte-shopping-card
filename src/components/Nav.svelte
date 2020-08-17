<script>
  import products from '../store/cart';
  // let itemsInCart = 0;
  // $: {
  //   let count = 0;
  //   for (let item of $products) {
  //     count += item.quantity;
  //   }
  //   itemsInCart = count;
  // }
  $: totalItems = $products.reduce((acc, c) => acc + c.quantity, 0);
</script>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  strong {
    color: rgb(46, 45, 45);
    font-size: 1.2rem;
  }
  p {
    margin: 0;
  }
</style>

<nav>
  <a href="/">Home</a>
  <a href="/contact">Contact Us</a>
  <p>
    Items in cart:
    <strong>{totalItems}</strong>
  </p>
</nav>
