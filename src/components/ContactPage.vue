<template>
  <div class="contact">

    <h2><span>Foodie</span>.com</h2>

    <nav class="tag">
     <router-link to="/">Home</router-link> 
     <router-link to="/RestaurantPage">Menu</router-link> 
     <router-link to="/about">About Us</router-link>
     <router-link to="/ContactPage">Contact Us</router-link>
     <router-link to="/ServicePage">Services</router-link>
   </nav>

   <div class="contactus">
    <div class="contactone">
     <p><span>How can we help you?</span></p>
     <h1>Contact us</h1>
     <p>We're here to help and answer any questions you might have . We look forward to hearing from you!!!</p>

<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
  <p>Foodie Headquarters
  123 Culinary Lane
  Foodie City, FC 45678</p></div>

  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
  </svg>
    <p>+34 72 99 45 02</p>
  </div>

  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
  </svg>
    <p>mail@foodie.com</p>
  </div>
    </div>
    <div class="contacttwo">
      <img src='https://img.freepik.com/premium-vector/online-food-order_18591-35747.jpg?w=740'></div>
   </div>
  </div>
</template>

<script>
export default {
     name: 'ContactPage'

}
</script>

<style scoped>
.contact{
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
  h2 span,span,svg{
    color: #ec7a0f;
  }
  h2{
    text-align: left;
    
  }
  .contactus{
    display: flex;
  }
  .contactone{
    margin: 0px 50px;
    width: 500px;
  }
  .contactone p,h1{
    margin:10px 0px;
  }
  img{
    width: 600px;
    height: 500px;
    margin: 0px 100px;
  }

</style>