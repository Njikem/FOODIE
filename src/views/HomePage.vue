<template>
  <div>
    <body>
      <div class="main_body">
        <img src="~@/assets/door logo.png" alt="logo" height="70px" />
        <h3>Get more from your</h3>
        <h2>neighbourhood</h2>
        <input
          type="text"
          placeholder="Enter delivery address"
          ref="Enter delivery address_input"
        />
      </div>
      <h2>Favourites Near You</h2>

      <section id="panda">

     <div class="jolli">
          <img src="~@/assets/jollibee.webp" alt="food" height="200px" />
          <h5>Jollibee</h5>
          <p>26mins .$0 delivery fee</p>

          <img src="~@/assets/panda.avif" alt="food" height="200px" />
          <h5>Panda Express</h5>
          <p>25mins .$0 delivery fee</p>
     </div>
      
      <div>
          <img src="~@/assets/cactus.jpg" alt="food" height="200px" />
          <h5>Cactus Restaurant</h5>
          <p>28mins .$0 delivery fee</p>

          <img src="~@/assets/Donald.jpg" alt="food" height="200px" />
          <h5>McDolnald's</h5>
          <p>18mins .$0 delivery fee</p>
        </div>

         <div>
          <img src="~@/assets/tim1.jpg" alt="#" height="200px"/>
          <h5>Tim Hortons</h5>
          <p>15mins .$0 delivery fee</p>

          <img src="~@/assets/star.webp" alt="starbucks" height="200px" />
          <h5>17mins .$0 delivery fee</h5>
         </div>

      </section>

    </body>


    <footer>

    <router-link to="/Login">Go Login</router-link>
    <router-link to="/">Go Home</router-link>
    <router-link to="/SignUp">Go SignUp</router-link>
    <router-link to="/">Go Home</router-link>
    <router-link to="/ClientProfile">ClientProfile</router-link>
    <router-link to="/Restaurant">Restaurant</router-link>

    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.main_body {
  display: grid;
  place-items: center;
  padding: 10px 0px;
  background-color: red;
}


h3 {
  color: white;
  font-size: 30px;
  line-height-step: 20px;
}

input {
  display: grid;
  border: bold;
  border-radius: 20px;
  padding: 13px 30px;
  margin-bottom: 50px;
}

h2 {
  display: grid;
  color: white;
  font-size: 30px;
}

#panada{
    display:grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
 
 img{
    display:grid;
    border: bold;
    border-radius: 15px;
 }

 .jolli{
    display:grid;
    place-items: center;
 }




</style>
