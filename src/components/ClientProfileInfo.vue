<template>
   <div>
    <div v-if="client_object !== undefined">
        <p>Welcome{{client_object['first_name']}}{{client_object['last_name']}}</p>
        <h6>{{client_object['email']}}</h6>
        
    </div>
   
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        mounted() {
            this.get_client_info()
        },
        data() {
            return {
                client_object: undefined
            }
        },
        methods: {
            get_client_info: function () {
                 
                 axios.request({
                    url: 'https://foodie.bymoen.codes/api/client',
                    headers: {
                        "x-api-key": 'MeXC0vryj4vQxsLyUcA4'
                    },
                    params: {
                        client_id: cookies.get('client_id')
                    }
                 }).then((response) => {
                    this.client_object = response['data'][0];
            }).catch((error) =>{
                error;
                });
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>