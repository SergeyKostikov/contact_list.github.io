class Keypad{
    constructor(){
      this.baseBlock = document.querySelector(".content-block")
    }
    
    
    render(){	
          this.baseBlock.innerHTML = `
          <div class="number">
				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
				<span class ="numbers">(050)5005050</span>
				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>
			<div class="keypad-holder">
				<button class="key">1</button>
				<button class="key">2</button>
				<button class="key">3</button>
				<button class="key">4</button>
				<button class="key">5</button>
				<button class="key">6</button>
				<button class="key">7</button>
				<button class="key">8</button>
				<button class="key">9</button>
				<button class="key">*</button>
				<button class="key">0</button>
				<button class="key">#</button>
				<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
			</div>
		</div>
      `
    }
    
    //  renderUsersList(elem){	
    //   this.tableBlock.innerHTML += elem
      // }
  }
  
  