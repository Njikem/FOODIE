<template>
    <div>
     <h3>EDIT RESTPROFILE</h3>
     <div>
        <input type="text" placeholder="Email" ref="email">
     </div>
     <div>
        <input type="text" placeholder="Name" ref="name">
     </div>
     <div>
        <input type="text" placeholder="Phone_number" ref="phone_number">
     </div>
        <button @click=profile_click>PROFILE</button>
       
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {

        mounted() {
            this.$root.$on('rest_info', this.fill_inputs);
             
        },
        methods: {
            fill_inputs: function(rest_object){
                this.$ref['Email'].value = rest_object['Email'];
                this.$ref['Name'].value = rest_object['Name'];
                this.$ref['Phone_number'].value = rest_object['Phone_Number'];
            },

            profile_click: function () {
                let patch_data = {
                    Email: this.$ref['Email'].value,
                    Name: this.$ref['Name'].value,
                    Phone_number: this.$ref['Phone_Number'].value,
                };
            

            axios.request({
                url: 'https://foodie.bymoen.codes/api/restaurant',
                method: 'PATCH',
                headers: {
                    "x-api-key": "MeXC0vryj4vQxsLyUcA4",
                    token: cookies.get('token'),
                },
                data: patch_data,

            }).then(() => {
               this.$root.$emit('rest_info', patch_data);
            }).catch((error) => {
                error;
            });
            
           },

        },
        
    }
</script>

<style scoped>
div {
    margin: 15px;
    padding: 5px 20px;

}

button{
    margin-left: 35px;
}
</style>

