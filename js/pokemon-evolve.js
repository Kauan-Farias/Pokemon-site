//Bulbasaur evolve
// B == Bulbasaur
var bulbasaur = window.document.getElementById("evolve-bulbasaur");
var spriteB = window.document.getElementById("sprite-bulbasaur");
var levelB = window.document.getElementById("level-bulbasaur");
var nameB = window.document.getElementById("name-bulbasaur");
var numberB = window.document.getElementById("number-bulbasaur");
var clickB = 0;

//Ativamento shiny Bulbasaur
var activeShinyB = window.document.getElementById("active-shiny1");
var clickActiveB = 0;
var shinyB = false

activeShinyB.addEventListener("click", function () {
  if(clickActiveB == 0){
    clickActiveB = 2;
    activeShinyB.style.opacity = '1'
    shinyB = true
  } else if(clickActiveB > 1){
    clickActiveB = 0;
    activeShinyB.style.opacity = '0.5'
    shinyB = false
  }
});
//Ativamento shiny Bulbasaur


bulbasaur.addEventListener("click", function () {
  if (clickB == 0) {
    clickB = 2;
    if(shinyB == false){
      spriteB.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png";
    } else if(shinyB == true){
      spriteB.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-ivysaur.png";
    }
    levelB.innerHTML = "lvl:16";
    nameB.innerHTML = "Ivysaur";
    numberB.innerHTML = "Nº 0002";
  } else if (clickB == 2) {
    clickB = 3;
    levelB.innerHTML = "lvl:36";
    if(shinyB == false){
      spriteB.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png";
    } else if(shinyB == true){
      spriteB.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-venusaur.png";
    }
    nameB.innerHTML = "Venusaur";
    numberB.innerHTML = "Nº 0003";
  } else {
    clickB = 0;
    levelB.innerHTML = "lvl:1";
    if(shinyB == false){
      spriteB.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
    } else if(shinyB == true){
      spriteB.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-bulbasaur.png";
    }
    nameB.innerHTML = "Bulbasaur";
    numberB.innerHTML = "Nº 0001";
  }
});
//Bulbasaur evolve

//Charmander evolve
// C == Charmander
var charmander = window.document.getElementById("evolve-charmander");
var spriteC = window.document.getElementById("sprite-charmander");
var levelC = window.document.getElementById("level-charmander");
var nameC = window.document.getElementById("name-charmander");
var numberC = window.document.getElementById("number-charmander");
var newTypeC = window.document.getElementById("new-type-charmander");
var clickC = 0;

//Ativamento shiny Charmander
var activeShinyC = window.document.getElementById("active-shiny2");
var clickActiveC = 0;
var shinyC = false

activeShinyC.addEventListener("click", function () {
  if(clickActiveC == 0){
    clickActiveC = 2;
    activeShinyC.style.opacity = '1'
    shinyC = true
  } else if(clickActiveC > 1){
    clickActiveC = 0;
    activeShinyC.style.opacity = '0.5'
    shinyC = false
  }
});
//Ativamento shiny Charmander

charmander.addEventListener("click", function () {
  if (clickC == 0) {
    clickC = 2;
    if(shinyC == false){
      spriteC.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png";
    } else if(shinyC == true){
      spriteC.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-charmeleon.png";
    }
    levelC.innerHTML = "lvl:16";
    nameC.innerHTML = "Charmeleon";
    numberC.innerHTML = "Nº 0005";
  } else if (clickC == 2) {
    clickC = 3;
    levelC.innerHTML = "lvl:36";
    if(shinyC == false){
      spriteC.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png";
    } else if(shinyC == true){
      spriteC.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-charizard.png";
    }
    nameC.innerHTML = "Charizard";
    numberC.innerHTML = "Nº 0006";
    newTypeC.classList.add("type-pokemon--flying");
    newTypeC.innerHTML = "Flying";
  } else {
    clickC = 0;
    levelC.innerHTML = "lvl:1";
    if(shinyC == false){
      spriteC.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png";
    } else if(shinyC == true){
      spriteC.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-charmander.png";
    }
    nameC.innerHTML = "Charmander";
    numberC.innerHTML = "Nº 0004";
    newTypeC.classList.remove("type-pokemon--flying");
    newTypeC.innerHTML = "";
  }
});
//Charmander evolve

//Squirtle evolve
// S == Squirtle
var squirtle = window.document.getElementById("evolve-squirtle");
var spriteS = window.document.getElementById("sprite-squirtle");
var levelS = window.document.getElementById("level-squirtle");
var nameS = window.document.getElementById("name-squirtle");
var numberS = window.document.getElementById("number-squirtle");
var clickS = 0;

//Ativamento shiny Charmander
var activeShinyS = window.document.getElementById("active-shiny3");
var clickActiveS = 0;
var shinyS = false

