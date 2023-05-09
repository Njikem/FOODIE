<template>
  <div>
    <h2> Restaurant SignUp</h2>
    <div>
      <input type="text" placeholder="Email" ref="input_email" />
    </div>
    <div>
      <input type="text" placeholder="Name" ref="input_resto_fried" />
    </div>
    <div>
      <input type="text" placeholder="Address" ref="input_address" />
    </div>
    <div>
        <input type="text" placeholder="Phone Number" ref="input_phone_number"/>
    </div>
     <div>
        <input type="text" placeholder="Bio" ref="input_bio"/>
     </div>
     <div>
        <input type="text" placeholder="City" ref="input_city"/>
     </div>
     <div>
        <input type="text" placeholder="Profile_url" ref="input_profile_url"/>
     </div>
     <div>
        <input type="text" placeholder="Banner_url" ref="input_banner_url"/>
     </div>

    <div>
        <input type="text" placeholder="Password" ref="input_password"/>
    </div>

    <button @click="click_signup">SignUp</button>

  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {


 methods: {
            click_signup: function(){
                //Post axios request
                axios.request({
                    url:' https://foodie.bymoen.codes/api/restaurant',
                    headers: {
                        'x-api-key': "MeXC0vryj4vQxsLyUcA4"
                    },
                    method: 'POST',
                      //Axios request data
                    data: {
                        email: this.$refs['email_input'].value,
                        name: this.$refs['name_input'].value,
                        address: this.$refs['adrress_input'].value,
                        phone_number: this.$refs['phone_number_input'].value,
                        Bio: this.$refs['bio_input'].value,
                        city: this.$refs['city_input'].value,
                        profile_url: this.$refs['profile_url_input'].value,
                        banner_url: this.$refs['banner_url_input'].value,
                        password: this.$refs['password_input'].value,
                    }
                    
                //Making the success and the error request
                }).then((response) => {
                  cookies.set(restaurant_id , response['data']['restaurant_id']);
                  cookies.set('token', response['data']['token']);
                }).catch((error) => {
                   error;
                });
            },

        },
    
};





</script>

<style scoped>

div{
    place-items: center;
    margin-top: 60px;
    margin: 12px;
    padding: 5px 5px;
}

input{
    padding:10px 25px;
}

button{
    place-content: center;
    margin-left: 70px;
    padding: 7px 25px;

}
</style>