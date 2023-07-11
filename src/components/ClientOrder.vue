<template>
    <div>
        <div v-for="(order,i) in orders"  :key="i">
            <h1>ORDER ID: {( order[0]['order_id'])}</h1>
            <div c-for="(item, j) in order"  :key="j">
                <h3>{{item['name']}}</h3>
                <p>{{item['price']}}</p>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "veu-cookies";
    export default {
        data() {
            return {
                orders: []
            }
        },
        mounted() {
            this.get_order();
        },
        methods: {

            sort_orders: function(unsorted_orders) {
                let sorted_orders = [];
                let order_ids = []
                for(let i=0; i<unsorted_orders.length; i++){
                    let index = order_ids.findIndex(unsorted_orders[i]['order_id']);
                    if(index !== -1) {
                        sorted_orders[index].push([unsorted_orders[i]]);
                    } else {
                        sorted_orders[index].push(unsorted_orders[i]);
                        order_ids.push(unsorted_orders[i][order_id]);
                        
                    }
                }
                this.orders = sorted_ordes;
            },
        get_orders: function () {
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
            });
        },
        }
    };
</script>

<style lang="scss" scoped>

</style>