activeShinyS.addEventListener("click", function () {
  if(clickActiveS == 0){
    clickActiveS = 2;
    activeShinyS.style.opacity = '1'
    shinyS = true
  } else if(clickActiveS > 1){
    clickActiveS = 0;
    activeShinyS.style.opacity = '0.5'
    shinyS = false
  }
});
//Ativamento shiny Charmander

squirtle.addEventListener("click", function () {
  if (clickS == 0) {
    clickS = 2;
    if(shinyS == false){
      spriteS.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png";
    } else if(shinyS == true){
      spriteS.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-wartortle.png";
    }
    levelS.innerHTML = "lvl:16";
    nameS.innerHTML = "Wartortle";
    numberS.innerHTML = "Nº 0008";
  } else if (clickS == 2) {
    clickS = 3;
    levelS.innerHTML = "lvl:36";
    if(shinyS == false){
      spriteS.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png";
    } else if(shinyS == true){
      spriteS.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-blastoise.png";
    }
    nameS.innerHTML = "Blastoise";
    numberS.innerHTML = "Nº 0009";
  } else {
    clickS = 0;
    levelS.innerHTML = "lvl:1";
    if(shinyS == false){
      spriteS.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";
    } else if(shinyS == true){
      spriteS.src =
      "https://pokemon.gishan.cc/static/i/p/shiny-squirtle.png";
    }
    nameS.innerHTML = "Squirtle";
    numberS.innerHTML = "Nº 0007";
  }
});
//Squirtle evolve

//Chikorita evolve
// Ch == Chikorita
var chikorita = window.document.getElementById("evolve-chikorita");
var spriteCh = window.document.getElementById("sprite-chikorita");
var levelCh = window.document.getElementById("level-chikorita");
var nameCh = window.document.getElementById("name-chikorita");
var numberCh = window.document.getElementById("number-chikorita");
var clickCh = 0;

chikorita.addEventListener("click", function () {
  if (clickCh == 0) {
    clickCh = 2;
    spriteCh.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png";
    levelCh.innerHTML = "lvl:16";
    nameCh.innerHTML = "Bayleef";
    numberCh.innerHTML = "Nº 0153";
  } else if (clickCh == 2) {
    clickCh = 3;
    levelCh.innerHTML = "lvl:36";
    spriteCh.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png";
    nameCh.innerHTML = "Meganium";
    numberCh.innerHTML = "Nº 0154";
  } else {
    clickCh = 0;
    levelCh.innerHTML = "lvl:1";
    spriteCh.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png";
    nameCh.innerHTML = "Chikorita";
    numberCh.innerHTML = "Nº 0152";
  }
});
//Chikorita evolve

//Cyndaquil evolve
// Cyn == Cyndaquil
var cyndaquil = window.document.getElementById("evolve-cyndaquil");
var spriteCyn = window.document.getElementById("sprite-cyndaquil");
var levelCyn = window.document.getElementById("level-cyndaquil");
var nameCyn = window.document.getElementById("name-cyndaquil");
var numberCyn = window.document.getElementById("number-cyndaquil");
var clickCyn = 0;

cyndaquil.addEventListener("click", function () {
  if (clickCyn == 0) {
    clickCyn = 2;
    spriteCyn.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png";
    levelCyn.innerHTML = "lvl:16";
    nameCyn.innerHTML = "Quilava";
    numberCyn.innerHTML = "Nº 0156";
  } else if (clickCyn == 2) {
    clickCyn = 3;
    levelCyn.innerHTML = "lvl:36";
    spriteCyn.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png";
    nameCyn.innerHTML = "Typhlosion";
    numberCyn.innerHTML = "Nº 0157";
  } else {
    clickCyn = 0;
    levelCyn.innerHTML = "lvl:1";
    spriteCyn.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png";
    nameCyn.innerHTML = "Cyndaquil";
    numberCyn.innerHTML = "Nº 0155";
  }
});
//Chikorita evolve

//Totodile evolve
// To == Totodile
var totodile = window.document.getElementById("evolve-totodile");
var spriteTo = window.document.getElementById("sprite-totodile");
var levelTo = window.document.getElementById("level-totodile");
var nameTo = window.document.getElementById("name-totodile");
var numberTo = window.document.getElementById("number-totodile");
var clickTo = 0;

totodile.addEventListener("click", function () {
  if (clickTo == 0) {
    clickTo = 2;
    spriteTo.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png";
    levelTo.innerHTML = "lvl:16";
    nameTo.innerHTML = "Croconaw";
    numberTo.innerHTML = "Nº 0159";
  } else if (clickTo == 2) {
    clickTo = 3;
    levelTo.innerHTML = "lvl:36";
    spriteTo.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png";
    nameTo.innerHTML = "Feraligatr";
    numberTo.innerHTML = "Nº 0160";
  } else {
    clickTo = 0;
    levelTo.innerHTML = "lvl:1";
    spriteTo.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png";
    nameTo.innerHTML = "Totodile";
    numberTo.innerHTML = "Nº 0158";
  }
});
//Totodile evolve

