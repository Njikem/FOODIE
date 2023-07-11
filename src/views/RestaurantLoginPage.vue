<template>
    <div>
  <rest-login></rest-login>
  <rest-logout></rest-logout>
    </div>
</template>

<script>
import RestLogin from '@/components/RestLogin.vue'
import RestLogout from '@/components/RestLogout.vue'
    export default {
        components: {
            RestLogin,
            RestLogout,
        }
        
    }
</script>

<style  scoped>

</style>