<template>
    <form id="s-register-container" @submit.prevent="registerUser">
        <h1>Register</h1>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" placeholder="jane" v-model="firstname"/>
        <label for="lastname">Last Name</label>
        <input type="lastname" id="lastname" placeholder="lastname" v-model="lastname"/>
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="janedoe" v-model="username"/>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="janedoe@gmail.com" v-model="email"/>
        <label for="password">Password</label>
        <input type="password" id="password" placholder="janedoepassword" v-model="password"/>
        <br/>
        <button type="submit" class="s-main-button">Submit</button>
    </form>
</template>

<script setup async>
    import { useBlog } from '@/store/blog'
    const blog = useBlog()
    const router = useRouter()
    const registerUser = async() => {
        const firstnamevalue = firstname.value
        const lastnamevalue = lastname.value
        const emailvalue = email.value
        const usernamevalue = username.value
        const passwordvalue = password.value
        const creds = {
            is_guest: false,
            is_superuser: false,
            firstname: firstnamevalue,
            lastname: lastnamevalue,
            email: emailvalue,
            username: usernamevalue,
            password: passwordvalue
        }
        console.log('username ', usernamevalue)
        console.log('password ', passwordvalue)
        await blog.registerUser(creds)
        router.push("/")
    }
</script>

<style scoped>
    #s-register-container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 200px;
        height: 25px;
    }
    .s-main-button {
        border: 1px solid #333;
        padding: 15px 45px 15px 45px;
        background-color: #fff;
        cursor: pointer;
    }
</style>