//Treecko evolve
// Tre == Treecko
var treecko = window.document.getElementById("evolve-treecko");
var spriteTre = window.document.getElementById("sprite-treecko");
var levelTre = window.document.getElementById("level-treecko");
var nameTre = window.document.getElementById("name-treecko");
var numberTre = window.document.getElementById("number-treecko");
var clickTre = 0;

treecko.addEventListener("click", function () {
  if (clickTre == 0) {
    clickTre = 2;
    spriteTre.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png";
    levelTre.innerHTML = "lvl:16";
    nameTre.innerHTML = "Grovyle";
    numberTre.innerHTML = "Nº 0253";
  } else if (clickTre == 2) {
    clickTre = 3;
    levelTre.innerHTML = "lvl:36";
    spriteTre.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png";
    nameTre.innerHTML = "Sceptile";
    numberTre.innerHTML = "Nº 0254";
  } else {
    clickTre = 0;
    levelTre.innerHTML = "lvl:1";
    spriteTre.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png";
    nameTre.innerHTML = "Treecko";
    numberTre.innerHTML = "Nº 0252";
  }
});
//Treecko evolve

//Torchic evolve
// Tor == Torchic
var torchic = window.document.getElementById("evolve-torchic");
var spriteTor = window.document.getElementById("sprite-torchic");
var levelTor = window.document.getElementById("level-torchic");
var nameTor = window.document.getElementById("name-torchic");
var numberTor = window.document.getElementById("number-torchic");
var newTypeTor = window.document.getElementById("new-type-torchic");
var clickTor = 0;

torchic.addEventListener("click", function () {
  if (clickTor == 0) {
    clickTor = 2;
    spriteTor.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png";
    levelTor.innerHTML = "lvl:16";
    nameTor.innerHTML = "Combusken";
    numberTor.innerHTML = "Nº 0256";
    newTypeTor.classList.add("type-pokemon--fighting");
    newTypeTor.innerHTML = "Fighting";
  } else if (clickTor == 2) {
    clickTor = 3;
    levelTor.innerHTML = "lvl:36";
    spriteTor.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png";
    nameTor.innerHTML = "Blaziken";
    numberTor.innerHTML = "Nº 0257";
  } else {
    clickTor = 0;
    levelTor.innerHTML = "lvl:1";
    spriteTor.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png";
    nameTor.innerHTML = "Torchic";
    numberTor.innerHTML = "Nº 0255";
    newTypeTor.classList.remove("type-pokemon--fighting");
    newTypeTor.innerHTML = "";
  }
});
//Torchic evolve

//Mudkip evolve
// Mud == Mudkip
var mudkip = window.document.getElementById("evolve-mudkip");
var spriteMud = window.document.getElementById("sprite-mudkip");
var levelMud = window.document.getElementById("level-mudkip");
var nameMud = window.document.getElementById("name-mudkip");
var numberMud = window.document.getElementById("number-mudkip");
var newTypeMud = window.document.getElementById("new-type-mudkip");
var clickMud = 0;

mudkip.addEventListener("click", function () {
  if (clickMud == 0) {
    clickMud = 2;
    spriteMud.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png";
    levelMud.innerHTML = "lvl:16";
    nameMud.innerHTML = "Marshtomp";
    numberMud.innerHTML = "Nº 0259";
    newTypeMud.classList.add("type-pokemon--ground");
    newTypeMud.innerHTML = "Ground";
  } else if (clickMud == 2) {
    clickMud = 3;
    levelMud.innerHTML = "lvl:36";
    spriteMud.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png";
    nameMud.innerHTML = "Swampert";
    numberMud.innerHTML = "Nº 0260";
  } else {
    clickMud = 0;
    levelMud.innerHTML = "lvl:1";
    spriteMud.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png";
    nameMud.innerHTML = "Mudkip";
    numberMud.innerHTML = "Nº 0258";
    newTypeMud.classList.remove("type-pokemon--ground");
    newTypeMud.innerHTML = "";
  }
});
//Mudkip evolve

//Turtwig evolve
// Tur == Turtwig
var turtwig = window.document.getElementById("evolve-turtwig");
var spriteTur = window.document.getElementById("sprite-turtwig");
var levelTur = window.document.getElementById("level-turtwig");
var nameTur = window.document.getElementById("name-turtwig");
var numberTur = window.document.getElementById("number-turtwig");
var newTypeTur = window.document.getElementById("new-type-turtwig");
var clickTur = 0;

