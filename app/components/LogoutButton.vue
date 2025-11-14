<script setup>
const handleclick = () =>{
    localStorage.removeItem("token")
    navigateTo("/Authform")
}

</script>

<template>
    <button @click="handleclick">
        <div class="bg-red-500 text-white rounded p-2  hover:bg-red-700">
            Log out
        </div>
    </button>
</template>