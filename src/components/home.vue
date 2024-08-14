<template>
    <div class="home">
      <h2><span>Foodie</span>.com</h2>
       <nav class="tag">
        <router-link to="/" title="home">Home</router-link> 
        <router-link to="/RestaurantPage">Menu</router-link> 
        <router-link to="/about">About Us</router-link>
        <router-link to="/ContactPage">Contact Us</router-link>
        <router-link to="/ServicePage">Services</router-link>
      </nav>
      <header>
        <h1>Enjoy Our Delicious Meal</h1>
        <p>Order your favorite food with ease!</p>
        <nav>
          <router-link to="/login">Login</router-link> 
          <router-link to="/signup">Signup</router-link>
          <button @click="logout">Logout</button>
        </nav>
      </header>
      <div class="headone"><span>Known For Our South Indian Food</span><br><span>Serving North Indian Chinese & Fast Food</span> </div>
      <main>
     <img src="https://img.freepik.com/free-photo/front-view-cinnamon-mint-alogn-with-fresh-tea-white-ingredients-spices-color_140725-24595.jpg?t=st=1722916394~exp=1722919994~hmac=eea920079be66641076cf7c9e93009d1a5db340ed3acdfe9ba8710d5ab6ac7c0&w=740">
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods:{
      logout() {

      localStorage.setItem('authenticated','false');
      localStorage.clear();
      this.$router.push('/login');
    }
    },
    
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
    font-family:'fantasy';
   
  }
  header {
    background-color: #e0c26d;
    padding: 20px;
    border-bottom: 2px solid #dee2e6;
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
  .headone{
    margin:20px 340px;
    position: absolute;
    animation-duration: 2s;
    letter-spacing: 3px;
    font-size: 1.2em;
    overflow: hidden;
    border-right: 3px solid orange;
    width: 45%;
    white-space: nowrap;
    animation: 
          typing 2s,
          cursor 4s step-end infinite alternate;
  }

@keyframes cursor{
  50%{border-color: transparent;}
}
@keyframes typing{
  from{width:0}
  
}

  </style>
  