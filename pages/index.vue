<template>
  <div class="s-cms-main">
    <h1>Home</h1>
    <li v-for="cat in cats">{{cat}}</li>
  </div>
</template>

<style scoped>
</style>

<script setup async>
  import { useBlog } from '@/store/blog'
  const blog = useBlog()
  //const cats = await blog.fetchUsers()
  console.log('cats ', blog.categories)
</script>
