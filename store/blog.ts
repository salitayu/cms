import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlog = defineStore({
    id: "blog",
    state: () => ({
        categories: [],
        posts: []
    }),
    actions: {
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
                this.posts = response.data.results
                console.log('posts ', this.posts)
            } catch(error) {
                console.log(error)
            }
        }
    },
})