turtwig.addEventListener("click", function () {
  if (clickTur == 0) {
    clickTur = 2;
    spriteTur.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/388.png";
    levelTur.innerHTML = "lvl:16";
    nameTur.innerHTML = "Grotle";
    numberTur.innerHTML = "Nº 0388";
  } else if (clickTur == 2) {
    clickTur = 3;
    levelTur.innerHTML = "lvl:36";
    spriteTur.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/389.png";
    nameTur.innerHTML = "Torterra";
    numberTur.innerHTML = "Nº 0389";
    newTypeTur.classList.add("type-pokemon--ground");
    newTypeTur.innerHTML = "Ground";
  } else {
    clickTur = 0;
    levelTur.innerHTML = "lvl:1";
    spriteTur.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png";
    nameTur.innerHTML = "turtwig";
    numberTur.innerHTML = "Nº 0387";
    newTypeTur.classList.remove("type-pokemon--ground");
    newTypeTur.innerHTML = "";
  }
});
//Turtwig evolve

//Chimchar evolve
// Chim == Chimchar
var chimchar = window.document.getElementById("evolve-chimchar");
var spriteChim = window.document.getElementById("sprite-chimchar");
var levelChim = window.document.getElementById("level-chimchar");
var nameChim = window.document.getElementById("name-chimchar");
var numberChim = window.document.getElementById("number-chimchar");
var newTypeChim = window.document.getElementById("new-type-chimchar");
var clickChim = 0;

chimchar.addEventListener("click", function () {
  if (clickChim == 0) {
    clickChim = 2;
    spriteChim.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/391.png";
    levelChim.innerHTML = "lvl:16";
    nameChim.innerHTML = "Monferno";
    numberChim.innerHTML = "Nº 0391";
    newTypeChim.classList.add("type-pokemon--fighting");
    newTypeChim.innerHTML = "Fighting";
  } else if (clickChim == 2) {
    clickChim = 3;
    levelChim.innerHTML = "lvl:36";
    spriteChim.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/392.png";
    nameChim.innerHTML = "Infernape";
    numberChim.innerHTML = "Nº 0392";
  } else {
    clickChim = 0;
    levelChim.innerHTML = "lvl:1";
    spriteChim.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png";
    nameChim.innerHTML = "Chimchar";
    numberChim.innerHTML = "Nº 0390";
    newTypeChim.classList.remove("type-pokemon--fighting");
    newTypeChim.innerHTML = "";
  }
});
//Chimchar evolve

//Piplup  evolve
//Pip == Piplup
var piplup = window.document.getElementById("evolve-piplup");
var spritePip = window.document.getElementById("sprite-piplup");
var levelPip = window.document.getElementById("level-piplup");
var namePip = window.document.getElementById("name-piplup");
var numberPip = window.document.getElementById("number-piplup");
var newTypePip = window.document.getElementById("new-type-piplup");
var clickPip = 0;

piplup.addEventListener("click", function () {
  if (clickPip == 0) {
    clickPip = 2;
    spritePip.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/394.png";
    levelPip.innerHTML = "lvl:16";
    namePip.innerHTML = "Prinplup";
    numberPip.innerHTML = "Nº 0394";
  } else if (clickPip == 2) {
    clickPip = 3;
    levelPip.innerHTML = "lvl:36";
    spritePip.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/395.png";
    namePip.innerHTML = "Empoleon";
    numberPip.innerHTML = "Nº 0395";
    newTypePip.classList.add("type-pokemon--steel");
    newTypePip.innerHTML = "Steel";
  } else {
    clickPip = 0;
    levelPip.innerHTML = "lvl:1";
    spritePip.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png";
    namePip.innerHTML = "Piplup";
    numberPip.innerHTML = "Nº 0393";
    newTypePip.classList.remove("type-pokemon--steel");
    newTypePip.innerHTML = "";
  }
});
//Piplup evolve

//Snivy evolve
//Sni == Snivy
var piplup = window.document.getElementById("evolve-snivy");
var spriteSni = window.document.getElementById("sprite-snivy");
var levelSni = window.document.getElementById("level-snivy");
var nameSni = window.document.getElementById("name-snivy");
var numberSni = window.document.getElementById("number-snivy");
var clickSni = 0;

piplup.addEventListener("click", function () {
  if (clickSni == 0) {
    clickSni = 2;
    spriteSni.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png";
    levelSni.innerHTML = "lvl:16";
    nameSni.innerHTML = "Servine";
    numberSni.innerHTML = "Nº 0496";
  } else if (clickSni == 2) {
    clickSni = 3;
    levelSni.innerHTML = "lvl:36";
    spriteSni.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/497.png";
    nameSni.innerHTML = "Serperior";
    numberSni.innerHTML = "Nº 0497";
  } else {
    clickSni = 0;
    levelSni.innerHTML = "lvl:1";
    spriteSni.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png";
    nameSni.innerHTML = "Snivy";
    numberSni.innerHTML = "Nº 0495";
  }
});
//Snivy evolve

//Tepig  evolve
//Tep == Tepig
var tepig = window.document.getElementById("evolve-tepig");
var spriteTep = window.document.getElementById("sprite-tepig");
var levelTep = window.document.getElementById("level-tepig");
var nameTep = window.document.getElementById("name-tepig");
var numberTep = window.document.getElementById("number-tepig");
var newTypeTep = window.document.getElementById("new-type-tepig");
var clickTep = 0;

