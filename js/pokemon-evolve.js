//Bulbasaur evolve
// B == Bulbasaur
var bulbasaur = window.document.getElementById('evolve-bulbasaur');
var spriteB = window.document.getElementById('sprite-bulbasaur');
var levelB = window.document.getElementById('level-bulbasaur');
var nameB = window.document.getElementById('name-bulbasaur');
var numberB = window.document.getElementById('number-bulbasaur')
var clickB = 0

bulbasaur.addEventListener('click', function(){
    if(clickB == 0){
        clickB = 2
        spriteB.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        levelB.innerHTML = 'lvl:16'
        nameB.innerHTML = 'Ivysaur'
        numberB.innerHTML = 'Nº 0002'
    } else if(clickB == 2) {
        clickB = 3
        levelB.innerHTML = 'lvl:36'
        spriteB.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        nameB.innerHTML = 'Venusaur'
        numberB.innerHTML = 'Nº 0003'
    } else {
        clickB = 0
        levelB.innerHTML = 'lvl:1'
        spriteB.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        nameB.innerHTML = 'Bulbasaur'
        numberB.innerHTML = 'Nº 0001'
    }
})
//Bulbasaur evolve

//Charmander evolve
// C == Charmander
var charmander = window.document.getElementById('evolve-charmander');
var spriteC = window.document.getElementById('sprite-charmander');
var levelC = window.document.getElementById('level-charmander');
var nameC = window.document.getElementById('name-charmander');
var numberC = window.document.getElementById('number-charmander')
var newTypeC = window.document.getElementById('new-type-charmander')
var clickC = 0

charmander.addEventListener('click', function(){
    if(clickC == 0){
        clickC = 2
        spriteC.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
        levelC.innerHTML = 'lvl:16'
        nameC.innerHTML = 'Charmeleon'
        numberC.innerHTML = 'Nº 0005'
    } else if(clickC == 2) {
        clickC = 3
        levelC.innerHTML = 'lvl:36'
        spriteC.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        nameC.innerHTML = 'Charizard'
        numberC.innerHTML = 'Nº 0006'
        newTypeC.classList.add('type-pokemon--flying')
        newTypeC.innerHTML = 'Flying'
    } else {
        clickC = 0
        levelC.innerHTML = 'lvl:1'
        spriteC.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        nameC.innerHTML = 'Charmander'
        numberC.innerHTML = 'Nº 0004'
        newTypeC.classList.remove('type-pokemon--flying')
        newTypeC.innerHTML = ''
    }
})
//Charmander evolve

//Squirtle evolve
// S == Squirtle
var squirtle = window.document.getElementById('evolve-squirtle');
var spriteS = window.document.getElementById('sprite-squirtle');
var levelS = window.document.getElementById('level-squirtle');
var nameS = window.document.getElementById('name-squirtle');
var numberS = window.document.getElementById('number-squirtle')
var clickS = 0

squirtle.addEventListener('click', function(){
    if(clickS == 0){
        clickS = 2
        spriteS.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
        levelS.innerHTML = 'lvl:16'
        nameS.innerHTML = 'Wartortle'
        numberS.innerHTML = 'Nº 0008'
    } else if(clickS == 2) {
        clickS = 3
        levelS.innerHTML = 'lvl:36'
        spriteS.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
        nameS.innerHTML = 'Blastoise'
        numberS.innerHTML = 'Nº 0009'
    } else {
        clickS = 0
        levelS.innerHTML = 'lvl:1'
        spriteS.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        nameS.innerHTML = 'Bulbasaur'
        numberS.innerHTML = 'Nº 0007'
    }
})
//Squirtle evolve

