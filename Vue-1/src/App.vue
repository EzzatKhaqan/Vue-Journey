<script>
import Modal from './components/Modal.vue'
export default{
  
  components:{Modal},
  data(){
    return {
      wellcome:"First Vue Project",
      showModal:false
    }
  },
  methods:{
    ShowModal(){
      this.showModal = !this.showModal;
    }
  }
}

</script>

<template>
  <div class="header">
    <h1>{{ wellcome }}</h1>
    <button v-on:click="ShowModal" >Login</button>
    
    <Modal v-if="showModal" modal-title="Login" v-on:closeModal="ShowModal"/>
    
  </div>
  
</template>

<style scoped>
 
 .header{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
 }
 
 h1{
  font-style: italic;
  color:red;
 }
button{
  width:80px;
  height: 35px;
  background: white;
  color:red;
  text-align:center;
  border:1px solid red;
  border-radius: 5px;
  transition:0.5s;
}
button:hover{
  background-color: red;
  color:white;
}
</style>