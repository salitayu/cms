<template>
    <form id="s-login-container" @submit.prevent="loginWithUser">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="janedoe" v-model="username"/>
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
    const loginWithUser = async() => {
        const usernamevalue = username.value
        const passwordvalue = password.value
        const creds = {
            username: usernamevalue,
            password: passwordvalue
        }
        console.log('username ', usernamevalue)
        console.log('password ', passwordvalue)
        await blog.loginUser(creds)
        router.push("/")
    }
</script>

<style scoped>
    #s-login-container {
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
</style>
