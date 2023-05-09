<template>
<div class='pageheader'>

 <section id='image'>
 <div>
      <img src="~@/assets/menu icon1.webp" alt="menu icon" height="50px" />

      <img id='image' src="~@/assets/door logo.png" alt="logo" height="70px" />
        
 </div>
 </section>

    <div class='text'>
        <h2>DOORDASH</h2>
        <h3>Become a Dasher</h3>
        <h3>Become a Merchant</h3>
    </div>

    <a href="#" @click="logout">Logout</a>



    <div id='login'>  
      <h5>LogIn</h5>
      <button id='sign'>SignUP</button>
    </div>
  
    
  </div>
</template>

<script>
export default {

methods: {
    logout()
    {
        this.$router.push({name:'Login'})
    }
}

};
</script>




<style scoped>

.pageheader{
    display:grid;
    place-items: center;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.image{
    display: grid;
    align-items: start;
    margin-right: 10px;
}


#door{
    display: grid;
    color: red;
}

.text{
    display:grid;
    display: none;
}





</style>