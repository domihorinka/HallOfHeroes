import axios from "axios";

export default {
    getCharacters: () =>{
        return axios.get('/api/character');
    },
    getCharacter: (id) =>{
        return axios.get('/api/character/' + id);
    },
    deleteCharacter: (id) =>{
        return axios.delete('/api/character/' + id);
    },

    saveCharacter: () =>{
        return axios.post('/api/character',charData);
    },
}