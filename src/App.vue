<template>
  <div id="app">
   <page-header></page-header>
   
 
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'APP',
  components: {
    PageHeader,
   
  

  }

}

</script>

<style>

</style>
