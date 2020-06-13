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



var reducePores = document.getElementById("reducePores");
var hyratedSkin = document.getElementById("hydratedSkin");
var youthfulSkin = document.getElementById("youthfulSkin");
var fightAcne = document.getElementById("fightAcne");




reducePores.onclick = () =>{

    reducePores.classList.toggle("active");

    if (reducePores.classList.contains("active")){
        userInfo.skinGoals.push("reducePores")
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

    changeStepTwo();
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





/* OILY PRODUCTS */

const StepTwoDewySkin = [

    {
        name: " Alpha Arbutin 2% + HA",
        description: "Description 1",
        image: "http://thumbs-prod.si-cdn.com/nnJARGtKrLypH4y3Vov2zGTG4xw=/fit-in/1600x0/filters:focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
    },

    {
        name: "The Ordinary. Salicylic Acid 2% Solution",
        description: "Description 2",
        image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },


];


var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");


const StepTwoDryProducts = [

   {
        name: "Hyaluronic Acid + B5",
        description: "Description 1",
        image: "http://thumbs-prod.si-cdn.com/nnJARGtKrLypH4y3Vov2zGTG4xw=/fit-in/1600x0/filters:focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
    },

    {
        name: "The Ordinary. Salicylic Acid 2% Solution",
        description: "Description 2",
        image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },


];

changeStepTwo = () => {

let randomProduct = StepTwoDryProducts[Math.floor(Math.random() * StepTwoDryProducts.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;

}


const StepThreeDryProducts = [

    {
        name: "‘B’ OIL",
        description: "Description 1",
        image: "http://thumbs-prod.si-cdn.com/nnJARGtKrLypH4y3Vov2zGTG4xw=/fit-in/1600x0/filters:focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
    },

    {
        name: "The Ordinary. Salicylic Acid 2% Solution",
        description: "Description 2",
        image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },


];







/* END OF OILY PRODUCTS*/







































}