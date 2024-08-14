<template>
    <div class="signup" >
  
     <div class="sign"> <h2>SIGNUP</h2>
      <form @submit.prevent="handleSignup">
        <div >
          <label for="name">Name:</label>
          <input type="text"  v-model="firstname"  />
        </div>
        <div>
          <label for="username">Username:</label>
          <input type="username"  v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password"  v-model="password"  />
        </div>
        <button type="submit">Signup</button>
        <p></p>
      </form>
    </div>
      <div>
        <img src="https://img.freepik.com/free-vector/food-delivery-service-abstract-concept-illustration-online-food-order-24-7-service-pizza-sushi-online-menu-payment-options-no-contact-delivery-download-app_335657-3507.jpg?ga=GA1.1.1864079129.1705899234&semt=ais_hybrid">
      </div></div>
    
  </template>
  
  <script>

import axios from "axios";
// import datas from "../components/datas/data.json" ;
// import fs from 'fs';

 export default {
  name: 'SignupPage',
    data() {
      
      return {
        
        firstname: '',
        username: '',
        password: ''
      }
    },
    methods: {
      async handleSignup() {
      
          let res = await axios.post('http://localhost:3000/users',{
            username:this.username,
            password:this.password
          });
          console.log(res);
          
          if(res.status==201 ){
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('authenticated', 'true');
            this.$router.push({name:'HomePage'});
          }
          
         
    else {
          this.errorMessage = 'Invalid username or password';
        }
      } 
  },
  mounted(){
    let userRe=localStorage.getItem("user");
    if(userRe){
      this.$router.push({name:'HomePage'})
    }
  }
    
      }
    
  </script>
  
  <style scoped>

  .signup {
    max-width: 300px;
    margin: 50px 200px;
    padding: 20px ;
    color: #f5ebeb;
    background-image: linear-gradient( rgb(134, 26, 206),rgb(67, 3, 87));
  }
  .signup h2{
    color: #eff1fa;
    padding: 55px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  div {
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    color: #f5ebeb;
    background-image: linear-gradient( rgb(80, 7, 175),rgb(67, 3, 87));
    border-radius: 10px;
    box-shadow: #630b46;
  
  }
  button {
    padding: 10px;
    background-color: #6971e7;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  img{
  margin: -550px 500px;
  position: absolute;
   
  }
  </style>
  