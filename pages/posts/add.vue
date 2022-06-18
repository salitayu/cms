<template>
    <div class="s-addpost-container">
        <form @submit.prevent="createPost">
            <label for="title">Title</label>
            <input type="title" id="title" v-model="title"/>
            <label for="category">Category</label>
            <select v-model="categoryId" id="category" @change="onChangeCategoryId($event)">
                <option
                    v-for="category in categories"
                    v-bind:key="category.category_name"
                    v-bind:value="category.id">{{ category.category_name }}</option>
            </select>
            <label for="readtime">Read Time</label>
            <input type="number" id="readtime" v-model="readtime"/>
            <label for="slug">Slug</label>
            <input type="text" id="slug" v-model="slug"/>
            <label for="excerpt">Excerpt</label>
            <input type="text" id="excerpt" v-model="excerpt"/>
            <label for="message">Message</label>
            <textarea id="message" v-model="message"/>
            <br/>
            <button type="submit" class="s-main-button">Create Post</button>
        </form>
    </div>
</template>
<style>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.s-main-button {
    border: 1px solid #333;
    padding: 15px 45px 15px 45px;
    background-color: #fff;
    cursor: pointer;
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
    const { categories } = blog
    const createPost = async() => {
        const { currentCategoryId } = blog
        const titlevalue = title.value
        const readtimevalue = readtime.value
        const slugvalue = slug.value
        const excerptvalue = excerpt.value
        const messagevalue = message.value
        const time = new Date()
        console.log('create post function called ', titlevalue, currentCategoryId, readtimevalue, excerptvalue, messagevalue, time)
        await blog.addPost(titlevalue, currentCategoryId, readtimevalue, excerptvalue, messagevalue, time)
    }
    const onChangeCategoryId = (event) => {
        console.log('onChangeCategoryId ', event.target.value)
    }
</script>
