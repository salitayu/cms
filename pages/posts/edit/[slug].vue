<template>
    <div class="s-editpost-container">
        <form @submit.prevent="editPost">
            <h1>Edit Post</h1>
            <label for="title">Title</label>
            <input type="title" id="title" v-model="title"/>
            <label for="category">Category</label>
            <select v-model="currentPost.category_id" id="category" @change="changeCategory($event)">
                <option
                    v-for="category in categories"
                    v-bind:key="category.category_name"
                    v-bind:value="category.id">{{ category.category_name }}</option>
            </select>
            <label for="readtime">Read Time</label>
            <input type="number" id="readtime" v-model="readtime"/>
            <label for="slug">Slug</label>
            <input type="text" id="slug" v-model="slug"/>
            <label for="message">Message</label>
            <textarea id="message" v-model="message"/>
            <br/>
            <button type="submit" class="s-main-button">Edit Post</button>
        </form>
    </div>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input, select {
        width: 600px;
        height: 25px;
        font-size: 1rem;
    }
    textarea {
        width: 600px;
        height: 400px;
    }
</style>

<script setup async>
    import { useBlog } from '@/store/blog.ts'
    
    const blog = useBlog()
    const router = useRouter()
    const route = useRoute()

    const slug = route.params.slug
    await blog.fetchPostBySlug(slug)
    
    const { currentPost } = blog
    const { categories } = blog

    let title = currentPost[0].title
    const readtime = currentPost[0].read_time
    const message = currentPost[0].message

    const editPost = async() => {
        const blog = useBlog()
        const { currentPost } = blog
        const { currentCategoryId } = blog
        const time = new Date()
        const blogPost = {
            user_id: 2, 
            title: document.getElementById('title').value, 
            category_id: Number(currentCategoryId), 
            slug: document.getElementById('slug').value, 
            read_time: Number(document.getElementById('readtime').value), 
            message: document.getElementById('message').value, 
            datetime: time
        }
        await blog.editPost(blogPost, currentPost[0].post_id)
        router.push("/")
    }
    const changeCategory = (event) => {
        console.log('changingCategoryId with ', event.target.value)
        blog.setCurrentCategoryId(event.target.value)
        console.log('newcategoryid ', blog.currentCategoryId)
        currentPost[0].category_id = blog.currentCategoryId
    }
</script>
