 <template>
    <div>
        <div>
        <h2>DeleteProfile</h2>
       <input type="text" placeholder="email" ref="email">
        <input type="text" placeholder="First Name" ref="First_name">
        <input type="text" placeholder="Last Name" ref="Last_name">
        <input type="text" placeholder="password" ref="password">
        <button @click="delete_profile">Delete</button>
       </div>
 
    </div>
 </template>
 
 <script>
   
export default {
};
</script>
 
 <style lang="scss" scoped>
</style>