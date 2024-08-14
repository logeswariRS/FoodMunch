 <template>
    <div class="cartpage">
      <h1><span>Cart </span>Items</h1>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
        <img src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6665.jpg?ga=GA1.2.1864079129.1705899234&semt=ais_hybrid">
      </div>
      <div class="itemflex" v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
          <div> <img :src="item.picture" :alt="item.name" class="cart-picture" /></div>
            <div class="cart-details">
              <h3 class="cart-name">{{ item.name }}</h3>
              <p class="cart-price">${{ item.price.toFixed(2) }}</p>
              <p class="cart-quantity">Quantity: {{ item.quantity }}</p>
              <button @click="removeItem(item.id)">Remove
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-x" viewBox="0 0 16 16">
                  <path d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>
            </div>
           
          </li>
        </ul><div class="total">
        <p>Total: ${{ totalPrice }}</p>
        <router-link to="/" id="menu">Back to Menu</router-link></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
        
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    },
    methods: {
      removeItem(itemId) {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      },
    },
  };
  </script>
  
  <style scoped>
  li{
    display: flex;
    margin: 20px;
    
  }
 
  img{
    align-items: left;
    width: 200px;
    height: 200px;
  }
  h1 span{
    color:  #ff5722;
  
  }
  h1{
    text-align: center;
  }
  .itemflex{
    display: flex;

  }
  .total{
    margin: auto 400px;
    position: sticky;

  }
  .total p{
    background-color:orange;
    padding: 10px;
    width: 200px;
  }
  .cart-details{
    margin: 30px;

  }
  .cart-details h3 {
    background-color: orange;
    padding: 7px;
    width: 200px;
  }
  .cart-details button {
    background-color: rgb(233, 71, 59);
    padding: 7px;
    width: 200px;
  }
  #menu{
    width: 200px;
    background-color: rgb(0, 204, 255);
    padding: 7px;
    text-decoration: none;
   
  }
  </style>
  