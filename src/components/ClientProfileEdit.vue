<template>
    <div>
        <h3>EDIT PROFILE</h3>
        <input type="text" placeholder="email" ref="email">
        <input type="text" placeholder="First Name" ref="First_name">
        <input type="text" placeholder="Last Name" ref="Last_name">
        <button @click=Click_profile>PROFILE</button>
       


    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        mounted() {
            this.$root.$on('client_info', this.fill_inputs);
             
        },
        methods: {
            fill_inputs: function(client_object){
                this.$ref['email'].value = client_object['email'];
                this.$ref['first_name'].value = client_object['first_name'];
                this.$ref['last_name'].value = client_object['last_name'];
            },

            click_profile: function () {
                let patch_data = {
                    email: this.$ref['email'].value,
                    first_name: this.$ref['first_name'].value,
                    last_name: this.$ref['last_name'].value,
                };
            

            axios.request({
                url: 'https://foodie.bymoen.codes/api/client',
                method: 'PATCH',
                headers: {
                    "x-api-key": "MeXC0vryj4vQxsLyUcA4",
                    token: cookies.get('token'),
                },
                data: patch_data,

            }).then(() => {
                this.$root.$emit('client_info', patch_data);
            }).catch((error) => {
                error;
            });
            
           },

        },
        
    };
</script>

<style lang="scss" scoped>

</style>