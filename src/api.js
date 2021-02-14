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
    },

    add_book_to_cart : async function (token, bookId) {
        this.instance.defaults.headers.Authorization = "JWT " + token
        const response = await this.instance.post("cart/", {
            "book" : bookId 
        });
        return response.data;
    },
    remove_book_from_cart : async function (token, bookId, deleteAmount) {
        this.instance.defaults.headers.Authorization = "JWT " + token
        const response = await this.instance.delete("cart/", { data: {
                "book" : bookId,
                "delete_amount" : deleteAmount
            }
        });
        return response.data;
    },

    get_cart : async function(token) {
        this.instance.defaults.headers.Authorization = "JWT " + token
        const response = await this.instance.get("cart")
        return response.data;
    },

    clear_cart : async function(token) {
        this.instance.defaults.headers.Authorization = "JWT " + token
        const response = await this.instance.delete("cart/")
        return response.data;
    }
}
