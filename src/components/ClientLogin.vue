<template>
    <div>
        <h2>Login Here</h2>
        <div id='input_text'>
        <input type="text" placeholder="Email" ref="email_input">
        </div>
        <div>
        <input type="password" placeholder="Password" ref="password_input">
        <i class="fa-sharp fa-regular fa-eye-slash"></i>
        </div>
        <button @click="login_button">Login</button>

    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
 export default {


 methods: {
    login_button: function(){

        axios.request({
            url: 'https://foodie.bymoen.codes/api/client-login',
            headers:{
                'x-api-key': 'MeXC0vryj4vQxsLyUcA4'
            },
            method:'POST',
            data: {
                email: this.$refs['email_input'].value,
                password: this.$refs['password_input'].value
            }

        }).then((response) => {
            cookies.set('client_id', response['data']['client_id']);
            cookies.set('token', response['data']['token']);
           
        }).catch((error)=>{
            error;
        });
         
    }
 }
}
</script>

<style  scoped>
input{
    place-items: center;
    margin: 10px;
   padding: 10px 50px;
   margin-top: 20px;
}

button{
  margin-left: 95px;
  background-color: white;
  color: black;
  border: bold;

}

@media only screen and (min-width: 720px){
    input_text{
    padding: 0px 200px;
        margin-left: 60px;

    }

}

</style>