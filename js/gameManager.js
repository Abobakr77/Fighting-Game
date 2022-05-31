
var gameManager = {
    setGameStart: function(classType){
        "use strict";
        this.resetPlayer(classType);
        this.setPreFighter();
    },
    resetPlayer: function(classType){
        switch (classType) {
            case "Warrior":
                player =  new player(classType, 200, 0, 200, 100, 50);
                
                break;
            case "Rogue":
                player =  new player(classType, 100, 0, 100, 150, 200);
                
                break;
                case "Mage":
                player =  new player(classType, 80, 0, 50, 200, 50);
                
                break;
                case "Hunter":
                player = new player(classType, 200, 0, 50, 200, 100);
                
                break;
                
        }
         getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="' + classType.toLowerCase() + '.jpg"><div><h3>' + classType + '</h3><p class="Health-player">Health:'+ player.health +' </p><p>Mana:'+ player.mana +' </p><p>Strength:'+ player.strength +' </p><p>Agility:'+ player.agility +' </p><p>Speed:'+ player.speed +' </p></div>';

    },
    setPreFighter: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for an enemy!</a>';
        getArena.style.visibility = "visible";

    },
    setFight: function(){
        var getHeader = document.querySelector(".header");
        var getActions = document.querySelector(".actions");
        var getEnemy = document.querySelector(".enemy");
        // create enemy!
        let  enemy00 = new Enemy("Goblin", 100, 0, 50, 100,100);
        let  enemy01 = new Enemy("Troll", 200, 0, 80, 150, 50);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML ='<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="../Game/' + enemy.classType.toLowerCase() + '.jpg" alt="' + enemy.classType + '" class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
        
       
    }
};