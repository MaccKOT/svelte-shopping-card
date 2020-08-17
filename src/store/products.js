import { writable } from 'svelte/store'; //svelte store connect

let products = writable([
  {
    id: 1,
    name: 'A',
    price: 10,
  },
  {
    id: 2,
    name: 'B',
    price: 20,
  },
  {
    id: 3,
    name: 'C',
    price: 30,
  },
]);

export default products;
