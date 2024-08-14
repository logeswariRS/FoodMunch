<template>
    
    <div class="menu-page">
      <h2><span>Foodie</span>.com</h2>
      <nav class="tag">
       <router-link to="/">Home</router-link> 
       <router-link to="/RestaurantPage">Menu</router-link> 
       <router-link to="/about">About Us</router-link>
       <router-link to="/ContactPage">Contact Us</router-link>
       <router-link to="/ServicePage">Services</router-link>
     </nav>
       <div id="carticon" @click.prevent="handleCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="orange" class="bi bi-cart-check" viewBox="0 0 16 16">
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
       </div> 
        <div id="head"><h1><span>Explore</span> Menu</h1></div>
      <div class="food-item" v-for="item in foodItems" :key="item.id">
        <img :src="item.picture" :alt="item.name" class="food-picture" />
        <div class="food-details">
          <h3 class="food-name">{{ item.name }}</h3>
          <p class="food-price">${{ item.price.toFixed(2) }}</p>
          <p class="food-rating">Rating: {{ item.rating }}/5</p>
          <button @click="addToCart(item)" class="add-to-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
// import CartPage from '../components/CartPage.vue'

  export default {
    name:'RestaurantPage',
    components:{
  
//   CartPage
},
    data() {
      return {
        cart: [],
        foodItems: [
          {
            id: 1,
            name: 'Pizza Margherita',
            picture: 'https://img.freepik.com/premium-photo/presentation-delicious-margherita-pizza-photo_1202914-39893.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 12.99,
            rating: 4.5
          },
          {
            id: 2,
            name: 'Spaghetti Carbonara',
            picture: 'https://img.freepik.com/premium-photo/pasta-carbonara-with-hearty-serving-yummy-delicious-pasta-carbonara-food_1020697-489679.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 14.99,
            rating: 4.7
          },
          {
            id: 3,
            name: 'burger',
            picture: 'https://img.freepik.com/premium-photo/fresh-tasty-homemade-burger-wooden-table_147620-1307.jpg?ga=GA1.1.1864079129.1705899234&semt=sph ' ,
            price: 14.99,
            rating: 4.7
          },
          {
            id: 4,
            name: 'Kung Pao Chicken',
            picture: 'https://img.freepik.com/free-photo/top-view-delicious-fries-table_23-2150857846.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 14.99,
            rating: 4.7
          },
          {
            id: 5,
            name: 'Spring Rolls',
            picture: 'https://img.freepik.com/premium-photo/spring-rolls-with-fresh-bell-peppers-pork-delicious-spring-rolls-food-image_1295756-71034.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 14.99,
            rating: 4.7
          },
          {
            id: 6,
            name: 'garlic Chiken',
            picture: 'https://img.freepik.com/free-photo/napkin-near-chicken-vegetables_23-2147765473.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 14.99,
            rating: 4.7
          },
          {
            id: 7,
            name: 'Galbijjim',
            picture: 'https://img.freepik.com/premium-photo/flavorful-galbijjim-braised-ribs_729149-16029.jpg?ga=GA1.1.1864079129.1705899234&semt=sph',
            price: 14.99,
            rating: 4.7
          },
          {
            id: 8,
            name: 'Kimchi Jjigae',
            picture: 'https://img.freepik.com/free-photo/chicken-fried-hot-pot-with-spicy-sauce-korean-style_1150-42870.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 14.99,
            rating: 4.7
          },
          {
            id: 9,
            name: 'Lentil Soup',
            picture: 'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid',
            price: 14.99,
            rating: 4.7
          }
        ]
      };
    },
    methods: {
      addToCart(item) {
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ ...item, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },

    removeFromCart(item) {
      const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
      handleCart() {
  
        this.$router.push('/CartPage')
  
    
  },},
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }}
   
  </script>
  
  <style scoped>
  .menu-page {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    font-family:'fantasy';
  }
  
  .food-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 70px 30px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 5px 10px rgb(7, 5, 2);
  }
  .food-item:hover{
   border: 2px solid rgb(230, 152, 7);
  }
  
  .food-picture {
    width: 100%;
    height: auto;
  }
  
  .food-details {
    padding: 15px;
  }
  
  .food-name {
    font-size: 1.2em;
    margin: 0;
  }
  
  .food-price {
    color: #333;
    font-size: 1.1em;
  }
  
  .food-rating {
    color: #555;
  }
  
  .add-to-cart {
    background-color: #ff5722;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .add-to-cart .icon-cart {
    margin-right: 8px;
    font-size: 1.2em;
  }
  #head span{
    color: #ff5722;
   
  }
  #head{
 margin: 0px 550px;
 position: absolute;
  }
  #carticon svg{
    position: absolute;
    margin: 0px 1200px;
  }
  nav {
    margin-top: 20px;
  }
  nav a {
    margin: 0 20px;
    text-decoration: none;
    color: #221358;
  }
  .tag{
    margin-bottom: 50px;
    margin-left: 700px;
  }
  main img{
    height: 300px;
  }
  h2 span{
    color: #ec7a0f;
  
  }
  h2{
    text-align: left;
    
  }
  </style>
  