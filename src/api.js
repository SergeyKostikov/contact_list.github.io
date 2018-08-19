class Api{
    constructor(){
        this.xhr = new XMLHttpRequest()
        this.baseUrl = "http://easycode-js.herokuapp.com/seko"
        this.result = this.getAllUsers()
    }

    addUser(user){
        this.xhr.onreadystatechange = () => {
            if(this.xhr.readyState === XMLHttpRequest.DONE){
                console.log(this.xhr.response)
            }
        }
        this.xhr.open('POST', this.baseUrl+"/users", true)
        this.xhr.setRequestHeader("Content-type","application/json")
        this.xhr.send(JSON.stringify(user))
    }

    getAllUsers(){
        this.xhr.onreadystatechange = () => {
            if(this.xhr.readyState == XMLHttpRequest.DONE){ 
                let arr = JSON.parse(this.xhr.responseText)           
                app.render(JSON.parse(this.xhr.responseText))
            }
        }
        this.xhr.open('GET', this.baseUrl+"/users", true)
        this.xhr.send()
    }
}


