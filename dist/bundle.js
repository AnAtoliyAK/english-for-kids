!function(a){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return a[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=a,t.c=e,t.d=function(a,e,i){t.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:i})},t.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,e){if(1&e&&(a=t(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var r in a)t.d(i,r,function(e){return a[e]}.bind(null,r));return i},t.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,"a",e),e},t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},t.p="",t(t.s=0)}([function(a,e,t){"use strict";t.r(e);var i=class{constructor({word:a,translation:e,image:t,audioSrc:i}){this.word=a,this.translation=e,this.image=t,this.audioSrc=i}createDOMCard(){const a=document.createElement("div"),e=`url(./assets/${this.image})`,t=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("img");return i.innerHTML=this.word,o.innerHTML=this.translation,s.src="./assets/img/rotate.png",s.classList.add("rotate"),t.id=this.word,t.classList.add("front-face"),r.classList.add("back-face"),i.classList.add("card-text"),o.classList.add("card-text"),r.classList.add("flip"),t.style.backgroundImage=e,r.style.backgroundImage=e,a.classList.add("card"),t.appendChild(i),r.appendChild(o),a.appendChild(t),a.appendChild(r),a.appendChild(s),a}};var r=class{constructor(a,e,t){this.name=a,this.cardsConfig=e,this.cardsArray=this.generateCards(),this.container=t,this.selectedCardsIds=[],this.enabledCardsIds=this.cardsArray.map(a=>a.word),this.activeCardId=null,this.lastAudio="",this.scoreResult=[],this.gameStarted=!1}resetGameState(){this.selectedCardsIds=[],this.enabledCardsIds=this.cardsArray.map(a=>a.word),this.activeCardId=null,this.lastAudio="",this.scoreResult=[],this.gameStarted=!1}createDomTitleCard(){const a=document.createElement("div"),e=document.createElement("div"),t=document.createElement("img"),i="./assets/"+this.cardsConfig[0].image;return e.innerHTML=this.name,t.src=i,a.id=this.name,t.id=this.name,e.id=this.name,a.classList.add("cards-group"),e.classList.add("main-card-text"),a.appendChild(t),a.appendChild(e),a}generateCards(){return this.cardsConfig.map(a=>new i(a))}resetStartGameButton(){const a=document.getElementById("button-play-repeat");console.log("A: ",a),a.classList.add("button-play"),a.classList.add("hidden"),a.innerHTML="Start game",a.addEventListener("click",()=>{this.lastAudio=this.randomElement,this.audioPlay(this.lastAudio),a.innerHTML="",a.classList.remove("button-play"),a.classList.add("button-play-active"),a.style.backgroundImage="url(./assets/img/repeat.png)",this.setGameStarted(!0)})}createDOMCards(){const a=document.createElement("div"),e=document.createElement("div");e.setAttribute("id","button-play-repeat");const t=document.createElement("div");return this.randomElement=this.enabledCardsIds[Math.floor(Math.random()*this.enabledCardsIds.length)],a.classList.add("cards-group-container"),t.classList.add("star-container"),e.classList.add("button-play"),e.classList.add("hidden"),e.innerHTML="Start game",e.addEventListener("click",()=>{this.lastAudio=this.randomElement,this.audioPlay(this.lastAudio),e.innerHTML="",e.classList.remove("button-play"),e.classList.add("button-play-active"),e.style.backgroundImage="url(./assets/img/repeat.png)",this.setGameStarted(!0)}),a.appendChild(t),this.cardsArray.forEach(e=>{const t=e.createDOMCard();t.addEventListener("click",a=>{this.analyseCardEvent(a)}),this.container.trainMode||(t.querySelector(".card-text").classList.toggle("hidden"),t.querySelector(".rotate").classList.toggle("hidden"),t.classList.toggle("card-cover")),a.appendChild(t)}),this.container.trainMode||e.classList.remove("hidden"),a.appendChild(e),a}analyseCardEvent(a){const e=document.querySelector(".star-container"),t=document.createElement("img"),i=document.createElement("img");t.src="./assets/img/star-win.png",i.src="./assets/img/star-loose.png",a.target.id?this.container.trainMode?this.audioPlay(a.target.id):this.gameStarted&&!a.target.classList.contains("inactive")&&(this.activeCardId=a.target.id,this.activeCardId===this.lastAudio?(this.audioPlay("correct"),a.target.classList.add("inactive"),e.appendChild(t),this.enabledCardsIds=this.removeElementFromArray(this.enabledCardsIds,this.activeCardId),this.randomElement=this.enabledCardsIds[Math.floor(Math.random()*this.enabledCardsIds.length)],this.audioPlay(this.randomElement),this.lastAudio=this.randomElement,0===this.enabledCardsIds.length&&this.gameOver()):(this.audioPlay("error"),e.appendChild(i),this.scoreResult++)):a.target.classList.contains("rotate")&&(a.target.previousSibling.classList.toggle("flip"),a.target.previousSibling.previousSibling.classList.toggle("flip"),document.querySelectorAll(".card").forEach(e=>{e.addEventListener("blur",()=>{a.target.previousSibling.classList.toggle("flip"),a.target.previousSibling.previousSibling.classList.toggle("flip")})}))}setGameStarted(a){this.gameStarted=a}removeElementFromArray(a,e){const t=[...a],i=t.indexOf(e);return t.splice(i,1),t}gameOver(){const a=document.querySelector(".main-container"),e=document.createElement("div"),t=document.createElement("div");this.scoreResult>0?(this.audioPlay("failure"),this.container.clearPage(),1===this.scoreResult?t.innerHTML=`You have ${this.scoreResult} mistake!`:t.innerHTML=`You have ${this.scoreResult} mistakes!`,t.classList.add("loose-message"),t.style.backgroundImage="url(./assets/img/failure.jpg)",a.appendChild(t)):(this.audioPlay("success"),this.container.clearPage(),e.classList.add("win-message"),e.innerHTML="You WIN!",e.style.backgroundImage="url(./assets/img/success.jpg)",a.appendChild(e),console.log("SCORE:",this.scoreResult)),this.resetGameState()}audioPlay(a){if(a){new Audio(`./assets/audio/${a}.mp3`).play()}}};var o={"Action (set A)":[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],"Action (set B)":[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],"Animal (set A)":[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],"Animal (set B)":[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],Clothes:[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],Emotions:[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],Family:[{word:"family",translation:"семья",image:"img/family.jpg",audioSrc:"audio/family.mp3"},{word:"brother",translation:"брат",image:"img/brother.jpg",audioSrc:"audio/brother.mp3"},{word:"child",translation:"ребенок",image:"img/child.jpg",audioSrc:"audio/child.mp3"},{word:"father",translation:"отец",image:"img/father.jpg",audioSrc:"audio/father.mp3"},{word:"grandfather",translation:"дедушка",image:"img/grandfather.jpg",audioSrc:"audio/grandfather.mp3"},{word:"grandmother",translation:"бабушка",image:"img/grandmother.jpg",audioSrc:"audio/grandmother.mp3"},{word:"mother",translation:"мать",image:"img/mother.jpg",audioSrc:"audio/mother.mp3"},{word:"sister",translation:"сестра",image:"img/sister.jpg",audioSrc:"audio/sister.mp3"}],Colors:[{word:"white",translation:"белый",image:"img/white.jpg",audioSrc:"audio/white.mp3"},{word:"black",translation:"черный",image:"img/black.jpg",audioSrc:"audio/black.mp3"},{word:"blue",translation:"синий",image:"img/blue.jpg",audioSrc:"audio/blue.mp3"},{word:"brown",translation:"коричневый",image:"img/brown.jpg",audioSrc:"audio/brown.mp3"},{word:"orange",translation:"оранжевый",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"},{word:"green",translation:"зеленый",image:"img/green.jpg",audioSrc:"audio/green.mp3"},{word:"red",translation:"красный",image:"img/red.jpg",audioSrc:"audio/red.mp3"},{word:"yellow",translation:"желтый",image:"img/yellow.jpg",audioSrc:"audio/yellow.mp3"}]};const s={ACTION_A:"Action (set A)",ACTION_B:"Action (set B)",ANIMAL_A:"Animal (set A)",ANIMAL_B:"Animal (set B)",CLOTHES:"Clothes",EMOTIONS:"Emotions",FAMILY:"Family",COLORS:"Colors"};var d=class{constructor(){this.cardsGroups=this.generateCardGroups(),this.cardsConfig=o,this.trainMode=!0}containerToggleGameMode(){this.trainMode=!this.trainMode,this.resetGameState()}resetGameState(){this.cardsGroups.forEach(a=>a.resetGameState())}createDOMMainContainer(){const{body:a}=document,e=document.createElement("div");a.appendChild(e),e.classList.add("main-container"),e.id="mainContainer"}generateDomCardContainer(){this.createDOMMainContainer();let a=this.getMainPage();this.applyPageToDOM(a)}generateCardGroups(){let a=this;return Object.values(s).map(e=>new r(e,o[e],a))}getMainPage(){let a=document.createElement("div");return a.classList.add("cards-group-container"),this.cardsGroups.forEach(e=>{let t=e.createDomTitleCard();t.addEventListener("click",a=>{this.applyDomCardsToMainContainer(a)}),this.trainMode||t.classList.add("cards-group_active"),a.appendChild(t)}),a}clearPage(){let a=document.getElementById("mainContainer");for(;a.firstChild;)a.removeChild(a.firstChild)}selectCardGroup(a){return this.cardsGroups.find(e=>e.name===a)}applyPageToDOM(a){this.clearPage(),document.getElementById("mainContainer").appendChild(a)}applyDomCardsToMainContainer(a){let e=a.target.id;this.openCardCategoryPage(e)}openCardCategoryPage(a){let e=this.selectCardGroup(a).createDOMCards();this.applyPageToDOM(e)}};var n=function(a){document.getElementById("gameOnToggler").querySelectorAll(".toggle.btn").forEach(e=>{e.addEventListener("click",()=>{const e=document.querySelectorAll(".cards-group"),t=document.querySelectorAll(".card-text"),i=document.querySelectorAll(".card"),r=document.querySelectorAll(".rotate"),o=document.querySelector(".button-play"),s=document.querySelector(".button-play-active"),d=document.querySelector(".star-container"),n=document.querySelectorAll(".front-face");if(a.containerToggleGameMode(),e&&e.forEach(a=>{a.classList.toggle("cards-group_active")}),i&&i.forEach(a=>{a.classList.toggle("card-cover")}),n&&n.forEach(a=>{a.classList.remove("inactive")}),t&&t.forEach(a=>{a.classList.toggle("hidden")}),r&&r.forEach(a=>{a.classList.toggle("hidden")}),d)for(;d.firstChild;)d.removeChild(d.firstChild);o&&o.classList.toggle("hidden"),s&&s.classList.toggle("hidden")})})};var l=function(a){document.querySelector(".open-close-btn").addEventListener("click",a=>{a.preventDefault(),document.querySelector(".overlay").classList.toggle("overlay-open"),document.getElementById("hamburger-icon").classList.toggle("hamburger-open")});const e=document.querySelector(".overlay-content").querySelectorAll("a");e.forEach(t=>{t.addEventListener("click",t=>{const i=t.target.innerHTML;if("Main menu"===i){let e=a.getMainPage();a.applyPageToDOM(e)}else a.openCardCategoryPage(i);e.forEach(a=>{a.classList.remove("main-menu-link_active")}),t.target.classList.add("main-menu-link_active"),document.querySelector(".overlay").classList.toggle("overlay-open"),document.getElementById("hamburger-icon").classList.toggle("hamburger-open")})})};document.body.onload=function(){const a=new d;a.generateDomCardContainer(),l(a),n(a)}}]);