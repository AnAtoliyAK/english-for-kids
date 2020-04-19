!function(a){var i={};function e(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=a,e.c=i,e.d=function(a,i,t){e.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:t})},e.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,i){if(1&i&&(a=e(a)),8&i)return a;if(4&i&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&i&&"string"!=typeof a)for(var r in a)e.d(t,r,function(i){return a[i]}.bind(null,r));return t},e.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(i,"a",i),i},e.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},e.p="",e(e.s=0)}([function(a,i,e){"use strict";e.r(i);var t=class{constructor({word:a,translation:i,image:e,audioSrc:t}){this.word=a,this.translation=i,this.image=e,this.audioSrc=t}createDOMCard(){const a=document.createElement("div"),i=`url(./assets/${this.image})`,e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),d=document.createElement("img");return t.innerHTML=this.word,o.innerHTML=this.translation,d.src="./assets/img/rotate.png",d.classList.add("rotate"),e.id=this.word,e.classList.add("front-face"),r.classList.add("back-face"),t.classList.add("card-text"),o.classList.add("card-text"),r.classList.add("flip"),e.style.backgroundImage=i,r.style.backgroundImage=i,a.classList.add("card"),e.appendChild(t),r.appendChild(o),a.appendChild(e),a.appendChild(r),a.appendChild(d),a}};var r=class{constructor(a,i,e){this.name=a,this.cardsConfig=i,this.cardsArray=this.generateCards(),this.container=e,this.selectedCardsIds=[],this.enabledCardsIds=this.cardsArray.map(a=>a.word),this.activeCardId=null,this.lastAudio="",this.scoreResult=[],this.gameStarted=!1}createDomTitleCard(){const a=document.createElement("div"),i=document.createElement("div"),e=document.createElement("img"),t="./assets/"+this.cardsConfig[0].image;return i.innerHTML=this.name,e.src=t,a.id=this.name,e.id=this.name,i.id=this.name,a.classList.add("cards-group"),i.classList.add("main-card-text"),a.appendChild(e),a.appendChild(i),a}generateCards(){return this.cardsConfig.map(a=>new t(a))}createDOMCards(){const a=document.createElement("div"),i=document.createElement("div"),e=document.createElement("div"),t=this.cardsConfig.map(a=>a.word),r=t[Math.floor(Math.random()*t.length)];return a.classList.add("cards-group-container"),e.classList.add("star-container"),i.classList.add("button-play"),i.classList.add("hidden"),i.innerHTML="Start game",i.addEventListener("click",()=>{this.lastAudio=r,console.log("this.lastaudioBUTTON:",this.lastAudio),this.audioPlay(r),i.innerHTML="Repeat",this.setGameStarted(!0)}),a.appendChild(e),this.cardsArray.forEach(i=>{const e=i.createDOMCard();e.addEventListener("click",a=>{this.analyseCardEvent(a)}),this.container.trainMode||(e.querySelector(".card-text").classList.add("hidden"),e.querySelector(".rotate").classList.add("hidden"),e.classList.add("card-cover")),a.appendChild(e)}),this.container.trainMode||i.classList.remove("hidden"),a.appendChild(i),a}analyseCardEvent(a){const i=document.querySelector(".star-container"),e=document.createElement("img"),t=document.createElement("img");if(e.src="./assets/img/star-win.png",t.src="./assets/img/star-loose.png",a.target.id){if(this.container.trainMode)this.audioPlay(a.target.id);else if(this.gameStarted)if(this.activeCardId=a.target.id,this.activeCardId===this.lastAudio){console.log("MAtCH"),console.log("this.enabledCardsIds",this.enabledCardsIds),i.appendChild(e),this.enabledCardsIds=this.removeElementFromArray(this.enabledCardsIds,this.activeCardId);const a=this.enabledCardsIds[Math.floor(Math.random()*this.enabledCardsIds.length)];console.log("this.enabledCardsIds",this.enabledCardsIds),console.log("LAAST AUDIO:",a),this.lastAudio=a,this.audioPlay(this.lastAudio),0===this.enabledCardsIds.length&&this.gameOver()}else i.appendChild(t),console.log("DO NOT MAtCH")}else a.target.classList.contains("rotate")&&(a.target.previousSibling.classList.toggle("flip"),a.target.previousSibling.previousSibling.classList.toggle("flip"),document.querySelectorAll(".card").forEach(i=>{i.addEventListener("blur",()=>{a.target.previousSibling.classList.toggle("flip"),a.target.previousSibling.previousSibling.classList.toggle("flip")})}))}setGameStarted(a){this.gameStarted=a}removeElementFromArray(a,i){const e=[...a],t=e.indexOf(i);return e.splice(t,1),e}gameOver(){console.log("UUUUUUU")}audioPlay(a){if(a){new Audio(`./assets/audio/${a}.mp3`).play()}}};var o={"Action (set A)":[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],"Action (set B)":[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],"Animal (set A)":[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],"Animal (set B)":[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],Clothes:[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],Emotions:[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],Family:[{word:"family",translation:"семья",image:"img/family.jpg",audioSrc:"audio/family.mp3"},{word:"brother",translation:"брат",image:"img/brother.jpg",audioSrc:"audio/brother.mp3"},{word:"child",translation:"ребенок",image:"img/child.jpg",audioSrc:"audio/child.mp3"},{word:"father",translation:"отец",image:"img/father.jpg",audioSrc:"audio/father.mp3"},{word:"grandfather",translation:"дедушка",image:"img/grandfather.jpg",audioSrc:"audio/grandfather.mp3"},{word:"grandmother",translation:"бабушка",image:"img/grandmother.jpg",audioSrc:"audio/grandmother.mp3"},{word:"mother",translation:"мать",image:"img/mother.jpg",audioSrc:"audio/mother.mp3"},{word:"sister",translation:"сестра",image:"img/sister.jpg",audioSrc:"audio/sister.mp3"}],Colors:[{word:"white",translation:"белый",image:"img/white.jpg",audioSrc:"audio/white.mp3"},{word:"black",translation:"черный",image:"img/black.jpg",audioSrc:"audio/black.mp3"},{word:"blue",translation:"синий",image:"img/blue.jpg",audioSrc:"audio/blue.mp3"},{word:"brown",translation:"коричневый",image:"img/brown.jpg",audioSrc:"audio/brown.mp3"},{word:"orange",translation:"оранжевый",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"},{word:"green",translation:"зеленый",image:"img/green.jpg",audioSrc:"audio/green.mp3"},{word:"red",translation:"красный",image:"img/red.jpg",audioSrc:"audio/red.mp3"},{word:"yellow",translation:"желтый",image:"img/yellow.jpg",audioSrc:"audio/yellow.mp3"}]};const d={ACTION_A:"Action (set A)",ACTION_B:"Action (set B)",ANIMAL_A:"Animal (set A)",ANIMAL_B:"Animal (set B)",CLOTHES:"Clothes",EMOTIONS:"Emotions",FAMILY:"Family",COLORS:"Colors"};var n=class{constructor(){this.cardsGroups=this.generateCardGroups(),this.cardsConfig=o,this.trainMode=!0}containerToggleGameMode(){this.trainMode=!this.trainMode}createDOMMainContainer(){const{body:a}=document,i=document.createElement("div");a.appendChild(i),i.classList.add("main-container"),i.id="mainContainer"}generateDomCardContainer(){this.createDOMMainContainer();let a=this.getMainPage();this.applyPageToDOM(a)}generateCardGroups(){let a=this;return Object.values(d).map(i=>new r(i,o[i],a))}getMainPage(){let a=document.createElement("div");return a.classList.add("cards-group-container"),this.cardsGroups.forEach(i=>{let e=i.createDomTitleCard();e.addEventListener("click",a=>{this.applyDomCardsToMainContainer(a)}),this.trainMode||e.classList.add("cards-group_active"),a.appendChild(e)}),a}clearPage(){let a=document.getElementById("mainContainer");for(;a.firstChild;)a.removeChild(a.firstChild)}selectCardGroup(a){return this.cardsGroups.find(i=>i.name===a)}applyPageToDOM(a){this.clearPage(),document.getElementById("mainContainer").appendChild(a)}applyDomCardsToMainContainer(a){let i=a.target.id;this.openCardCategoryPage(i)}openCardCategoryPage(a){let i=this.selectCardGroup(a).createDOMCards();this.applyPageToDOM(i)}};var s=function(a){document.getElementById("gameOnToggler").querySelectorAll(".toggle.btn").forEach(i=>{i.addEventListener("click",()=>{const i=document.querySelectorAll(".cards-group"),e=document.querySelectorAll(".card-text"),t=document.querySelectorAll(".card"),r=document.querySelectorAll(".rotate"),o=document.querySelector(".button-play"),d=document.querySelector(".star-container");if(a.containerToggleGameMode(),i&&i.forEach(a=>{a.classList.toggle("cards-group_active")}),t&&t.forEach(a=>{a.classList.toggle("card-cover")}),e&&e.forEach(a=>{a.classList.toggle("hidden")}),r&&r.forEach(a=>{a.classList.toggle("hidden")}),d)for(;d.firstChild;)d.removeChild(d.firstChild);o&&o.classList.toggle("hidden")})})};var l=function(a){document.querySelector(".open-close-btn").addEventListener("click",a=>{a.preventDefault(),document.querySelector(".overlay").classList.toggle("overlay-open"),document.getElementById("hamburger-icon").classList.toggle("hamburger-open")});const i=document.querySelector(".overlay-content").querySelectorAll("a");i.forEach(e=>{e.addEventListener("click",e=>{const t=e.target.innerHTML;if("Main menu"===t){let i=a.getMainPage();a.applyPageToDOM(i)}else a.openCardCategoryPage(t);i.forEach(a=>{a.classList.remove("main-menu-link_active")}),e.target.classList.add("main-menu-link_active"),document.querySelector(".overlay").classList.toggle("overlay-open"),document.getElementById("hamburger-icon").classList.toggle("hamburger-open")})})};document.body.onload=function(){const a=new n;a.generateDomCardContainer(),l(a),s(a)}}]);