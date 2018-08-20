class Contacts{
  constructor(){
    this.baseBlock = document.querySelector(".content-block")
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
  
  createUserTR(user){	
		return `
			<tr>
				<td>${user.fullName.split(' ')[0]}</td>
				<td>${user.fullName.split(' ')[1]}</td>
				<td>${user.email}</td>
			</tr>
	`
  }
  //  renderUsersList(elem){	
  //   this.tableBlock.innerHTML += elem
	// }
}

