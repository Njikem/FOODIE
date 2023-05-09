<template>
    <div>
<rest-login></rest-login>
<rest-logout></rest-logout>
<rest-sign-up></rest-sign-up>
    </div>
</template>

<script>
import RestLogin from '@/components/RestLogin.vue'
import RestLogout from '@/components/RestLogout.vue'
import RestSignUp from '@/components/RestSignUp.vue'

    export default {
        components:{
            RestLogin,
            RestLogout,
            RestSignUp,
        }
        
    }
</script>

<style lang="scss" scoped>

</style>