<template>
  <div>
    <h2> Restaurant SignUp</h2>
    <div>
      <input type="text" placeholder="Email" ref="input_email" />
    </div>
    <div>
      <input type="text" placeholder="Name" ref="input_name" />
    </div>
    <div>
      <input type="text" placeholder="Address" ref="input_address" />
    </div>
    <div>
        <input type="text" placeholder="Phone_Number" ref="input_phone_number"/>
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

    <button  @click="click_signUp">SignUp</button>

  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';



export default {


 methods: {
            click_signUp: function(){
                //Post axios request
                axios.request({
                    url:' https://foodie.bymoen.codes/api/restaurant',
                    headers: {
                        "x-api-key": "MeXC0vryj4vQxsLyUcA4"
                    },
                    method: 'POST',
                      //Axios request data
                    data: {
                       email:this.$refs['input_email'].value,
                       name:this.$refs['input_name'].value,
                       address:this.$refs['input_address'].value,
                       phone_number:this.$refs['input_phone_number'].value,
                       bio:this.$refs['input_bio'].value,
                       city:this.$refs['input_city'].value,
                       profile_url:this.$refs['input_profile_url'].value,
                       banner_url:this.$refs['input_banner_url'].value,
                       password:this.$refs['input_password'].value,

                    }
                    
                //Making the success and the error request
                }).then((response) => {
                  cookies.set('restaurant_id', response['data']['restaurant_id']);
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