import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlog = defineStore({
    id: "blog",
    state: () => ({
        allPosts: [],
        categories: [],
        postsByCat: [],
        currentCategoryId: 1,
    }),
    actions: {
        async loginUser(creds: any) {
            try {
                const response = await axios.post('http://localhost:8080/login', creds)
                console.log('response ', response)
            } catch (error) {
                console.log('error ', error)
            }
        },

        async fetchAllPosts() {
            try {
                const response = await axios.get('http://localhost:8080/posts')
                this.allPosts = response.data.results
            } catch (error) {
                console.log(error)
            }
        },

        async fetchCategories() {
            try {
                const response = await axios.get('http://localhost:8080/categories')
                this.categories = response.data.results
            } catch (error) {
                console.log(error)
            }
        },

        async fetchPostsByCatId(id: number) {
            try {
                const response = await axios.get('http://localhost:8080/posts/category/'+id)
                this.postsByCat = response.data.results
                console.log('response.data.results ', this.postsByCat)
            } catch (error) {
                console.log(error)
            }
        },

        async addPost(post:any) {
            console.log('addPost function from pinia store called')
            try {
                await axios.post('http://localhost:8080/post', post)
            } catch (error) {
                console.log(error)
            }
        },

        async editPost(post:any) {
            console.log('editPost function from pinia store called')
            try {
                await axios.put('http://localhost:8080/post', post)
            } catch (error) {
                console.log(error)
            }
        },
        
        setCurrentCategoryId(category_id:number) {
            this.currentCategoryId = category_id
        }
    },
})
