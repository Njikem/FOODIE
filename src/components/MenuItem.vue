<template>
    <div>
        <div>
            <h3>Create menu items</h3>
            <div>
            <input type="text" placeholder="Description" ref=Description>
            </div>
            <div>
            <input type="text" placeholder="Name" ref=Name>
            </div>
            <div>
            <input type="text" placeholder="image" ref=image>
            </div>
            <div>
            <input type="number" placeholder="price" ref=price>
            </div>
            <button @click=click_menu>Save</button>
            <h4>{{message}}</h4>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {

data(){
    return{
        message: undefined
    }
},

        methods: {
            menu_item: function(){
                axios.request({
                    url: 'https://foodie.bymoen.codes/api/menu',

                    method: 'POST',
                    headers: {
                        "x-api-key": "MeXC0vryj4vQxsLyUcA4",
                        token: cookies.get('token')
                    },
                    data: {
                        Description: '#',
                        Name: this.$refs['name'].value,
                        description: this.$refs['description'].value,
                        image_url: this.$refs['image'].value,
                        price: this.$refs['price'].value,
                    },
                }).then(() => {
                    this.message= 'menu item created'

                }).catch(() => {
                    this.message = 'sorry, it did not work'
                })
            }
        }
        
    }
</script>

<style scoped>
div{
    margin: 10px;
    padding: 0px 25px;
    place-items: center;
}
  button{
    place-items: center;
    margin-left: 80px;
  }
</style>