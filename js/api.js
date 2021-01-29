var API = {
    instance : axios.create({
        baseURL: 'http://localhost:5000/api/',
        timeout: 1000
    }),
    
    login: function(username, password)
    {
        instance.post("http://localhost:5000/login/", {
            "username":username,
            "password":password
        }).then((response) => {
            instance.defaults.headers.common['Authorization'] ="JWT "+ response.data.token
            localStorage.setItem("token", "JWT "+ response.data.token)
        }).catch((error) => {
            instance.defaults.headers.common['Authorization'] = null
        })
    },
    
    get_current_user: function ()
    {
        instance.get("user").then((response) => {
            return response.data[0]
        })
    }
}