tepig.addEventListener("click", function () {
  if (clickTep == 0) {
    clickTep = 2;
    spriteTep.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/499.png";
    levelTep.innerHTML = "lvl:16";
    nameTep.innerHTML = "Pignite";
    numberTep.innerHTML = "Nº 0499";
    newTypeTep.classList.add("type-pokemon--fighting");
    newTypeTep.innerHTML = "Fighting";
  } else if (clickTep == 2) {
    clickTep = 3;
    levelTep.innerHTML = "lvl:36";
    spriteTep.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/500.png";
    nameTep.innerHTML = "Emboar";
    numberTep.innerHTML = "Nº 0500";
  } else {
    clickTep = 0;
    levelTep.innerHTML = "lvl:1";
    spriteTep.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png";
    nameTep.innerHTML = "Tepig";
    numberTep.innerHTML = "Nº 0498";
    newTypeTep.classList.remove("type-pokemon--fighting");
    newTypeTep.innerHTML = "";
  }
});
//Tepig evolve

//Oshawott evolve
//Osh == Oshawott
var oshawott = window.document.getElementById("evolve-oshawott");
var spriteOsh = window.document.getElementById("sprite-oshawott");
var levelOsh = window.document.getElementById("level-oshawott");
var nameOsh = window.document.getElementById("name-oshawott");
var numberOsh = window.document.getElementById("number-oshawott");
var clickOsh = 0;

oshawott.addEventListener("click", function () {
  if (clickOsh == 0) {
    clickOsh = 2;
    spriteOsh.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/502.png";
    levelOsh.innerHTML = "lvl:16";
    nameOsh.innerHTML = "Dewott";
    numberOsh.innerHTML = "Nº 0502";
  } else if (clickOsh == 2) {
    clickOsh = 3;
    levelOsh.innerHTML = "lvl:36";
    spriteOsh.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/503.png";
    nameOsh.innerHTML = "Samurott";
    numberOsh.innerHTML = "Nº 0503";
  } else {
    clickOsh = 0;
    levelOsh.innerHTML = "lvl:1";
    spriteOsh.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png";
    nameOsh.innerHTML = "Oshawott";
    numberOsh.innerHTML = "Nº 0501";
  }
});
//Oshawott evolve

//Chespin  evolve
//Ches == Chespin
var chespin = window.document.getElementById("evolve-chespin");
var spriteChes = window.document.getElementById("sprite-chespin");
var levelChes = window.document.getElementById("level-chespin");
var nameChes = window.document.getElementById("name-chespin");
var numberChes = window.document.getElementById("number-chespin");
var newTypeChes = window.document.getElementById("new-type-chespin");
var clickChes = 0;

chespin.addEventListener("click", function () {
  if (clickChes == 0) {
    clickChes = 2;
    spriteChes.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/651.png";
    levelChes.innerHTML = "lvl:16";
    nameChes.innerHTML = "Quilladin";
    numberChes.innerHTML = "Nº 0651";
  } else if (clickChes == 2) {
    clickChes = 3;
    levelChes.innerHTML = "lvl:36";
    spriteChes.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/652.png";
    nameChes.innerHTML = "Chesnaught";
    numberChes.innerHTML = "Nº 0652";
    newTypeChes.classList.add("type-pokemon--fighting");
    newTypeChes.innerHTML = "Fighting";
  } else {
    clickChes = 0;
    levelChes.innerHTML = "lvl:1";
    spriteChes.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png";
    nameChes.innerHTML = "Chespin";
    numberChes.innerHTML = "Nº 0650";
    newTypeChes.classList.remove("type-pokemon--fighting");
    newTypeChes.innerHTML = "";
  }
});
//Chespin evolve

//Fennekin evolve
//Fen == Fennekin
var fennekin = window.document.getElementById("evolve-fennekin");
var spriteFen = window.document.getElementById("sprite-fennekin");
var levelFen = window.document.getElementById("level-fennekin");
var nameFen = window.document.getElementById("name-fennekin");
var numberFen = window.document.getElementById("number-fennekin");
var newTypeFen = window.document.getElementById("new-type-fennekin");
var clickFen = 0;

fennekin.addEventListener("click", function () {
  if (clickFen == 0) {
    clickFen = 2;
    spriteFen.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/654.png";
    levelFen.innerHTML = "lvl:16";
    nameFen.innerHTML = "Braixen";
    numberFen.innerHTML = "Nº 0654";
  } else if (clickFen == 2) {
    clickFen = 3;
    levelFen.innerHTML = "lvl:36";
    spriteFen.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/655.png";
    nameFen.innerHTML = "Delphox";
    numberFen.innerHTML = "Nº 0655";
    newTypeFen.classList.add("type-pokemon--psychic");
    newTypeFen.innerHTML = "Psychic";
  } else {
    clickFen = 0;
    levelFen.innerHTML = "lvl:1";
    spriteFen.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/653.png";
    nameFen.innerHTML = "Fennekin";
    numberFen.innerHTML = "Nº 0653";
    newTypeFen.classList.remove("type-pokemon--psychic");
    newTypeFen.innerHTML = "";
  }
});
//Fennekin evolve

