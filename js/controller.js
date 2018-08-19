class Controller{
    constructor(model, view){
        this.baseUrl = "http://easycode-js.herokuapp.com/"
        this.baseUser = "seko"
        this.state = "contactsList"
        this.model = model
        this.view = view
        this.navigation = {
            contactsList: document.getElementById("menu_contacts_list"),
            keypad: document.getElementById("menu_keypad"),
            contact: document.getElementById("menu_contact"),
            user: document.getElementById("menu_user"),
            addUser: document.getElementById("menu_add_user"),
        }       
    } 

    addLesteners(){
        Object.keys(this.navigation).forEach((elem) => {           
            this.navigation[elem].addEventListener("click",function(e){
                e.preventDefault()
                this.state = elem
                app.setState(this.state)
                switch(elem){
                    case elem == "contactsList":
                    this.getUsers()
                        let contactsList = new Contacts()
                        contactsList.render()
                        break
                    case elem == "keypad":
                    console.log(elem)
                    break
                    case elem == "contact":
                    console.log(elem)
                    break
                    case elem == "user":
                    console.log(elem)
                    break
                    case elem == "addUser":
                    console.log(elem)
                    break

                }
            })           
        })
    }
    
    getUsers(){
        console.log(this.baseUrl+this.baseUser)
        fetch(this.baseUrl+this.baseUser)
        .then(function(response){
            return response.json()
        })
        .then(function(res){
            let result = res.users
            //contactsList.render(result)
            console.log(result)
        })
    }

    getState(){
        return this.state;
    }  
}

