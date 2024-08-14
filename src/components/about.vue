<template>
    <div class="about">
      <h1><span>Foodie</span>.com</h1>
      <nav class="tag">
       <router-link to="/">Home</router-link> 
       <router-link to="/RestaurantPage">Menu</router-link> 
       <router-link to="/about">About Us</router-link>
       <router-link to="/ContactPage">Contact Us</router-link>
       <router-link to="/ServicePage">Services</router-link>
     </nav>
     <div class="head">
     <div class="headone"><span>Known For Our South Indian Food</span><br><span>Serving North Indian Chinese & Fast Food</span> </div>
      <div class="headTwo"><img src="https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20020.jpg?ga=GA1.2.1864079129.1705899234&semt=ais_hybrid"></div></div>
     <div id="aboutus">
    <div >
      <img src='https://img.freepik.com/free-photo/bokchoy-bell-peppers-thai-traditional-food-table-against-black-background_23-2148093374.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid'>
    </div>
  <div id="aboutword"><h1> About Our <span>Foodie</span>.com</h1>
    <h3>Welcome to Foodie!</h3><br>
     <p> At Foodie, we believe that every meal should be an experience to savor. Founded by Logeswari Ravi, our mission is simple: to bring you the most delightful and delicious food from your favorite local restaurants, straight to your doorstep.<br></p>
     <h2> Our Story</h2>
     <p> Foodie was born out of a passion for great food and a commitment to convenience. Logeswari Ravi, our founder, has always had a love for culinary adventures and a deep appreciation for the artistry of cooking. After years of exploring various cuisines and understanding the nuances of the food industry, she decided to create a platform that would make high-quality dining experiences accessible to everyone, without the hassle.</p>
     <br> Bon Appétit!<br>

     <h3> Logeswari Ravi <br> 
      Founder & CEO, Foodie.com</h3>
  </div>  
</div></div>
  
    
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .about{
    font-family: 'fantasy';
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
  span{
    color: #ec7a0f;
  }
  h2{
    text-align: left;
    color: #ec7a0f;
    
  }
  .head{
    display: flex;
  }
  .head span{
    color: #ec7a0f;
  }
  .headone{
    margin:200px 40px;
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
#aboutus{
 display: flex;

}
#aboutword{
  margin: 10px 30px ;
}

  </style>
  