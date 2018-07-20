class PhoneApp{
  constructor(){
    this.database = [];
  }

  addUser (options) {
    let user = {};
    user.id = this.database.length + 1;
    user.avatar = options.avatar || "avatar-2"
  
    if (options.name) {
      user.name = options.name;
    }
    if (options.phone) {
      if (!this.checkPhoneNumber(options.phone)) {
        user.phone = options.phone;
      } else {
        console.log(
          "не удалось сохранить номер телефона, Телефон должен состоять только из цифр"
        );
      }
    }
    if (options.homePhone) {
      if (!this.checkPhoneNumber(options.homePhone)) {
        user.homePhone = options.homePhone;
      } else {
        console.log(
          "не удалось сохранить номер телефона, Телефон должен состоять только из цифр"
        );
      }
    }
    this.database.push(user);
  };
  checkPhoneNumber(phone){isNaN(+phone)};

  checkAndFormatPhoneNumber(phone) {
    if (!isNaN(+phone)) {
      let phoneCode = phone
        .split("")
        .splice(0, 3)
        .join("");
      let resultPhone =
        "(" +
        phoneCode +
        ") " +
        phone.slice(3, 5) +
        "-" +
        phone.slice(5, 7) +
        "-" +
        phone.slice(7);
      return resultPhone;
    }
  };

  deleteUser(id) {
    this.database.forEach((elem, index) => {
      if (elem.id == id) {
        this.database.splice(index, 1);
      }
    });
  };

  searchUserByName(name) {
    return this.database.reduce(function(newElem, elem) {
      if (elem.name == name) {
        newElem.push(elem);
      }
      return newElem;
    }, []);
  };

  editUser(id, options) {
    this.database.map(elem => {
      if (elem.id == id) {
        if (options.name) {
          elem.name = options.name;
        }
        if (options.phone) {
          elem.phone = options.phone;
        }
        if (options.homePhone) {
          elem.homePhone = options.homePhone;
        }
      }
    });
  };
  filterUser(param) {
    return this.database.filter(elem => {
      if (elem[param]) {
        return elem;
      }
    });
  };
  sortUser(param, direction) {
    return this.database.sort((a, b) => {
      if (direction) {
        if (direction == "big") {
          return a[param] < b[param];
        }
        if (direction == "small") {
          return a[param] > b[param];
        }
      } else {
        return a.id > b.id;
      }
    });
  };
}

class User{
  constructor(options){
    this.name = options.name
    this.phone = options.phone
    this.homePhone = options.homePhone
    this.avatar = options.avatar
  }
}

let vasya = new User({
  name: "Vasya",
  phone: "123456789",
  homePhone: "11111"
})
let petja = new User({ name: "Petja", phone: "123456798" })
let brigitte = new User({ name: "Brigitte", phone: "123457689", avatar:"girl-1" })
let tracer = new User({ name: "Tracer", phone: "123546789" })
let anduin = new User({
  name: "Anduin",
  phone: "113456789",
  homePhone: "535353"
})
let torgrim = new User({ name: "Torgrim", phone: "321456789", avatar:"man-2" })
let anduin2 = new User({
  name: "Anduin",
  phone: "113451189",
  homePhone: "222222"
})
let user = new User({
  name: "User",
  phone: "113451189",
  homePhone: "222222"
})
let name = new User({
  name: "Name",
  phone: "113451189",
  homePhone: "222222"
})
let someUaser = new User({
  name: "someUaser",
  phone: "113451189",
  homePhone: "222222"
})
let blabla = new User({
  name: "blabla",
  phone: "113451189",
  homePhone: "222222"
})

class App{
  constructor(){
    this.baseBlock = document.querySelector(".contact-table");
  }

  createUsersList(users){
    users.database.forEach(elem => {
      this.render(this.createUserTR(elem))
    })
  }

  createUserTR(user){
    let tr = this.newElem("tr");
    tr.className = "borderdered";

    let avatarTD = this.newElem("td");
    let infoTD = this.newElem("td");
    let buttonTD = this.newElem("td");

    avatarTD.className = "app-contact-avatar"
    infoTD.className = "app-contact-name"
    buttonTD.className = "app-contact-buttons"

    let p_name = this.newElem("p")
    p_name.textContent = user.name
    let p_phone = this.newElem("p")
    p_phone.textContent = user.phone

    let avatarDIV = this.newElem("div")
    avatarDIV.className = "round-avatar"

    let avatarImg = this.newElem("img");
    avatarImg.setAttribute("src","img/"+user.avatar+".png")

    let editA = this.newElem("a");
    editA.setAttribute("href","contact.html?do=edit");
    editA.className = "icon-link";
    
    let editIconAwesome = this.newElem("i");
    editIconAwesome.classList.add("far","fa-edit");

    editA.appendChild(editIconAwesome);
    buttonTD.appendChild(editA);

    infoTD.appendChild(p_name)
    infoTD.appendChild(p_phone)

    avatarDIV.appendChild(avatarImg)
    avatarTD.appendChild(avatarDIV)

    tr.appendChild(avatarTD);
    tr.appendChild(infoTD)
    tr.appendChild(buttonTD)
    tr.setAttribute("onclick", "window.location.href = 'contact.html'");

    return tr
  }

  render(elem){
    this.baseBlock.appendChild(elem)
  }

  newElem(elem){
    return document.createElement(elem);
  }
}

let app = new App()


const myPhoneApp = new PhoneApp();
myPhoneApp.addUser(vasya);
myPhoneApp.addUser(petja);
myPhoneApp.addUser(brigitte);
myPhoneApp.addUser(tracer);
myPhoneApp.addUser(anduin);
myPhoneApp.addUser(torgrim);
myPhoneApp.addUser(anduin2);
myPhoneApp.addUser(user);
myPhoneApp.addUser(name);
myPhoneApp.addUser(someUaser);
myPhoneApp.addUser(blabla);

console.log(app.createUsersList(myPhoneApp))
console.log(myPhoneApp)

