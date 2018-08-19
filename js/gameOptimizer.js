class Army{
    constructor(options){
        this.name = options.name;
        this.titanPower = options.titanPower;
        this.heroPower = options.heroesPower;
        this.titanCounter = options.titanCounter;
        this.heroCounter = options.heroCounter;
    }
}

let army = []
let enemy = []

count = 0;

while(count < 5){
    let armyObj = new Army({name:`army_${count+1}`,titanPower:Math.floor(Math.random()*1000),heroesPower:Math.floor(Math.random()*1000),titanCounter:1,heroCounter:1})
    army.push(armyObj)

    let enemyObj = new Army({name:`enemy_${count+1}`,titanPower:Math.floor(Math.random()*1000),heroesPower:Math.floor(Math.random()*1000),titanCounter:1,heroCounter:1})
    enemy.push(enemyObj)
    count ++;
}

function compare(army,enemy){
    let resulArr = []
    let strikeArmies = [];
    
    army.map(armyElem => {
        let enemyArmyName = '';
        let enemyArmyHeroPower = 0;
        let enemyArmyTitanPower = 0;
        let resultObj = {}
        let tmpArr = []

        enemy.filter(elem => {
            if(!strikeArmies.includes(elem.name)){
                tmpArr.push(elem)
            }
        })
        tmpArr.map(enemyElem => {
            if(armyElem.heroPower > enemyElem.heroPower){
                if(enemyArmyHeroPower < enemyElem.heroPower){
                    enemyArmyName = enemyElem.name;
                    enemyArmyHeroPower = enemyElem.heroPower;
                }
            }
            
        })
        console.log('enemyArmyHeroPower',enemyArmyHeroPower,'enemyArmyName',enemyArmyName)
        let whomStrike =''
        if(armyElem.heroPower > enemyArmyHeroPower){
            whomStrike = enemyArmyName=='' ? 'Nobody' : enemyArmyName
            strikeArmies.push(enemyArmyName) 
        }else{
            whomStrike = 'Nobody'
        }
        
        resultObj.whoStrikeHeroes = armyElem.name
        resultObj.whomStrikeHeroes = whomStrike
        resulArr.push(resultObj)
              
    })

    return resulArr
}


console.log(army)
console.log(enemy)
console.log(compare(army,enemy))