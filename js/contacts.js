class Contacts {
  constructor() {
    this.baseBlock = document.querySelector(".content-block");
    this.baseUrl = "https://easycode-js.herokuapp.com/";
		this.baseUser = "seko";
		this.users = []
	}

  render(users) {
    this.baseBlock.innerHTML = `
			<form class="form-inline search-form">
				<div class="form-group">
					<label class="sr-only" for="search">Search</label>
					<input type="text" class="form-control" id= "search" placeholder="Search">
				</div>
			</form>
			<table class="table table-hover contacts">
				<thead>
					<tr>
						<th>Name</th>
						<th>Last name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					${this.createUsersListView(users)}
				</tbody>
			</table>
		`;
		this.editContactOnClickListener();
		this.searchOnChangeListener()
  }

  createUsersListView(users) {
    return users.reduce((newElem, elem) => {
      return newElem + this.createUserTR(elem);
    }, "");
  }

  editContactOnClickListener() {
    let tableBlock = document.querySelector(".contacts");
    tableBlock.addEventListener("click", function(e) {
      let user_id = e.target.className;
      if (user_id) {
        let user = new User(user_id);
      }
    });
	}
	
	searchOnChangeListener(){
		let searchBlock = document.getElementById("search")
		let tBody = document.querySelector("tbody")
		
		searchBlock.addEventListener("keyup", (e) => {
			tBody.innerHTML = this.createUsersListView(this.search(searchBlock.value))
			//this.render(this.search(searchBlock.value))
		})
	}

  getUsers() {
    fetch(this.baseUrl + this.baseUser)
      .then(response => {
        return response.json();
      })
      .then(res => {
				let result = res.users;
				this.users = result;
        this.render(result);

      });
	}
	
	search(str){
		if(str!=""){
			return this.users.filter(elem => {
				let name = elem.fullName
				let phone = elem.phone
				let email = elem.email

				if(name.search(str)!=-1){
					return elem
				}else if(phone.search(str)!=-1){
					return elem
				}else if(email.search(str)!=-1){
					return elem
				}
			})
		}else{
			return this.users
		}
	}

  createUserTR(user) {
    return `
			<tr>
				<td class="${user._id}">${user.fullName.split(" ")[0]}</td>
				<td class="${user._id}">${user.fullName.split(" ")[1]}</td>
				<td class="${user._id}">${user.email}</td>
			</tr>
	`;
  }

  //  renderUsersList(elem){
  //   this.tableBlock.innerHTML += elem
  // }
}
