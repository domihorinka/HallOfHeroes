import axios from "axios";

export default {
    getCharacters: () => {
        return axios.get('/api/characters');
    },
    getCharacter: (id) => {
        return axios.get('/api/characters/' + id);
    },
    deleteCharacter: (id) => {
        return axios.delete('/api/characters' + id);
    },

    saveCharacter: (charData) => {
        return axios.post('/api/characters', charData);
    },
}