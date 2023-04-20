<script>
import { state } from "./state"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

export default {
    data() {
        return {
            state,
           
        };
    },
    components:  { 
      AppHeader, 
      AppMain,
     
    }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  

 
  
</template>

<style></style>