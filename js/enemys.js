var Enemy;

function Enemy(enemyType,health,mana,strength,agility,speed){
  "use strict";
    this.classType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}


var getRandomNumber = function(start, range){
    'use strict';
    var getNum = Math.floor((Math.random() * range) + start);

    while(getNum  > range){
        var getNum = Math.floor((Math.random() * range) + start);
    }

    return getNum;
}

console.log(getRandomNumber(1,100));