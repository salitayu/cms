<template>
<div>
    <div class="s-navbar-container">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/posts/add">Add Post</NuxtLink>
        <NuxtLink to="/register">Register</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
        <a @click="logout">Logout</a>
    </div>
    <div>
      <div class="s-cms-container">
          <NuxtLink v-for="cat in cats" :key="cat.category_id" :href="`/posts/${cat.slug}`">{{cat.category_name}}</NuxtLink>
      </div>
    </div>
    <main>
        <slot/>
    </main>
</div>
</template>

<script setup async>
  import { useBlog } from '@/store/blog'
  const router = useRouter()
  const blog = useBlog()
  await blog.fetchCategories()
  const cats = blog.categories
  const logout = () => {
    blog.logout()
    router.push('/')
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.s-navbar-container {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #eaeaeb;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 20px;
}

.s-navbar-container a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

.s-navbar-container a:hover {
  color: #000;
}

.s-cms-container {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #eaeaeb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 30px;
}

.s-cms-container a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

.s-cms-container a:hover {
  color: #000;
}
</style>