//Froakie evolve
//Fro == Froakie
var froakie = window.document.getElementById("evolve-froakie");
var spriteFro = window.document.getElementById("sprite-froakie");
var levelFro = window.document.getElementById("level-froakie");
var nameFro = window.document.getElementById("name-froakie");
var numberFro = window.document.getElementById("number-froakie");
var newTypeFro = window.document.getElementById("new-type-froakie");
var clickFro = 0;

froakie.addEventListener("click", function () {
  if (clickFro == 0) {
    clickFro = 2;
    spriteFro.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/657.png";
    levelFro.innerHTML = "lvl:16";
    nameFro.innerHTML = "Frogadier";
    numberFro.innerHTML = "Nº 0657";
  } else if (clickFro == 2) {
    clickFro = 3;
    levelFro.innerHTML = "lvl:36";
    spriteFro.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png";
    nameFro.innerHTML = "Greninja";
    numberFro.innerHTML = "Nº 0658";
    newTypeFro.classList.add("type-pokemon--dark");
    newTypeFro.innerHTML = "Dark";
  } else {
    clickFro = 0;
    levelFro.innerHTML = "lvl:1";
    spriteFro.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/656.png";
    nameFro.innerHTML = "Froakie";
    numberFro.innerHTML = "Nº 0656";
    newTypeFro.classList.remove("type-pokemon--dark");
    newTypeFro.innerHTML = "";
  }
});
//Froakie evolve

//Rowlet evolve
//Row == Rowlet
var rowlet = window.document.getElementById("evolve-rowlet");
var spriteRow = window.document.getElementById("sprite-rowlet");
var levelRow = window.document.getElementById("level-rowlet");
var nameRow = window.document.getElementById("name-rowlet");
var numberRow = window.document.getElementById("number-rowlet");
var changeTypeRow = window.document.getElementById("change-type-rowlet");
var clickRow = 0;

rowlet.addEventListener("click", function () {
  if (clickRow == 0) {
    clickRow = 2;
    spriteRow.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/723.png";
    levelRow.innerHTML = "lvl:16";
    nameRow.innerHTML = "Dartrix";
    numberRow.innerHTML = "Nº 0723";
  } else if (clickRow == 2) {
    clickRow = 3;
    levelRow.innerHTML = "lvl:36";
    spriteRow.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/724.png";
    nameRow.innerHTML = "Decidueye";
    numberRow.innerHTML = "Nº 0724";
    changeTypeRow.classList.remove("type-pokemon--flying");
    changeTypeRow.classList.add("type-pokemon--ghost");
    changeTypeRow.innerHTML = "Ghost";
  } else {
    clickRow = 0;
    levelRow.innerHTML = "lvl:1";
    spriteRow.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png";
    nameRow.innerHTML = "Rowlet";
    numberRow.innerHTML = "Nº 0722";
    changeTypeRow.classList.remove("type-pokemon--ghost");
    changeTypeRow.classList.add("type-pokemon--flying");
    changeTypeRow.innerHTML = "Flying";
  }
});
//Rowlet evolve

//Litten evolve
//Lit == Litten
var litten = window.document.getElementById("evolve-litten");
var spriteLit = window.document.getElementById("sprite-litten");
var levelLit = window.document.getElementById("level-litten");
var nameLit = window.document.getElementById("name-litten");
var numberLit = window.document.getElementById("number-litten");
var newTypeLit = window.document.getElementById("new-type-litten");
var clickLit = 0;

litten.addEventListener("click", function () {
  if (clickLit == 0) {
    clickLit = 2;
    spriteLit.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/726.png";
    levelLit.innerHTML = "lvl:16";
    nameLit.innerHTML = "Torracat";
    numberLit.innerHTML = "Nº 0726";
  } else if (clickLit == 2) {
    clickLit = 3;
    levelLit.innerHTML = "lvl:36";
    spriteLit.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/727.png";
    nameLit.innerHTML = "Incineroar";
    numberLit.innerHTML = "Nº 0727";
    newTypeLit.classList.add("type-pokemon--dark");
    newTypeLit.innerHTML = "Dark";
  } else {
    clickLit = 0;
    levelLit.innerHTML = "lvl:1";
    spriteLit.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/725.png";
    nameLit.innerHTML = "Litten";
    numberLit.innerHTML = "Nº 0725";
    newTypeLit.classList.remove("type-pokemon--dark");
    newTypeLit.innerHTML = "";
  }
});
//Litten evolve

