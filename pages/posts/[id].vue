<template>
    <div class="s-posts-container">
        <div v-for="post in postsByCat" class="s-post-details">
        <h1>{{post.title}}</h1>
        <p>Author: Sally Tan</p>
        <p>Read Time: {{post.read_time}} minute read</p>
        <p><i>{{post.excerpt}}</i></p>
        <p>{{post.message}}</p>
        </div>
    </div>
</template>

<style>
    .s-posts-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }
    .s-post-details {
        width: 50%;
        padding: 20px;
        border: 1px solid #333;
        border-radius: 5px;
    }
    h1 {
        margin-top: 5px;
    }
</style>

<script setup async>
    import { useBlog } from '@/store/blog'
    const route = useRoute()
    const blog = useBlog()
    await blog.fetchPostsByCatId(route.params.id)
    const {postsByCat} = blog
</script>
