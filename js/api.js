var API = {
    instance : axios.create({
        baseURL: 'http://localhost:5000/api/',
        timeout: 1000
    }),
    
    login: function(username, password)
    {
        this.instance.post("http://localhost:5000/login/", {
            "username":username,
            "password":password
        }).then((response) => {
            this.instance.defaults.headers.common['Authorization'] ="JWT "+ response.data.token
            localStorage.setItem("token", "JWT "+ response.data.token)
        }).catch((error) => {
            this.instance.defaults.headers.common['Authorization'] = null
        })
    },
    
    get_current_user: function ()
    {
        return this.instance.get("user")
    }
}