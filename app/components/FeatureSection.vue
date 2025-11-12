<script setup>
const cards = [{ title: "Team Collaboration", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae id. Beatae cupiditate minima inventore perspiciatis illum dolor ratione dolorem aut architecto animi itaque doloremque, aliquam dolore eum, iure praesentium." },
                { title: "Task management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae id. Beatae cupiditate minima inventore perspiciatis illum dolor ratione dolorem aut architecto animi itaque doloremque, aliquam dolore eum, iure praesentium." },
                { title: "Assignment", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae id. Beatae cupiditate minima inventore perspiciatis illum dolor ratione dolorem aut architecto animi itaque doloremque, aliquam dolore eum, iure praesentium." },
                 { title: "Role management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae id. Beatae cupiditate minima inventore perspiciatis illum dolor ratione dolorem aut architecto animi itaque doloremque, aliquam dolore eum, iure praesentium." },
                ]
</script>
<template>
    <div class="flex m-20 font-mono mb-50">
        <div v-for="card in cards" :key="card.title" 
        class="border mx-10 rounded-xl  p-4 border-slate-200
        shadow-md 
        "
        
        >
     
            <h2 class="text-2xl font-bold ">{{ card.title }}</h2>
            <hr/>
            <p class="text-gray-500 text-lg">{{ card.description }}  </p>
                   
        </div>
    </div >
</template>