//Popplio evolve
//Pop == Popplio
var popplio = window.document.getElementById("evolve-popplio");
var spritePop = window.document.getElementById("sprite-popplio");
var levelPop = window.document.getElementById("level-popplio");
var namePop = window.document.getElementById("name-popplio");
var numberPop = window.document.getElementById("number-popplio");
var newTypePop = window.document.getElementById("new-type-popplio");
var clickPop = 0;

popplio.addEventListener("click", function () {
  if (clickPop == 0) {
    clickPop = 2;
    spritePop.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/729.png";
    levelPop.innerHTML = "lvl:16";
    namePop.innerHTML = "Brionne";
    numberPop.innerHTML = "Nº 0729";
  } else if (clickPop == 2) {
    clickPop = 3;
    levelPop.innerHTML = "lvl:36";
    spritePop.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/730.png";
    namePop.innerHTML = "Primarina";
    numberPop.innerHTML = "Nº 0730";
    newTypePop.classList.add("type-pokemon--fairy");
    newTypePop.innerHTML = "Fairy";
  } else {
    clickPop = 0;
    levelPop.innerHTML = "lvl:1";
    spritePop.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png";
    namePop.innerHTML = "Litten";
    numberPop.innerHTML = "Nº 0728";
    newTypePop.classList.remove("type-pokemon--fairy");
    newTypePop.innerHTML = "";
  }
});
//Popplio evolve

//Grookey evolve
//Gro == Grookey
var grookey = window.document.getElementById("evolve-grookey");
var spriteGro = window.document.getElementById("sprite-grookey");
var levelGro = window.document.getElementById("level-grookey");
var nameGro = window.document.getElementById("name-grookey");
var numberGro = window.document.getElementById("number-grookey");
var newTypeGro = window.document.getElementById("new-type-grookey");
var clickGro = 0;

grookey.addEventListener("click", function () {
  if (clickGro == 0) {
    clickGro = 2;
    spriteGro.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/811.png";
    levelGro.innerHTML = "lvl:16";
    nameGro.innerHTML = "Thwackey";
    numberGro.innerHTML = "Nº 0811";
  } else if (clickGro == 2) {
    clickGro = 3;
    levelGro.innerHTML = "lvl:36";
    spriteGro.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/812.png";
    nameGro.innerHTML = "Rillaboom";
    numberGro.innerHTML = "Nº 0812";
  } else {
    clickGro = 0;
    levelGro.innerHTML = "lvl:1";
    spriteGro.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/810.png";
    nameGro.innerHTML = "Grookey";
    numberGro.innerHTML = "Nº 0810";
  }
});
//Grookey evolve

//Scorbunny evolve
//Scor == Scorbunny
var scorbunny = window.document.getElementById("evolve-scorbunny");
var spriteScor = window.document.getElementById("sprite-scorbunny");
var levelScor = window.document.getElementById("level-scorbunny");
var nameScor = window.document.getElementById("name-scorbunny");
var numberScor = window.document.getElementById("number-scorbunny");
var newTypeScor = window.document.getElementById("new-type-scorbunny");
var clickScor = 0;

scorbunny.addEventListener("click", function () {
  if (clickScor == 0) {
    clickScor = 2;
    spriteScor.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/814.png";
    levelScor.innerHTML = "lvl:16";
    nameScor.innerHTML = "Raboot";
    numberScor.innerHTML = "Nº 0814";
  } else if (clickScor == 2) {
    clickScor = 3;
    levelScor.innerHTML = "lvl:36";
    spriteScor.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/815.png";
    nameScor.innerHTML = "Cinderace";
    numberScor.innerHTML = "Nº 0815";
  } else {
    clickScor = 0;
    levelScor.innerHTML = "lvl:1";
    spriteScor.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/813.png";
    nameScor.innerHTML = "Scorbunny";
    numberScor.innerHTML = "Nº 0813";
  }
});
//Scorbunny evolve

//Sobble evolve
//Sob == Sobble
var sobble = window.document.getElementById("evolve-sobble");
var spriteSob = window.document.getElementById("sprite-sobble");
var levelSob = window.document.getElementById("level-sobble");
var nameSob = window.document.getElementById("name-sobble");
var numberSob = window.document.getElementById("number-sobble");
var newTypeSob = window.document.getElementById("new-type-sobble");
var clickSob = 0;

sobble.addEventListener("click", function () {
  if (clickSob == 0) {
    clickSob = 2;
    spriteSob.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/817.png";
    levelSob.innerHTML = "lvl:16";
    nameSob.innerHTML = "Drizzile";
    numberSob.innerHTML = "Nº 0817";
  } else if (clickSob == 2) {
    clickSob = 3;
    levelSob.innerHTML = "lvl:36";
    spriteSob.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/818.png";
    nameSob.innerHTML = "Inteleon";
    numberSob.innerHTML = "Nº 0818";
  } else {
    clickSob = 0;
    levelSob.innerHTML = "lvl:1";
    spriteSob.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png";
    nameSob.innerHTML = "sobble";
    numberSob.innerHTML = "Nº 0816";
  }
});
//Sobble evolve

