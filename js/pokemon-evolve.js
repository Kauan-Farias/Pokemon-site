//Bulbasaur evolve
// B == Bulbasaur
var bulbasaur = window.document.getElementById('evolve-bulbasaur');
var spriteB = window.document.getElementById('sprite-bulbasaur');
var levelB = window.document.getElementById('level-bulbasaur');
var nameB = window.document.getElementById('name-bulbasaur');
var numberB = window.document.getElementById('number-bulbasaur');
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
var numberC = window.document.getElementById('number-charmander');
var newTypeC = window.document.getElementById('new-type-charmander');
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
var numberS = window.document.getElementById('number-squirtle');
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

//Chikorita evolve
// Ch == Squirtle
var chikorita = window.document.getElementById('evolve-chikorita');
var spriteCh = window.document.getElementById('sprite-chikorita');
var levelCh = window.document.getElementById('level-chikorita');
var nameCh = window.document.getElementById('name-chikorita');
var numberCh = window.document.getElementById('number-chikorita');
var clickCh = 0

chikorita.addEventListener('click', function(){
    if(clickCh == 0){
        clickCh = 2
        spriteCh.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png"
        levelCh.innerHTML = 'lvl:16'
        nameCh.innerHTML = 'Bayleef'
        numberCh.innerHTML = 'Nº 0153'
    } else if(clickCh == 2) {
        clickCh = 3
        levelCh.innerHTML = 'lvl:36'
        spriteCh.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png"
        nameCh.innerHTML = 'Meganium'
        numberCh.innerHTML = 'Nº 0154'
    } else {
        clickCh = 0
        levelCh.innerHTML = 'lvl:1'
        spriteCh.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
        nameCh.innerHTML = 'Chikorita'
        numberCh.innerHTML = 'Nº 0152'
    }
})
//Chikorita evolve

//Cyndaquil evolve
// Cyn == Cyndaquil
var cyndaquil = window.document.getElementById('evolve-cyndaquil');
var spriteCyn = window.document.getElementById('sprite-cyndaquil');
var levelCyn = window.document.getElementById('level-cyndaquil');
var nameCyn = window.document.getElementById('name-cyndaquil');
var numberCyn = window.document.getElementById('number-cyndaquil');
var clickCyn = 0

cyndaquil.addEventListener('click', function(){
    if(clickCyn == 0){
        clickCyn = 2
        spriteCyn.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png"
        levelCyn.innerHTML = 'lvl:16'
        nameCyn.innerHTML = 'Quilava'
        numberCyn.innerHTML = 'Nº 0156'
    } else if(clickCyn == 2) {
        clickCyn = 3
        levelCyn.innerHTML = 'lvl:36'
        spriteCyn.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png"
        nameCyn.innerHTML = 'Typhlosion'
        numberCyn.innerHTML = 'Nº 0157'
    } else {
        clickCyn = 0
        levelCyn.innerHTML = 'lvl:1'
        spriteCyn.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
        nameCyn.innerHTML = 'Cyndaquil'
        numberCyn.innerHTML = 'Nº 0155'
    }
})
//Chikorita evolve

//Totodile evolve
// To == Totodile
var totodile = window.document.getElementById('evolve-totodile');
var spriteTo = window.document.getElementById('sprite-totodile');
var levelTo = window.document.getElementById('level-totodile');
var nameTo = window.document.getElementById('name-totodile');
var numberTo = window.document.getElementById('number-totodile');
var clickTo = 0

totodile.addEventListener('click', function(){
    if(clickTo == 0){
        clickTo = 2
        spriteTo.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png"
        levelTo.innerHTML = 'lvl:16'
        nameTo.innerHTML = 'Croconaw'
        numberTo.innerHTML = 'Nº 0159'
    } else if(clickTo == 2) {
        clickTo = 3
        levelTo.innerHTML = 'lvl:36'
        spriteTo.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png"
        nameTo.innerHTML = 'Feraligatr'
        numberTo.innerHTML = 'Nº 0160'
    } else {
        clickTo = 0
        levelTo.innerHTML = 'lvl:1'
        spriteTo.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"
        nameTo.innerHTML = 'Totodile'
        numberTo.innerHTML = 'Nº 0158'
    }
})
//Totodile evolve


