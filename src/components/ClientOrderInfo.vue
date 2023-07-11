<template>
    <div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {

        data() {
            return{
                orders: []
            }
        },
        mounted() {
            this.get_orders();
        },
        methods: {
            sort_orders: function(unsorted_orders) {
                let sorted_orders = [];
                let order_ids = []
                for(let i=0; i<unsorted_orders.length; i++) {

                }
                this.orders = sorted_orders;
            },
            get_orders: function() {
                axios.request({
                    url: `https://foodie.bymoen.codes/api/client-order`,
                    headers: {
                        "x-api-key": `MeXC0vryj4vQxsLyUcA4`,
                        token: cookies.get(`token`),
                    },
                }).then((response) => {
                    this.sort_orders(response['data']);
                }).catch((error) => {
                    error;
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>