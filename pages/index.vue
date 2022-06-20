<template>
    <div class="s-allposts-container">
        <div v-for="post in allPosts" class="s-allpost-details">
        <h1>{{post.title}}</h1>
        <p>Author: Sally Tan</p>
        <p>Read Time: {{post.read_time}} minute read</p>
        <p>{{post.message}}</p>
        <button class="s-main-button" @click="gotoEdit(post.slug)">Edit</button>
        <button class="s-main-button" @click="gotoDelete">Delete</button>
        </div>
    </div>
</template>

<style>
    .s-allposts-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }
    .s-allpost-details {
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
    const router = useRouter()
    import { useBlog } from '@/store/blog'
    import { storeToRefs } from 'pinia'
    const blog = useBlog();
    await blog.fetchAllPosts()
    const { allPosts } = storeToRefs(blog);
    const gotoEdit = (slug) => {
        router.push('/posts/edit/'+slug)
    }
</script>
