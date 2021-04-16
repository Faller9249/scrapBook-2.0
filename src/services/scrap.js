import api from './api';

const config = {
    headers: {
        "Content-type": "application/json",
        Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjo5LCJpYXQiOjE2MTg1MzIyOTcsImV4cCI6MTYxODYxODY5N30.DOtAMmIOVybz8iAWnRN0tGCwYUm7DWik1igsfd9VM5kKN8OVgFpu2e1vL-1kqhApoSJsacKqBNpU935ju8vegBWnIHK35F3Ykj4azgmSs6BHIHUfA4FRN3GpAn6N9KglLLn8nReXulXsDDj8WMWYR1UjxeBUhfoQbbwj1_oZyKrtBMZS8Xoy-DlgEQnBtKRGuIsKTeTFk6FGiwJSXUQ-1AZrh-IkN7j6uNjEXy6_hL2vo5PKpFpdM_igZjqe8soIw7-bs6t6hcjfn_e_BZEMKIgsI7xqNNsJh46-DCZMawBqfd5vl1DX4agUdPEHR2MZhjQaNpgcM3sKexnYwVsHZA",
    }
};

class Scrap {
    async getScraps() {
        const response = await api.get('scraps', config);

        return response.data;
    }

    async postScrap(titulo, descricao){
        const response = await api.post('scraps',{
            title: titulo,
            longText: descricao,
        },
        config
        );
        return response.data;
    }
}

export default new Scrap();