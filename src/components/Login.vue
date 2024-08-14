  
  <template>
    <div class="login">
      <h2>Login</h2>
    <div>  <form @submit.prevent="handleLogin">
        <div>
          <label for="text">Username:</label>
          <input type="text" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" />
        </div>
        <button  type="submit">Login</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>  <div>
      <img src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1723005702~exp=1723009302~hmac=e9491a9ae901112ce89a9d933acac2fb3188a718b22eec66f8e7b658d8e49d4a&w=740">
    </div></div>
  </template>
  
  <script>

import axios from "axios";

 export default {
  
  name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
        
      };
    },
    methods: {
       async handleLogin() {
       let res=await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
        if(res.status==200 && res.data.length>0 ){
            localStorage.setItem('user', JSON.stringify(res.data[0]));
            localStorage.setItem('authenticated', 'true');
            this.$router.push({name:'HomePage'});
          } else {
          this.errorMessage = 'Invalid username or password';
        }
      } },
     mounted(){
    let userRe=localStorage.getItem("user");
    if(userRe){
      this.$router.push({name:'HomePage'})
    }
  }
    }

    

  </script>
  
  <style scoped>

  .login {
    max-width: 300px;
    margin: 100px 200px;
    padding: 30px ;
    color: #f5ebeb;
    background-image: linear-gradient( rgb(134, 26, 206),rgb(67, 3, 87));
  }
  .login h2{
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
  margin: -420px 500px;
  position: absolute;
  width: 500px;
  height: 500px;
   
  }
  </style>
  
  