//Sprigatito evolve
//Spri == Sprigatito
var sprigatito = window.document.getElementById("evolve-sprigatito");
var spriteSpri = window.document.getElementById("sprite-sprigatito");
var levelSpri = window.document.getElementById("level-sprigatito");
var nameSpri = window.document.getElementById("name-sprigatito");
var numberSpri = window.document.getElementById("number-sprigatito");
var newTypeSpri = window.document.getElementById("new-type-sprigatito");
var clickSpri = 0;

sprigatito.addEventListener("click", function () {
  if (clickSpri == 0) {
    clickSpri = 2;
    spriteSpri.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/907.png";
    levelSpri.innerHTML = "lvl:16";
    nameSpri.innerHTML = "Floragato";
    numberSpri.innerHTML = "Nº 0907";
  } else if (clickSpri == 2) {
    clickSpri = 3;
    levelSpri.innerHTML = "lvl:36";
    spriteSpri.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/908.png";
    nameSpri.innerHTML = "Meowscarada";
    numberSpri.innerHTML = "Nº 0908";
    newTypeSpri.classList.add("type-pokemon--dark");
    newTypeSpri.innerHTML = "Dark";
  } else {
    clickSpri = 0;
    levelSpri.innerHTML = "lvl:1";
    spriteSpri.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/906.png";
    nameSpri.innerHTML = "Sprigatito";
    numberSpri.innerHTML = "Nº 0906";
    newTypeSpri.classList.remove("type-pokemon--dark");
    newTypeSpri.innerHTML = "";
  }
});
//Sprigatito evolve

//Fuecoco evolve
//Fue == Fuecoco
var fuecoco = window.document.getElementById("evolve-fuecoco");
var spriteFue = window.document.getElementById("sprite-fuecoco");
var levelFue = window.document.getElementById("level-fuecoco");
var nameFue = window.document.getElementById("name-fuecoco");
var numberFue = window.document.getElementById("number-fuecoco");
var newTypeFue = window.document.getElementById("new-type-fuecoco");
var clickFue = 0;

fuecoco.addEventListener("click", function () {
  if (clickFue == 0) {
    clickFue = 2;
    spriteFue.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/910.png";
    levelFue.innerHTML = "lvl:16";
    nameFue.innerHTML = "Crocalor";
    numberFue.innerHTML = "Nº 0910";
  } else if (clickFue == 2) {
    clickFue = 3;
    levelFue.innerHTML = "lvl:36";
    spriteFue.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/911.png";
    nameFue.innerHTML = "Skeledirge";
    numberFue.innerHTML = "Nº 0911";
    newTypeFue.classList.add("type-pokemon--ghost");
    newTypeFue.innerHTML = "Ghost";
  } else {
    clickFue = 0;
    levelFue.innerHTML = "lvl:1";
    spriteFue.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/909.png";
    nameFue.innerHTML = "Fuecoco";
    numberFue.innerHTML = "Nº 0909";
    newTypeFue.classList.remove("type-pokemon--ghost");
    newTypeFue.innerHTML = "";
  }
});
//Fuecoco evolve

//Quaxly evolve
//Quax == Quaxly
var quaxly = window.document.getElementById("evolve-quaxly");
var spriteQuax = window.document.getElementById("sprite-quaxly");
var levelQuax = window.document.getElementById("level-quaxly");
var nameQuax = window.document.getElementById("name-quaxly");
var numberQuax = window.document.getElementById("number-quaxly");
var newTypeQuax = window.document.getElementById("new-type-quaxly");
var clickQuax = 0;

quaxly.addEventListener("click", function () {
  if (clickQuax == 0) {
    clickQuax = 2;
    spriteQuax.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/913.png";
    levelQuax.innerHTML = "lvl:16";
    nameQuax.innerHTML = "Quaxwell";
    numberQuax.innerHTML = "Nº 0913";
  } else if (clickQuax == 2) {
    clickQuax = 3;
    levelQuax.innerHTML = "lvl:36";
    spriteQuax.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/914.png";
    nameQuax.innerHTML = "Quaquaval";
    numberQuax.innerHTML = "Nº 0914";
    newTypeQuax.classList.add("type-pokemon--fighting");
    newTypeQuax.innerHTML = "Fighting";
  } else {
    clickQuax = 0;
    levelQuax.innerHTML = "lvl:1";
    spriteQuax.src =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/912.png";
    nameQuax.innerHTML = "Quaxly";
    numberQuax.innerHTML = "Nº 0912";
    newTypeQuax.classList.remove("type-pokemon--fighting");
    newTypeQuax.innerHTML = "";
  }
});
//Quaxly evolve

