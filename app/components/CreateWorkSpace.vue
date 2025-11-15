<script setup>
import axios from 'axios';

const handleClick = async () =>{

 try{
    const req = await axios.post("http//localhost/")
 }catch{

 }
}

</script>

<template>
    <button class="p-2 m-2 border rounded-lg hover:bg-green-500 ">
        <div>
            create workspace
        </div>
    </button>
</template>