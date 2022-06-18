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
        async fetchAllPosts() {
            try {
                const response = await axios.get('http://localhost:8080/posts')
                this.allPosts = response.data.results
            } catch(error) {
                console.log(error)
            }
        },
        async fetchCategories() {
            try {
                const response = await axios.get('http://localhost:8080/categories')
                this.categories = response.data.results
            } catch(error) {
                console.log(error)
            }
        },
        async fetchPostsByCatId(id: number) {
            try {
                const response = await axios.get('http://localhost:8080/posts/category/'+id)
                this.postsByCat = response.data.results
            } catch(error) {
                console.log(error)
            }
        },
        async addPost(title:string, category_id:number, read_time:any, excerpt:string, message:string, datetime:any) {
            console.log('addPost function from pinia store called')
            try {
                await axios.post('http://localhost:8080/post', {user_id: 2, category_id:category_id, title:title, read_time:Number(read_time), excerpt:excerpt, message:message, date_time:datetime})
            } catch(error) {
                console.log(error)
            }
        },
        setCurrentCategoryId(category_id:number) {
            this.currentCategoryId = category_id
        }
    },
})
