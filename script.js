window.onload = () => {



var start = document.getElementById("start");
var landing = document.getElementById("landing");

var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");


/* USER INFO */

var userInfo = {

    skinType: "",
    skinGoals: []

}




/*LANDING PAGE INTERACTION*/

start.onclick = () =>{
    
    landing.style.transform = "translate(-100%)";
   

    landing.ontransitionend = () =>{
        landing.style.display = "none";
        landing.style.transform = "translate(100%)";
    }

    question1.style.display = "flex";


    setTimeout(function(){
    question1.style.transform = "translate(0%)";
    },10);

    setTimeout(function(){
      
        question1.style.opacity = "1";
        },200);
    
}

/*END OF LANDING PAGE INTERACTION*/





/*QUESTION 1 INTERACTION*/

var normal = document.getElementById("normal");
var oily = document.getElementById("oily");
var dry = document.getElementById("dry");
var combination = document.getElementById("combination");

normal.onclick = () =>{

    userInfo.skinType = "normal";


    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    question1.ontransitionend = () =>{
        question1.style.transform = "translate(100%)";
    }

    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);


}


oily.onclick = () =>{

    userInfo.skinType = "oily";


    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    question1.ontransitionend = () =>{
        question1.style.transform = "translate(100%)";
    }

    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);


}

dry.onclick = () =>{

    userInfo.skinType = "Dry";


    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    question1.ontransitionend = () =>{
        question1.style.transform = "translate(100%)";
    }

    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);


}

combination.onclick = () =>{

    userInfo.skinType = "combination";


    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    question1.ontransitionend = () =>{
        question1.style.transform = "translate(100%)";
    }

    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);


}





/*END OF QUESTION 1 INTERACTION*/




/*QUESTION 2 INTERACTION */


var dewySkin = document.getElementById("dewySkin");
var reducePores = document.getElementById("reducePores");
var clearSkin = document.getElementById("clearSkin");
var hyratedSkin = document.getElementById("hydratedSkin");
var youthfulSkin = document.getElementById("youthfulSkin");

dewySkin.onclick = () =>{

    dewySkin.classList.toggle("active");

    if (dewySkin.classList.contains("active")){
        userInfo.skinGoals.push("dewySkin")
    }


    

}


reducePores.onclick = () =>{

    reducePores.classList.toggle("active");

    if (reducePores.classList.contains("active")){
        userInfo.skinGoals.push("reducePores")
    }
    
}

clearSkin.onclick = () =>{
    clearSkin.classList.toggle("active");

    if (clearSkin.classList.contains("active")){
        userInfo.skinGoals.push("clearSkin")
    }

    
}

hyratedSkin.onclick = () =>{
    hyratedSkin.classList.toggle("active");

    if (hydratedSkin.classList.contains("active")){
        userInfo.skinGoals.push("hydratedSkin")
    }
}

youthfulSkin.onclick = () =>{
    youthfulSkin.classList.toggle("active");

    if (youthfulSkin.classList.contains("active")){
        userInfo.skinGoals.push("youthfulSkin")
    }
}


var getResults = document.getElementById("getResults");

getResults.onclick = () =>{
    console.log(userInfo);
}




/*END OF QUESTION-2 INTERACTION*/





































}