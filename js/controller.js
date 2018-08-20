class Controller{
    constructor(model, view){
        this.baseUrl = "https://easycode-js.herokuapp.com/"
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
        
        if(!this.contacts){
            this.getUsers()
        }
    } 

    addLesteners(){
        Object.keys(this.navigation).forEach((elem) => {           
            this.navigation[elem].addEventListener("click",(e) => {
                e.preventDefault()
                this.state = elem
                app.setState(this.state)

                switch(elem){
                    case "contactsList":                        
                        this.getUsers()
                        break
                    case "keypad":
                        let keypad = new Keypad()
                        keypad.render()
                    break
                    case "contact":
                    console.log(elem)
                    break
                    case "user":
                    console.log(elem)
                    break
                    case "addUser":
                        let addContact = new AddContact()
                        addContact.render()
                    break

                }
            })           
        })
    }
    
    getUsers(){
        fetch(this.baseUrl+this.baseUser)
        .then(function(response){
            return response.json()
        })
        .then(function(res){
            let result = res.users
            let contacts = new Contacts()
            contacts.render(result)
        })
    }

    getState(){
        return this.state;
    }  
}

