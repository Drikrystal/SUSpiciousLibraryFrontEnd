import axios from 'axios';

export const API = {
    instance : axios.create({
        baseURL: 'http://localhost:5000/api/',
        timeout: 3000
    }),
    
    login: function(username, password)
    {
        return this.instance.post("http://localhost:5000/login/", {
            "username":username,
            "password":password
        })
    }, 
    
    get_current_user: async function (token)
    {
        this.instance.defaults.headers.Authorization = "JWT " + token
        const response = await this.instance.get("user");
        return response.data[0];
    }
}
