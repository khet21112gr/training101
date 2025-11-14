<script setup>
import { ref } from 'vue';
import axios from 'axios';
const isSignUp = ref(false)
const username = ref("")
const password = ref("")
const comfirmPassword = ref("")
const setError = ref(false)
const Error = ref(null)
const successMessage = ref(null)
const setSuccess = ref(false)

const handleToggle = () => {
    isSignUp.value = !isSignUp.value
}

const handleSubmit = async () => {
    //isSignup = true  register 
    setError.value = false
    Error.value = null
    if (isSignUp.value) {
        if (username.value.length < 6 || password.value.length < 6 || comfirmPassword.value.length < 6) {
             setError.value = true
            Error.value = "Must be at least 6 characters"
            setTimeout(() => {
                setError.value = false
                Error.value = null
            }, 3000);
            return
        }
        try{
            const req = await axios.post('http://localhost:5000/api/auth/register',{
                username: username.value,
                password: password.value
            })
            if(req.data.ok){
                setSuccess.value = true   
                successMessage.value = "Sign up success , Log in now"
                isSignUp.value = false
                setTimeout(() => {
                 setSuccess.value = false
                successMessage.value = ""
                }, 2000);
            }
            
        }catch(err){
           return 
        }
        // Sign in 
    }else{
        if(username.value.length < 1 || password.value.length < 1){
            Error.value = 'กรุณากรอกข้อมูล'
            setError.value = true
            setTimeout(() => {
                setError.value = false
                Error.value = null
            }, 3000);
            return
        }
        try{
            const req = await axios.post('http://localhost:5000/api/auth/login', {
                username: username.value,
                password: password.value
            })
            username.value = "";
            password.value = ""
            console.log(req.data.userRole)
            console.log(req.data.token)
            if(req.data.userRole ==  "user"){
                localStorage.setItem("token",req.data.token)
                localStorage.setItem("name",req.data.username)
                navigateTo('/Home')
            }
        }catch{

        }

    }

}
</script>

<template>
    <div>
        <NuxtLink to="/">
            <p class=" m-10 font-bold cursor-pointer">
                Back
            </p>
        </NuxtLink>
    </div>
    <div class="flex justify-center m-40  ">
        <div class="">
            <p class="text-3xl font-mono font-bold w-90">{{ isSignUp ? "Sign Up  !" : "Welcome Back !" }} </p>
            <form @submit.prevent="handleSubmit">
                <div>
                    <label class="block font-sm text-gray-400 font-mono p-2 ">username</label>
                    <input v-model="username" type=text
                        class="border-2 rounded w-70 p-1 font-mono font-bold focus:bg-blue-100  " />
                </div>
                <div>
                    <label class="block font-sm text-gray-400 font-mono p-2 ">password</label>
                    <input v-model="password" type="password"
                        class="border-2 rounded w-70 p-1 font-mono font-bold focus:bg-blue-100 " />
                </div>
                <div v-if="isSignUp">
                    <label class="block font-sm text-gray-400 font-mono p-2 ">confirm password</label>
                    <input v-model="comfirmPassword" type="password"
                        class="border-2 rounded w-70 p-1 font-mono font-bold focus:bg-blue-100 " />
                </div>
                <div v-if="setError" class="block font-sm  font-mono inline-flex p-2 text-red-500 border-red-200 mt-2 ">
                    {{ Error }}
                </div>
                <div v-if="setSuccess" class="block font-sm font-mono inline flex p-2 text-green-500">{{ successMessage }}</div>
                <div class="pt-7  ">
                    <button type="submit" class=" border border-indigo-400 rounded w-70 p-1 bg-indigo-400 shadow-xl
                    text-white font-mono cursor-pointer hover:bg-indigo-600 "> {{ isSignUp ? "Sign Up" : "SignIn"}}</button>

                </div>
                <div class="flex pt-7 gap-3 items-center ">
                    <p class=" font-mono  text-slate-500 "> {{ isSignUp ? "Already have an account? " : " Don't have an account?" }} </p>
                    <p @click="handleToggle" class=" font-mono font-bold text-blue-500 cursor-pointer"> {{ !isSignUp ? "Register" : "Sign In" }} </p>
                </div>
            </form>
        </div>

    </div>
</template>