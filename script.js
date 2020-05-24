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
var fightAcne = document.getElementById("fightAcne");

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

fightAcne.onclick = () =>{
    fightAcne.classList.toggle("active");

    if (fightAcne.classList.contains("active")){
        userInfo.skinGoals.push("fightAcne")
    }
}




/*END OF QUESTION-2 INTERACTION*/



/* SHOW RESULTS*/


var getResults = document.getElementById("getResults");
var loadingPage = document.getElementById("loadingPage");
var resultsPage = document.getElementById("resultsPage");

var stepOneButton = document.getElementById("step-1-button");
var stepTwoButton = document.getElementById("step-2-button");
var stepThreeButton = document.getElementById("step-3-button");

var stepOne = document.getElementById("step-1");
var stepTwo = document.getElementById("step-2");
var stepThree = document.getElementById("step-3");

getResults.onclick = () =>{
    console.log(userInfo);

    question2.style.display = "none";

    loadingPage.style.display = "flex";

    setTimeout(function(){
        loadingPage.style.display = "none";
        resultsPage.style.display = "flex";
    },2000)

    stepOneButton.classList.add("buttonActive");
}


stepOneButton.onclick = () =>{
    stepTwoButton.classList.remove("buttonActive");
    stepTwo.style.display = "none";

    stepThreeButton.classList.remove("buttonActive");
    stepThree.style.display = "none";

    stepOneButton.classList.add("buttonActive");
    stepOne.style.display = "flex";


}


stepTwoButton.onclick = () =>{
    stepOneButton.classList.remove("buttonActive");
    stepOne.style.display = "none";

    stepThreeButton.classList.remove("buttonActive")
    stepThree.style.display = "none";

    stepTwoButton.classList.add("buttonActive");
    stepTwo.style.display = "flex";
}

stepThreeButton.onclick = () =>{
    stepOneButton.classList.remove("buttonActive");
    stepOne.style.display = "none";

    stepTwoButton.classList.remove("buttonActive");
    stepTwo.style.display = "none";

    stepThreeButton.classList.add("buttonActive");
    stepThree.style.display = "flex";
}











/* END OF SHOW RESULTS*/








































}