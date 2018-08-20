class App{
    constructor(){
        this.state = "contactsList"
        this.model = new Model(this.state)
        this.view = new View(this.state)
        this.controller = new Controller(this.model,this.view)
    }
    
    setState(state){
        this.state = state
    }
}

let app = new App()
app.controller.addLesteners()








