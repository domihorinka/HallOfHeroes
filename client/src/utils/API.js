import axios from "axios";

export default {
    getCharacters: () =>{
        return axios.get('http://localhost:27017/api/characters/');
    },
    getCharacter: (id) =>{
        return axios.get('http://localhost:27017/api/characters/' + id);
    },
    deleteCharacter: (id) =>{
        return axios.delete('http://localhost:27017/api/characters/' + id);
    },

    saveCharacter: (charData) =>{
        return axios.post('http://localhost:27017/api/characters/',charData);
    },
}