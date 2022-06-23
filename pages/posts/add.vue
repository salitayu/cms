<template>
    <div class="s-addpost-container">
        <form @submit.prevent="createPost">
            <h1>Add Post</h1>
            <label for="title">Title</label>
            <input type="title" id="title" v-model="title" @change="onChangeTitle($event)"/>
            <label for="category">Category</label>
            <select v-model="categoryId" id="category">
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
            <button type="submit" class="s-main-button">Create Post</button>
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
    import { storeToRefs } from 'pinia'
    const blog = useBlog()
    const { categories, currentCategoryId, title, readtime, slug, message } = storeToRefs(blog)
    const router = useRouter()
    const createPost = async() => {
        const { currentCategoryId, title, readtime, slug, message } = storeToRefs(blog)
        const titlevalue = title.value
        const readtimevalue = readtime.value
        const slugvalue = slug.value
        const messagevalue = message.value
        const time = new Date()
        const blogPost = {
            user_id: 2, 
            title: titlevalue, 
            category_id: 1, 
            slug: slugvalue, 
            read_time: Number(readtimevalue), 
            message: messagevalue, 
            datetime: time
        }
        await blog.addPost(blogPost)
        router.push("/")
    }
    const onChangeTitle = (event) => {
        blog.setTitle(event.target.value)
    }
</script>
