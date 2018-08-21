class Contacts{
  constructor(){
		this.baseBlock = document.querySelector(".content-block")
		this.baseUrl = "https://easycode-js.herokuapp.com/"
		this.baseUser = "seko"
			
	}
  
  render(users){	
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
		`
  }
  
  createUsersListView(users){
		return users.reduce((newElem, elem) => {
			return newElem + this.createUserTR(elem)
		},"")
	}

	editContactOnClickListener(){
		let tableBlock = document.querySelector(".contacts")
		tableBlock.addEventListener("click", function(e){
			let user_id = e.target.className
			if(user_id){
				let user = new User("show",user_id)
			}
		})
	}

	getUsers(){
		fetch(this.baseUrl+this.baseUser)
		.then(response => {
				return response.json()
		})
		.then(res => {
				let result = res.users         
				this.render(result)
				this.editContactOnClickListener()
		})
}
  
  createUserTR(user){	
		return `
			<tr>
				<td class="${user._id}">${user.fullName.split(' ')[0]}</td>
				<td class="${user._id}">${user.fullName.split(' ')[1]}</td>
				<td class="${user._id}">${user.email}</td>
			</tr>
	`
	}


	

	
	
	
  //  renderUsersList(elem){	
  //   this.tableBlock.innerHTML += elem
	// }
}

