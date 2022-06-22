import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlog = defineStore({
    id: "blog",
    state: () => ({
        allPosts: [],
        categories: [],
        postsByCat: [],
        currentPost: [],
        currentCategoryId: 1,
    }),
    actions: {
        async registerUser(creds: any) {
            try {
                await axios.post('http://localhost:8080/register', creds, { withCredentials: true})
            } catch (error) {
                console.log('error ', error)
            }
        },
        async loginUser(creds: any) {
            console.log('logging user')
            try {
                const response = await axios.post('http://localhost:8080/login', creds, { withCredentials: true })
                console.log('response ', response)
            } catch (error) {
                console.log('error ', error)
            }
        },
        async fetchAllPosts() {
            try {
                const response = await axios.get('http://localhost:8080/posts', { withCredentials: true })
                this.allPosts = response.data.results
            } catch (error) {
                console.log(error)
            }
        },
        async fetchCategories() {
            try {
                const response = await axios.get('http://localhost:8080/categories', { withCredentials: true })
                this.categories = response.data.results
            } catch (error) {
                console.log(error)
            }
        },
        async fetchPostsByCatSlug(slug: string) {
            try {
                const response = await axios.get('http://localhost:8080/posts/category/slug/'+slug, { withCredentials: true })
                this.postsByCat = response.data.results
            } catch (error) {
                console.log(error)
            }
        },
        async fetchPostBySlug(slug: string) {
            try {
                console.log('calling fetchpostbyslug')
                const response = await axios.get('http://localhost:8080/post/slug/'+slug, { withCredentials: true })
                this.currentPost = response.data.results
                console.log('currentPost ', this.currentPost)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchPostsByCatId(id: number) {
            try {
                const response = await axios.get('http://localhost:8080/posts/category/'+id, { withCredentials: true })
                this.postsByCat = response.data.results
                console.log('response.data.results ', this.postsByCat)
            } catch (error) {
                console.log(error)
            }
        },
        async addPost(post:any) {
            console.log('addPost function from pinia store called')
            try {
                await axios.post('http://localhost:8080/post', post, { withCredentials: true })
            } catch (error) {
                console.log(error)
            }
        },
        async editPost(post:any, id:any) {
            console.log('editPost function from pinia store called')
            try {
                await axios.put('http://localhost:8080/post/'+id, post, { withCredentials: true })
            } catch (error) {
                console.log(error)
            }
        },
        async editPostBySlug(post:any, slug: any) {
            console.log('editpost by slug called in pinia store')
            try {
                await axios.put('http://localhost:8080/post/slug/'+slug, post, { withCredentials: true })
            } catch(error) {
                console.log(error)
            }
        },
        async deletePost(id: any) {
            console.log('deletepost by id called in pinia ', id)
            try {
                await axios.delete('http://localhost:8080/post/'+id, { withCredentials: true })
            } catch(error) {
                console.log(error)
            }
        },
        async logout() {
            console.log('logout function called')
            try {
                await axios.post('http://localhost:8080/logout')
            } catch(error) {
                console.log(error)
            }
        },
        setCurrentCategoryId(category_id:number) {
            this.currentCategoryId = category_id
        }
    },
})
