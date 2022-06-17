import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlog = defineStore({
    id: "blog",
    state: () => ({
        allPosts: [],
        categories: [],
        postsByCat: []
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
        }
    },
})
