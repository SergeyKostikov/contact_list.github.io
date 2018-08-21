class UserEdit {
  constructor(type, id) {
    this.baseUrl = "https://easycode-js.herokuapp.com/";
    this.baseUser = "seko";
    this.baseBlock = document.querySelector(".content-block");
    this.render();
    this.button = document.querySelector(".saveUser");

    this.button.addEventListener("click", e => {
      let nameBlock = document.querySelector("input[name=userName]");
      let lastNameBlock = document.querySelector("input[name=userLastName]");
      let emailBlock = document.querySelector("input[name=email]");
      let phoneBlock = document.querySelector("input[name=phone]");

      let user = {
        fullName: nameBlock.value + " " + lastNameBlock.value,
        phone: phoneBlock.value,
        email: emailBlock.value
      };

      this.saveUser(user);
    });
    if (type == "edit") {
      this.user = this.getUser(id);
    }
  }

  render() {
    this.baseBlock.innerHTML = `
              <div class="main-info-holder">
                <input type="text" name="userName" placeholder="Name">
                <input type="text" name="userLastName" placeholder="Last Name">
                <input type="text" name="email" placeholder="email">
                <input type="text" name="phone" placeholder="phone">
                <br><br>
                <button class="saveUser">Save User</button>
              </div>
          </div>
          `;
  }

  saveUser(user) {
    fetch(this.baseUrl + this.baseUser + "/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        let result = res._id;
        let user = new User(result);
      });
  }

  init(user) {
    let nameBlock = document.querySelector("input[name=userName]");
    let lastNameBlock = document.querySelector("input[name=userLastName]");
    let emailBlock = document.querySelector("input[name=email]");
    let phoneBlock = document.querySelector("input[name=phone]");

    nameBlock.value = user.fullName.split(" ")[0];
    lastNameBlock.value = user.fullName.split(" ")[1];
    emailBlock.value = user.email;
    phoneBlock.value = user.email;
  }

  getUser(id) {
    fetch(this.baseUrl + this.baseUser + "/users/" + id)
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.init(res);
      });
  }

  //  renderUsersList(elem){
  //   this.tableBlock.innerHTML += elem
  // }
}
