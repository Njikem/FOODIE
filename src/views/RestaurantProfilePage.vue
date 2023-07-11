<template>
    <div>
     <rest-profile-info id="restaurant_id"></rest-profile-info>
     <rest-profile-edit></rest-profile-edit>
     
     

    </div>
</template>

<script>
import RestProfileInfo from '@/components/RestProfileInfo.vue'
import RestProfileEdit from '@/components/RestProfileEdit.vue'
import cookies from 'vue-cookies';

    export default {
        components:{
            RestProfileEdit,
            RestProfileInfo,
          
        },

        data() {
            return {
                restaurant_id: cookies.get('restaurant_id')
            }
        },

        mounted () {
            if(cookies.get('token') === null){
            this.$router.push('/RestProfile');
            }
        },
  }
</script>

<style lang="scss" scoped>

</style>