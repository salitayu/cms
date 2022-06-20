<template>
    <div class="s-posts-container">
        <div v-for="post in postsByCat" class="s-post-details" :key="post.id">
        <h1>{{post.title}}</h1>
        <p>Author: Sally Tan</p>
        <p>Read Time: {{post.read_time}} minute read</p>
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
    .s-main-button {
        border: 1px solid #333;
        padding: 15px 45px 15px 45px;
        background-color: #fff;
        cursor: pointer;
    }
    h1 {
        margin-top: 5px;
    }
</style>

<script setup async>
    import { useBlog } from '@/store/blog'
    const router = useRouter()
    const route = useRoute()
    const blog = useBlog()
    const slug = route.params.slug
    console.log('slug ', slug)
    await blog.fetchPostsByCatSlug(slug)
    const { postsByCat } = blog
    const gotoEdit = (slug) => {
        router.push('/posts/edit/'+slug)
    }
    const gotoDelete = () => {
        console.log('delete ')
    }
</script>
