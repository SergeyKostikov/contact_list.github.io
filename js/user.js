class User {
  constructor(id) {
    this.baseUrl = "https://easycode-js.herokuapp.com/";
    this.baseUser = "seko";
    this.baseBlock = document.querySelector(".content-block");
    this.render();
    this.user = this.getUser(id);
  }

  render() {
    this.baseBlock.innerHTML = `
              <img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
				<div class="user-name"></div>
				<div class="options-line">
					<div class="message">
						<div class= "options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
						<span class = "options-text">message</span>
					</div>
					<div class="call">
						<div class= "options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
						<span class = "options-text">call</span>
					</div>
					<div class="video">
						<div class= "options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
						<span class = "options-text">video</span>
					</div>
					<div class="mail">
						<div class= "options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
						<span class = "options-text">mail</span>
					</div>
				</div>
				<div class="tel-number">
					<h3>mobile</h3>
					<div> +38 (093) 989 89 89</div>
				</div>
				<div class="options-table">
					<div class ="options-item"><a href="#">Notes</a></div>
					<div class ="options-item"><a href="#">Send message</a></div>
					<div class ="options-item"><a href="#">Share contact</a></div>
					<div class ="options-item"><a href="#">Add to favorites</a></div>
					<div class ="options-item"><a href="#">Share my location</a></div>
					<div class ="options-item"><a href="#">Block this caller</a></div>
				</div>
          `;
  }

  init(user) {
    let nameBlock = document.querySelector(".user-name");
    let phoneBlock = document.querySelector(".tel-number");
    nameBlock.innerHTML = user.fullName;
    phoneBlock.innerHTML = user.phone;
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
}
