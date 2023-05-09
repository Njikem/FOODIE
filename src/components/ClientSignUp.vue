<template>
    <div>
        <h2>SignUp Here</h2>
       <div>
        <input type="text" placeholder="Email" ref="email_input">
       </div>
       <div>
        <input type="text" placeholder="First Name" ref="first_input">
       </div>
       <div>
        <input type="text" placeholder="Last Name" ref="last_input">
       </div>
       <div>
        <input type="text" placeholder="image_url" ref="image_input">
       </div>
       <div>
        <input type="text" placeholder="UserName" ref="username_input">
       </div>
       <div>
        <input type="password" placeholder="PassWord" ref="password_input">
       </div>
        <button id='sign' @click="click_sign">SignUp</button>


    </div>
</template>

<script>
//import axios cookies 
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        methods: {
            click_sign: function(){
                //Post axios request
                axios.request({
                    url:'https://foodie.bymoen.codes/api/client',
                    headers: {
                        'x-api-key': "MeXC0vryj4vQxsLyUcA4"
                    },
                    method: 'POST',
                      //Axios request data
                    data: {
                        email: this.$refs['email_input'].value,
                        first_name: this.$refs['first_input'].value,
                        last_name: this.$refs['last_input'].value,
                        image_url: this.$refs['image_input'].value,
                        username: this.$refs['username_input'].value,
                        password: this.$refs['password_input'].value,
                    }
                    
                //Making the success and the error request
                }).then((response) => {
                    cookies.set('client_id', response['data']['client_id']);
                    cookies.set('token', response['data']['token']);

                }).catch((error) => {
                   error
                });
            },

        },

        
    };
</script>

<style scoped>

input{
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 85px;
    padding: 10px 25px;
    place-content: center;
}

button{
   margin-left: 130px;
   background-color: white;
   
}
 @media only screen and (mid-width: 720px){
    #sign{
        margin-left: 250px;

    }

    input{
        margin-left: 1000px;
        padding: 0px 30px;
    }
 }

 @media only screen and (mid-width: 1020px){

 }
</style>







