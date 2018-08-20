class View{
    constructor(state){
        this.baseContainer = document.body       
        this.createStructure(state)
    }

    createStructure(state){
        this.baseContainer.innerHTML = `
            <header class="header">
                <div class="container top-radius">
                    <h2>${state}</h2>
                </div>
            </header>
            <main>
                <div class="container content-block"></div>
            </main>
            <footer class="footer">
                <div class="container bottom-radius">
                    <nav class="main-nav">
                        <a href="" class="tab active" id="menu_contacts_list">
                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                            <span class = "tab-text">Contacts</span>
                        </a>
                        <a href="" class="tab" id="menu_keypad">
                            <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
                            <span class = "tab-text">Keypad</span>
                        </a>
                        <a href="" class="tab" id="menu_contact">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            <span class = "tab-text">Edit contact</span>
                        </a>
                        <a href="" class="tab" id="menu_user">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                            <span class = "tab-text">User</span>
                        </a>
                        <a href="" class="tab" id="menu_add_user">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            <span class = "tab-text">Add user</span>
                        </a>
                    </nav>
                </div>
            </footer>
        `
    }



}