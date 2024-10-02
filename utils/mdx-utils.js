import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 
    
    if(data) {
        return data
    } else {
        return []
    }
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const { data } = await api.get(`/posts?id=eq.${id}`)

    return data[0]
}