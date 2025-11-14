<script setup>
import { ref } from 'vue';
import axios from 'axios';

const n = ref("")
const setData = ref(false)
const user_name = ref("khettawan")
const username = user_name.value
const handleClick = async () =>{
  try{
    const req = await axios.get(`http://localhost:5000/api/info/userinfo`,{
       params: { username }
    })

     n.value = req.data.name
     setData.value = true
     console.log(name)
    
  }catch(err){
    console.log(err)
  }finally{

  }
}

</script>

<template>
 <button class="p-2 rounded bg-green-500 cursor-pointer"
@click="handleClick">
      <div>
        FETCHDATA
      </div>
 </button>
    <div v-if="setData">
            {{ n }}
    </div>

</template>