//Treecko evolve
// Tre == Treecko
var treecko = window.document.getElementById('evolve-treecko');
var spriteTre = window.document.getElementById('sprite-treecko');
var levelTre = window.document.getElementById('level-treecko');
var nameTre = window.document.getElementById('name-treecko');
var numberTre = window.document.getElementById('number-treecko');
var clickTre = 0

treecko.addEventListener('click', function(){
    if(clickTre == 0){
        clickTre = 2
        spriteTre.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png"
        levelTre.innerHTML = 'lvl:16'
        nameTre.innerHTML = 'Grovyle'
        numberTre.innerHTML = 'Nº 0253'
    } else if(clickTre == 2) {
        clickTre = 3
        levelTre.innerHTML = 'lvl:36'
        spriteTre.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png"
        nameTre.innerHTML = 'Sceptile'
        numberTre.innerHTML = 'Nº 0254'
    } else {
        clickTre = 0
        levelTre.innerHTML = 'lvl:1'
        spriteTre.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"
        nameTre.innerHTML = 'Treecko'
        numberTre.innerHTML = 'Nº 0252'
    }
})
//Treecko evolve


//Torchic evolve
// Tor == Torchic
var torchic = window.document.getElementById('evolve-torchic');
var spriteTor = window.document.getElementById('sprite-torchic');
var levelTor = window.document.getElementById('level-torchic');
var nameTor = window.document.getElementById('name-torchic');
var numberTor = window.document.getElementById('number-torchic');
var newTypeTor = window.document.getElementById('new-type-torchic');
var clickTor = 0

torchic.addEventListener('click', function(){
    if(clickTor == 0){
        clickTor = 2
        spriteTor.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png"
        levelTor.innerHTML = 'lvl:16'
        nameTor.innerHTML = 'Combusken'
        numberTor.innerHTML = 'Nº 0256'
        newTypeTor.classList.add('type-pokemon--fighting')
        newTypeTor.innerHTML = 'Fighting'
    } else if(clickTor == 2) {
        clickTor = 3
        levelTor.innerHTML = 'lvl:36'
        spriteTor.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png"
        nameTor.innerHTML = 'Blaziken'
        numberTor.innerHTML = 'Nº 0257'
        newTypeTor.classList.add('type-pokemon--fighting')
        newTypeTor.innerHTML = 'Fighting'
    } else {
        clickTor = 0
        levelTor.innerHTML = 'lvl:1'
        spriteTor.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
        nameTor.innerHTML = 'Torchic'
        numberTor.innerHTML = 'Nº 0255'
        newTypeTor.classList.remove('type-pokemon--fighting')
        newTypeTor.innerHTML = ''
    }
})
//Torchic evolve

//Mudkip evolve
// Mud == Mudkip
var mudkip = window.document.getElementById('evolve-mudkip');
var spriteMud = window.document.getElementById('sprite-mudkip');
var levelMud = window.document.getElementById('level-mudkip');
var nameMud = window.document.getElementById('name-mudkip');
var numberMud = window.document.getElementById('number-mudkip');
var newTypeMud = window.document.getElementById('new-type-mudkip');
var clickMud = 0

mudkip.addEventListener('click', function(){
    if(clickMud == 0){
        clickMud = 2
        spriteMud.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png"
        levelMud.innerHTML = 'lvl:16'
        nameMud.innerHTML = 'Marshtomp'
        numberMud.innerHTML = 'Nº 0259'
        newTypeMud.classList.add('type-pokemon--ground')
        newTypeMud.innerHTML = 'Ground'
    } else if(clickMud == 2) {
        clickMud = 3
        levelMud.innerHTML = 'lvl:36'
        spriteMud.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png"
        nameMud.innerHTML = 'Swampert'
        numberMud.innerHTML = 'Nº 0260'
        newTypeMud.classList.add('type-pokemon--ground')
        newTypeMud.innerHTML = 'Ground'
    } else {
        clickMud = 0
        levelMud.innerHTML = 'lvl:1'
        spriteMud.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
        nameMud.innerHTML = 'Mudkip'
        numberMud.innerHTML = 'Nº 0258'
        newTypeMud.classList.remove('type-pokemon--ground')
        newTypeMud.innerHTML = ''
    }
})
//Mudkip evolve


