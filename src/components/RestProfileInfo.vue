<template>
    <div>
        <div v-if="rest_info !=undefined">
            <img src="rest_info['banner_url]" alt="#">
            <h2>{{rest_info['bane']}}</h2>
            <p>{{rest_info['bio']}}</p>
            <h4>{{rest_info['address']}}</h4>
            <h4>{{rest-info['phone_number']}}</h4>
            <h4>{{rest_info['email']}}</h4>

        </div>

    </div>
</template>

<script>
import axios from 'axios';

    export default {
        props: {
            id: Number,
        },
        
        data() {
            return {
                rest_info: undefined
            }
        },

        methods: {
            get_profile_info: function() {
                axios.request ({
                url: 'https://foodie.bymoen.codes/api/restaurant',

                 headers: {
                        "x-api-key": 'MeXC0vryj4vQxsLyUcA4',
                    },

                    params: {
                        restaurant_id: this.id,
                    },
                }).then((response) => {
                   this.restaurant_info = response['data']['0'];
            }).catch((error) => {
                error;
            });
            }
        
        }


        
    }
</script>

<style lang="scss" scoped>

</style>