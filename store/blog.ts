import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlog = defineStore({
    id: "blog",
    state: () => ({
        categories: [],
        posts: []
    }),
    getters: {
        async fetchUsers() {
            try {
                const response = await axios.get('http://localhost:8080/categories')
                this.categories = response.data.results
            } catch(error) {
                console.log(error)
            }
        }
    },
})
