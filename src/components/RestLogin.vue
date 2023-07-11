<template>
  <div>
    <div>
      <h2>Restaurant Login</h2>
      <div>
        <input type="text" placeholder="Email" ref="email_input" />
      </div>
      <div>
        <input type="password" placeholder="Password" ref="password_input" />
        <i class="fa-sharp fa-regular fa-eye-slash"></i>
      </div>
      <button @click="restlogin_button">Login</button>
    </div>
     
  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {

methods: {

  restlogin_button: function(){
//Axios request
    axios.request({
      url: ' https://foodie.bymoen.codes/api/restaurant-login',
      //axios key
      headers: {
        'x-api-key': "MeXC0vryj4vQxsLyUcA4"
      },
      //post request
      method: 'POST',

      data: {
        email:this.$refs['email_input'].value,
        password:this.$refs['password_input'].value,

      }
      //making success and error request
    }).then((response) => {
         cookies.set('restaurant_id', response['data']['restaurant_id']);
         cookies.set('token', response['data']['token']);
    }) .catch((error) => {
       error;
    });
  
    

  }
}


};
</script>

<style scoped>
div{
  margin: 15px;
  
}

input{
  padding: 10px 35px;
}

button{
  margin-left: 85px;
  padding: 8px 35px;
}

</style>