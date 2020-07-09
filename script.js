window.onload = () => {

    var introImg = document.getElementById("introImg");
    var intro = document.getElementById("intro");

   

    setTimeout(() => {
        introImg.style.opacity = "0";
    },3750);

    setTimeout(() => {
        intro.style.display = "none";
    }, 4000);

    setTimeout(() => {
        landing.style.display = "flex";
    }, 4500);


   



var start = document.getElementById("start");
var landing = document.getElementById("landing");

var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");


/* USER INFO */

/* var userInfo = {

    skinType: "",
    skinGoals: []

} */

var skinGoals = [];


/*LANDING PAGE INTERACTION*/

start.onclick = () =>{

    

    normalAnimation();
    oilyAnimation();
    combinationAnimation();
    dryAnimation();

    circleContainer.style.transform = "translate(100%)";

    setTimeout(() => {
        circleContainer.style.transform = "translate(0%)";
    }, 300);

    
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



/* QUESTION 1 ANIMATION */

var circleContainer = document.getElementById("circle-container");

var normal = document.getElementById("normal");
var oily = document.getElementById("oily");
var dry = document.getElementById("dry");
var combination = document.getElementById("combination");

var normalAnimation = () =>{

    normal.style.transform = "scale(0.0)";

    setTimeout(() => {
        normal.style.transform = "scale(1.0)";
    }, 400);

}

var oilyAnimation = () =>{

   
    oily.style.transform = "scale(0.0)";


    setTimeout(() => {
        oily.style.transform = "scale(1.0)";
    }, 600);

}


var dryAnimation = () =>{

   
    dry.style.transform = "scale(0.0)";


    setTimeout(() => {
        dry.style.transform = "scale(1.0)";
    }, 800);

}


var combinationAnimation = () =>{

   
    combination.style.transform = "scale(0.0)";

    setTimeout(() => {
        combination.style.transform = "scale(1.0)";
    }, 950);
} 



/* END OF QUESTION 1 ANIMATION */
















/*QUESTION 1 INTERACTION*/

var normal = document.getElementById("normal");
var oily = document.getElementById("oily");
var dry = document.getElementById("dry");
var combination = document.getElementById("combination");



normal.onclick = () =>{

    hydratedAnimation();
    hyperpigAnimation();
    youthfulAnimation();
    acneAnimation();

   
    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    setTimeout(() => {
        question1.style.display = "none";
    }, 1000);


    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10); 
        
}


oily.onclick = () =>{

    hydratedAnimation();
    hyperpigAnimation();
    youthfulAnimation();
    acneAnimation();



    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    setTimeout(() => {
        question1.style.display = "none";
    }, 1000);


    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);

}

dry.onclick = () =>{

    hydratedAnimation();
    hyperpigAnimation();
    youthfulAnimation();
    acneAnimation();
    


    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    setTimeout(() => {
        question1.style.display = "none";
    }, 1000);


    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);


}

combination.onclick = () =>{

    hydratedAnimation();
    hyperpigAnimation();
    youthfulAnimation();
    acneAnimation();

  
    question1.style.transform = "translate(-100%)";
    question1.style.opacity = "0";

    setTimeout(() => {
        question1.style.display = "none";
    }, 1000);


    question2.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);

}



/*END OF QUESTION 1 INTERACTION*/



/* QUESTION 2 ANIMATION */ 


var circleContainerTwo = document.getElementById("circle-container-2");

var hyperpig = document.getElementById("hyperpig");
var hydratedSkin = document.getElementById("hydratedSkin");
var youthfulSkin = document.getElementById("youthfulSkin");
var fightAcne = document.getElementById("fightAcne");

var hydratedAnimation = () =>{

    circleContainerTwo.style.transform = "translate(100%)";

    setTimeout(() => {
        circleContainerTwo.style.transform = "translate(0%)";
    }, 300);


    hydratedSkin.style.transform = "scale(0.0)";

    setTimeout(() => {
        hydratedSkin.style.transform = "scale(1.0)";
    }, 400);

}

var hyperpigAnimation = () =>{

    
   
    hyperpig.style.transform = "scale(0.0)";


    setTimeout(() => {
        hyperpig.style.transform = "scale(1.0)";
    }, 600);

}


var youthfulAnimation = () =>{

   
    youthfulSkin.style.transform = "scale(0.0)";


    setTimeout(() => {
        youthfulSkin.style.transform = "scale(1.0)";
    }, 800);

}


var acneAnimation = () =>{

   
    fightAcne.style.transform = "scale(0.0)";

    setTimeout(() => {
        fightAcne.style.transform = "scale(1.0)";
    }, 950);
} 

















/* END OF QUESTION 2 ANIMATION */




/*QUESTION 2 INTERACTION */



var hyperpig = document.getElementById("hyperpig");
var hydratedSkin = document.getElementById("hydratedSkin");
var youthfulSkin = document.getElementById("youthfulSkin");
var fightAcne = document.getElementById("fightAcne");




hyperpig.onclick = () =>{

    stepOneButton.classList.add("buttonActive");

    
    question2.style.display = "none";

    loadingPage.style.display = "flex";

    setTimeout(function(){
        loadingPage.style.display = "none";
        resultsPage.style.display = "flex";
    },2000)


        hyperpigStepOne();
        hyperpigStepTwo();
        hyperpigStepThree();
    

    if (hyperpig.classList.contains("active")){
        skinGoals.push("hyperpig")
        selected.push("1")
    }

    else {
        selected.length = 0;
        skinGoals.length = 0;
    }

    hydratedSkin.classList.remove("active");
    youthfulSkin.classList.remove("active");
    fightAcne.classList.remove("active");

    alert.style.display = "none";

    console.log(selected)
    console.log(skinGoals)
    
}


hydratedSkin.onclick = () =>{

    stepOneButton.classList.add("buttonActive");

    question2.style.display = "none";

    loadingPage.style.display = "flex";

    setTimeout(function(){
        loadingPage.style.display = "none";
        resultsPage.style.display = "flex";
    },2000)


        hydratedStepOne();
        hydratedStepTwo();
        hydratedStepThree();
    

    alert.style.display = "none";

    console.log(selected)
    console.log(skinGoals)
}

youthfulSkin.onclick = () =>{

    stepOneButton.classList.add("buttonActive");

    question2.style.display = "none";

    loadingPage.style.display = "flex";

    setTimeout(function(){
        loadingPage.style.display = "none";
        resultsPage.style.display = "flex";
    },2000)

   

        youthfulStepOne();
        youthfulStepTwo();
        youthfulStepThree();
    


    hydratedSkin.classList.remove("active");
    hyperpig.classList.remove("active");
    fightAcne.classList.remove("active");

    alert.style.display = "none";

    console.log(selected)
    console.log(skinGoals)
}

fightAcne.onclick = () =>{
   

    stepOneButton.classList.add("buttonActive");

    question2.style.display = "none";

    loadingPage.style.display = "flex";

    setTimeout(function(){
        loadingPage.style.display = "none";
        resultsPage.style.display = "flex";
    },2000)


        acneStepOne();
        acneStepTwo();
        acneStepThree(); 

    

    if (fightAcne.classList.contains("active")){
        skinGoals.push("fightAcne")
        selected.push("1")
    }

    else {
        selected.length = 0;
        skinGoals.length = 0;
    }

    hydratedSkin.classList.remove("active");
    hyperpig.classList.remove("active");
    youthfulSkin.classList.remove("active");

    alert.style.display = "none";

    console.log(selected)
    console.log(skinGoals)


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

var alert = document.getElementById("alert");

var selected = [];

var arrow1 = document.getElementById("arrow-1");
var arrow2 = document.getElementById("arrow-2");

var shopBagOne = document.getElementById("shopBagOne");
var shopBagTwo = document.getElementById("shopBagTwo");
var shopBagThree = document.getElementById("shopBagThree");


arrow1.onclick = () => {

    question2.style.transform = "translate(100%)";
    question2.style.opacity = "0";


    question1.style.display = "flex";


    setTimeout(function(){
    question1.style.transform = "translate(0%)";
    question1.style.opacity = "1";
    },10);


}


arrow2.onclick = () =>{

    resultsPage.style.display = "none";
    question2.style.display = "flex";


    stepOneButton.classList.add("buttonActive");
    stepTwoButton.classList.remove("buttonActive");
    stepThreeButton.classList.remove("buttonActive");       

    stepTwo.style.display = "none";
    stepThree.style.display = "none";
    stepOne.style.display = "flex";


    /*---*/

    question2.style.transform = "translate(-100%)";
    question2.style.opacity = "0";


    question1.style.display = "flex";


    setTimeout(function(){
    question2.style.transform = "translate(0%)";
    question2.style.opacity = "1";
    },10);


    hyperpig.style.transform = "scale(0.0)";
    hydratedSkin.style.transform = "scale(0.0)";
    fightAcne.style.transform = "scale(0.0)";
    youthfulSkin.style.transform = "scale(0.0)";

    setTimeout(() => {
        hyperpig.style.transform = "scale(1.0)";
    }, 600);

    setTimeout(() => {
        hydratedSkin.style.transform = "scale(1.0)";
    }, 400);

    setTimeout(() => {
        fightAcne.style.transform = "scale(1.0)";
    }, 950);

    setTimeout(() => {
        youthfulSkin.style.transform = "scale(1.0)";
    }, 800);

 
    


}


/*stepOneButton.onclick = () =>{
 
    stepTwo.style.display = "none";

    stepThree.style.display = "none";

   
    stepOne.style.display = "flex";


}


stepTwoButton.onclick = () =>{
   
    stepOne.style.display = "none";

 
    stepThree.style.display = "none";

   
    stepTwo.style.display = "flex";
}

stepThreeButton.onclick = () =>{

    stepOne.style.display = "none";


    stepTwo.style.display = "none";

   
    stepThree.style.display = "flex";
}
 */


/* END OF SHOW RESULTS*/



/* HYDRATED PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneHydrated = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, this peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17",
        link: "https://www.google.com/search?source=hp&ei=wOoGX-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"
    },


];

hydratedStepOne = () => {

    let randomProduct = StepOneHydrated[Math.floor(Math.random() * StepOneHydrated.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    shopBagOne.setAttribute("href", randomProduct.link);
    
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoHydrated = [

   {
        name: "Hyaluronic Acid 2%  + B5",
        description: "A lightweight serum to rehydrate skin on a multi-depth level. Working with Vitamin B5 to offer lasting hydration and visible plumping of the skin.",
        image: "https://theordinary.deciem.com/images/products/rdn-hyaluronic-acid-2pct-b5-30ml.png?ver=17",
        link: "https://www.google.com/search?source=hp&ei=https://www.google.com/search?q=Hyaluronic+Acid+2%25+%2B+B5&oq=Hyaluronic+Acid+2%25++%2B+B5&aqs=chrome..69i57j0l7.364j1j7&sourceid=chrome&ie=UTF-8-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"
    },


];

hydratedStepTwo = () => {

let randomProduct = StepTwoHydrated[Math.floor(Math.random() * StepTwoHydrated.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;
shopBagTwo.setAttribute("href", randomProduct.link);



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc");
var stepThreeImg = document.getElementById("stepThreeImg");


const StepThreeHydrated = [

    {
        name: "‘B’ OIL",
        description: "Smoothing and brightening the skin, “B” Oil is a purified form of micro-algae in a blend of squalene and nourishing oils. Working to deliver a healthier, more radiant complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-b-oil-30ml.png?ver=17",
        link: "https://www.google.https://www.google.com/search?ei=0usGX-rdObbN1fAPluevmAU&q=b+oil&oq=b+oil&gs_lcp=CgZwc3ktYWIQAzIFCAAQkQIyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgQIABAKMgIIADoECAAQQzoHCAAQsQMQQzoICAAQsQMQgwE6BQgAELEDUOfaAliL5QJghugCaABwAHgAgAFtiAHTA5IBAzQuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjqjo7f9b_qAhW2ZhUIHZbzC1MQ4dUDCAw&uact=5/search?source=hp&ei=https://www.google.com/search?q=Hyaluronic+Acid+2%25+%2B+B5&oq=Hyaluronic+Acid+2%25++%2B+B5&aqs=chrome..69i57j0l7.364j1j7&sourceid=chrome&ie=UTF-8-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"

        
    },

    {
        name: "Natural Moisturizing Factors + HA",
        description: "Protecting and hydrating the skin’s outer layer, offering immediate and long-lasting relief.",
        image: "https://theordinary.deciem.com/images/products/rdn-natural-moisturizing-factors-ha-100ml.png?ver=17",
        link: "https://www.google.com/search?ei=AuwGX9-zHt-c1fAP6aajiAY&q=natural+moisturizing+factors+%2B+ha&oq=natural+moisturi&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoICAAQsQMQgwE6BQgAELEDOgQIABBDOgUIABCRAjoHCAAQsQMQQ1DM3gFY9vEBYK_4AWgBcAB4AIABnwGIAekMkgEEMTEuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab"

    },

    {
        name: "100% Plant-Derived Squalane",
        description: "A natural hydrator. Suitable for all skin types, 100% Plant-Derived Squalane softens and smooths dry skin. Applied daily to the face, skin is instantly hydrated",
        image: "https://theordinary.deciem.com/images/products/rdn-100pct-plant-derived-squalane-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=I-wGX464JOmo1fAP7tmSsAI&q=100%25+Plant-Derived+Squalane&oq=100%25+Plant-Derived+Squalane&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQ_aUCWP2lAmCuqAJoAHAAeACAAWuIAWuSAQMwLjGYAQCgAQKgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjO1ciF9r_qAhVpVBUIHe6sBCYQ4dUDCAw&uact=5"

    },

    {
        name: "100% Organic Cold-Pressed Moroccan Argan Oil",
        description: " This oil is rich in fatty acids and vitamins that work to hydrate and support healthy skin and hair.",
        image: "https://theordinary.deciem.com/images/products/rdn-100pct-organic-cold-pressed-moroccan-argan-oil-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=DPYGX8vZGL-q1fAPpLuuoAw&q=the+ordinary+100%25+Organic+Cold-Pressed+Moroccan+Argan+Oil&oq=the+ordinary+100%25+Organic+Cold-Pressed+Moroccan+Argan+Oil&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIECAAQHjIECAAQHjIECAAQHjIGCAAQBxAeMgQIABAeMgQIABAeOgQIABBHOgQIABANOgQIABAKUOoMWJIgYJAhaAJwAXgAgAFviAH4CJIBBDEyLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjLj5u__7_qAhU_VRUIHaSdC8QQ4dUDCAw&uact=5"

    }



];

hydratedStepThree = () => {

    let randomProduct = StepThreeHydrated[Math.floor(Math.random() * StepThreeHydrated.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    shopBagThree.setAttribute("href", randomProduct.link);
    
    }
    


/* END OF HYDRATED PRODUCTS*/











/* YOUTHFUL PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneYouthful = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, this peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17",
        link: "https://www.google.com/search?source=hp&ei=wOoGX-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"
    },

    {
        name: "Glycolic Acid 7% Toning Solution",
        description: "A gentle exfoliating toner to brighten and refine skin texture. Promoting radiance and Gradually improving skin texture.",
        image: "https://theordinary.deciem.com/images/products/rdn-glycolic-acid-7pct-toning-solution-240ml.png?ver=17",
        link: "https://www.google.com/search?ei=tuwGX9OHJpqk1fAP7-CsoAU&q=+the+ordinary+glycolic+acid+toning+solution&oq=+the+ordinary+glycolic+acid+toning+solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BggAEAcQHjoECAAQDVCgCFj0EWD4EmgAcAB4AIABswKIAe0QkgEHNC42LjMuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjTutbL9r_qAhUaUhUIHW8wC1QQ4dUDCAw&uact=5"

    },

    


];

youthfulStepOne = () => {

    let randomProduct = StepOneYouthful[Math.floor(Math.random() * StepOneYouthful.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    shopBagOne.setAttribute("href", randomProduct.link);
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoYouthful = [

   {
        name: "Buffet Serum",
        description: "A multi-technology peptide serum to target multiple signs of ageing. Combining a number of highly concentrated peptides together with amino and hyaluronic acids for a powerful all-in-one anti-aging treatment",
        image: "https://theordinary.deciem.com/images/products/rdn-buffet-60ml.png?ver=17",
        link: "https://www.google.com/search?ei=uuwGX5rNGtSh1fAPvfSKqAs&q=the+ordianry+buffet+serum&oq=the+ordianry+buffet+serum&gs_lcp=CgZwc3ktYWIQAzIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDToECAAQQzoHCAAQsQMQQzoFCAAQsQM6CAgAELEDEIMBOgIIADoECAAQCjoGCAAQFhAeUIKHBVjjngVgtZ8FaABwAHgAgAGKAYgBnRKSAQUxNC4xMJgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiakr_N9r_qAhXUUBUIHT26ArUQ4dUDCAw&uact=5"

        
    },

    {
        name: "Agireline Solution 10%",
        description: "A water based serum to prevents wrinkle formation. This Solution reduces the appearance of wrinkles by preventing skin from folding.",
        image: "https://theordinary.deciem.com/images/products/rdn-argireline-solution-10pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=Ee0GX6XaJvCd1fAP6s2gqA8&q=the+ordinary+argireline+solution+10&oq=the+ordinary+argil&gs_lcp=CgZwc3ktYWIQAxgAMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKOgUIABCRAjoECAAQQzoICAAQsQMQgwE6BQgAELEDOgcIABCxAxBDOggIABCxAxCRAjoCCABQrN4BWNnsAWCf9AFoAHAAeACAAXGIAfwMkgEEMTIuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab"

    },

    {
        name: "Hyaluronic Acid 2%  + B5",
        description: "A lightweight serum to rehydrate skin on a multi-depth level. Working with Vitamin B5 to offer lasting hydration and visible plumping of the skin.",
        image: "https://theordinary.deciem.com/images/products/rdn-hyaluronic-acid-2pct-b5-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=Mu0GX7zpBJmW1fAPh6yXmAs&q=hyaluronic+acid+b5+the+ordinary&oq=hyaluronic+acid+b5+&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeOgQIABBDOggIABCxAxCDAToHCAAQsQMQQzoFCAAQsQM6CAgAELEDEJECOgUIABCRAlCCpAFYmbQBYIe7AWgAcAB4AIABeogB7gySAQQxNS40mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab"

    }



];

youthfulStepTwo = () => {

let randomProduct = StepTwoYouthful[Math.floor(Math.random() * StepTwoYouthful.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;
shopBagTwo.setAttribute("href", randomProduct.link);


}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc"); 
var stepThreeImg = document.getElementById("stepThreeImg"); 

const StepThreeYouthful = [

    {
        name: "‘B’ OIL",
        description: "Smoothing and brightening the skin, “B” Oil is a purified form of micro-algae in a blend of squalene and nourishing oils. Working to deliver a healthier, more radiant complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-b-oil-30ml.png?ver=17",
        link: "https://www.google.https://www.google.com/search?ei=0usGX-rdObbN1fAPluevmAU&q=b+oil&oq=b+oil&gs_lcp=CgZwc3ktYWIQAzIFCAAQkQIyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgQIABAKMgIIADoECAAQQzoHCAAQsQMQQzoICAAQsQMQgwE6BQgAELEDUOfaAliL5QJghugCaABwAHgAgAFtiAHTA5IBAzQuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjqjo7f9b_qAhW2ZhUIHZbzC1MQ4dUDCAw&uact=5/search?source=hp&ei=https://www.google.com/search?q=Hyaluronic+Acid+2%25+%2B+B5&oq=Hyaluronic+Acid+2%25++%2B+B5&aqs=chrome..69i57j0l7.364j1j7&sourceid=chrome&ie=UTF-8-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"
    },

    {
        
        name: "Natural Moisturizing Factors + HA",
        description: "Protecting and hydrating the skin’s outer layer, offering immediate and long-lasting relief.",
        image: "https://theordinary.deciem.com/images/products/rdn-natural-moisturizing-factors-ha-100ml.png?ver=17",
        link: "https://www.google.com/search?ei=AuwGX9-zHt-c1fAP6aajiAY&q=natural+moisturizing+factors+%2B+ha&oq=natural+moisturi&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoICAAQsQMQgwE6BQgAELEDOgQIABBDOgUIABCRAjoHCAAQsQMQQ1DM3gFY9vEBYK_4AWgBcAB4AIABnwGIAekMkgEEMTEuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab"
    },



];

youthfulStepThree = () => {

    let randomProduct = StepThreeYouthful[Math.floor(Math.random() * StepThreeYouthful.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    shopBagThree.setAttribute("href", randomProduct.link);
    
    }
    


/* END OF YOUTHFUL PRODUCTS*/



/* START OF HYPERPIG PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneHyperpig = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, this peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17",
        link: "https://www.google.com/search?source=hp&ei=wOoGX-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"
    }


];

hyperpigStepOne = () => {

    let randomProduct = StepOneHyperpig[Math.floor(Math.random() * StepOneHyperpig.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    shopBagOne.setAttribute("href", randomProduct.link);
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoHyperpig = [

    {
        name: "Glycolic Acid 7% Toning Solution",
        description: "A gentle exfoliating toner to brighten and refine skin texture. Promoting radiance and Gradually improving skin texture.",
        image: "https://theordinary.deciem.com/images/products/rdn-glycolic-acid-7pct-toning-solution-240ml.png?ver=17",
        link: "https://www.google.com/search?ei=tuwGX9OHJpqk1fAP7-CsoAU&q=+the+ordinary+glycolic+acid+toning+solution&oq=+the+ordinary+glycolic+acid+toning+solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BggAEAcQHjoECAAQDVCgCFj0EWD4EmgAcAB4AIABswKIAe0QkgEHNC42LjMuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjTutbL9r_qAhUaUhUIHW8wC1QQ4dUDCAw&uact=5"
    },

    {
        name: "Niacinamide 10% + Zinc 1% ", 
        description: "A light serum to combat blemishes, congestions and sebum over-production. This serum also works to reduce future breakouts.",
        image: "https://theordinary.deciem.com/images/products/rdn-niacinamide-10pct-zinc-1pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=LO4GX-do4cnGA7CstJgC&q=niacinamide+10+%2B+zinc+1+the+ordinary&oq=niacinamide+10%25+the+ordinary&gs_lcp=CgZwc3ktYWIQAxgAMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BAgAEEc6CAgAELEDEIMBOgQIABBDOgIIAFDDDVjrEWCDHGgAcAF4AIABVogBrwKSAQE0mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab"
    },

    {
        name: "Alpha Arbutin 2% + HA", 
        description: "A high-potency gel-like serum which visibly targets hyper-pigmentation and dark spots. ",
        image: "https://theordinary.deciem.com/images/products/rdn-alpha-arbutin-2pct-ha-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=b-4GX8X4IdCf1fAP4JSI2Ac&q=the+ordinary+alpha+arbutin+2+%2B+ha&oq=the+ordinary+alpha+arbutin+2+%2B+ha&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEAcQHjoICAAQBxAKEB46BAgAEA1QxwtYpB1goh5oAnABeACAAXWIAdYMkgEEMTEuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiF7Pad-L_qAhXQTxUIHWAKAnsQ4dUDCAw&uact=5"
    },

    




];

hyperpigStepTwo = () => {

let randomProduct = StepTwoHyperpig[Math.floor(Math.random() * StepTwoHyperpig.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;
shopBagTwo.setAttribute("href", randomProduct.link);



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc");
var stepThreeImg = document.getElementById("stepThreeImg");


const StepThreeHyperpig = [

    {
        name: "Magnesium Ascorbyl Phosphate 10%",
        description: "A light cream designed to target dullness, uneven tone and signs of skin ageing.",
        image: "https://theordinary.deciem.com/images/products/rdn-magnesium-ascorbyl-phosphate-10pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=qe4GX7jWF4WE1fAP6cqOkAk&q=the+ordinary+Magnesium+Ascorbyl+Phosphate+10%25&oq=the+ordinary+Magnesium+Ascorbyl+Phosphate+10%25&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIGCAAQBxAeMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgQIABANUM0RWOMZYNAaaABwAXgAgAF0iAHiCZIBAzguNZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwj4zsC5-L_qAhUFQhUIHWmlA5IQ4dUDCAw&uact=5"
    },

    {
        name: "Azelaic Acid Suspension 10%",
        description: "A lightweight cream-gel, formulated to target dull, marked skin. Dullness, uneven skin tone, acne scars, and lingering blemish marks.",
        image: "https://theordinary.deciem.com/images/products/rdn-azelaic-acid-suspension-10pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=yu4GX7GdN-XuxgOpoI2wDQ&q=the+ordinary+Azelaic+Acid+Suspension+10%25&oq=the+ordinary+Azelaic+Acid+Suspension+10%25&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEAcQHjoECAAQDVCmElj-G2D1HGgAcAJ4AIABZYgBkwmSAQQxMS4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwixqr7J-L_qAhVlt3EKHSlQA9YQ4dUDCAw&uact=5"

    },



];

hyperpigStepThree = () => {

    let randomProduct = StepThreeHyperpig[Math.floor(Math.random() * StepThreeHyperpig.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    shopBagThree.setAttribute("href", randomProduct.link);
    
    }
    


/* END OF HYPERPIG PRODUCTS*/










/* START OF ACNE PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneAcne = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, this peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17",
        link: "https://www.google.com/search?source=hp&ei=wOoGX-GyCY2D1fAP--yR4A8&q=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&oq=AHA+30%25+%2B+BHA+2%25+Peeling+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgUIABCxAzoICAAQ6gIQjwFQmgFY_BxgjSJoDnAAeACAAVKIAcMIkgECMTWYAQCgAQGgAQKqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjhkorc9L_qAhWNQRUIHXt2BPwQ4dUDCAk&uact=5"
    },

    {
        name: "Salicylic Acid 2% Masque",
        description: "A charcoal infused face mask. Formulated to target lacklustre tone and textural irregularities and also enhance the appearance of smoothness and clarity.",
        image: "https://theordinary.deciem.com/images/products/rdn-salicylic-acid-2pct-masque-50ml.png?ver=17",
        link: "https://www.google.com/search?ei=9e4GX7neM5S71fAPx7qF2AE&q=the+ordinary+Salicylic+Acid+2%25+Masque&oq=the+ordinary+Salicylic+Acid+2%25+Masque&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEAcQHjoECAAQDVDt1AFYiN8BYJ3iAWgAcAF4AIABiAGIAd4JkgEDOS40mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwj5rPvd-L_qAhWUXRUIHUddARsQ4dUDCAw&uact=5"

    }



];

acneStepOne = () => {

    let randomProduct = StepOneAcne[Math.floor(Math.random() * StepOneAcne.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    shopBagOne.setAttribute("href", randomProduct.link);
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoAcne = [

    {
        name: "Glycolic Acid 7% Toning Solution",
        description: "A gentle exfoliating toner to brighten and refine skin texture. Promoting radiance and Gradually improving skin texture.",
        image: "https://theordinary.deciem.com/images/products/rdn-glycolic-acid-7pct-toning-solution-240ml.png?ver=17",
        link: "https://www.google.com/search?ei=tuwGX9OHJpqk1fAP7-CsoAU&q=+the+ordinary+glycolic+acid+toning+solution&oq=+the+ordinary+glycolic+acid+toning+solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BggAEAcQHjoECAAQDVCgCFj0EWD4EmgAcAB4AIABswKIAe0QkgEHNC42LjMuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjTutbL9r_qAhUaUhUIHW8wC1QQ4dUDCAw&uact=5"
    },

    {
       
        name: "Niacinamide 10% + Zinc 1% ", 
        description: "A light serum to combat blemishes, congestions and sebum over-production. This serum also works to reduce future breakouts.",
        image: "https://theordinary.deciem.com/images/products/rdn-niacinamide-10pct-zinc-1pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=LO4GX-do4cnGA7CstJgC&q=niacinamide+10+%2B+zinc+1+the+ordinary&oq=niacinamide+10%25+the+ordinary&gs_lcp=CgZwc3ktYWIQAxgAMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BAgAEEc6CAgAELEDEIMBOgQIABBDOgIIAFDDDVjrEWCDHGgAcAF4AIABVogBrwKSAQE0mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab"
    },

    {
        name: "Salicylic Acid 2% Solution", 
        description: "A powerful treatment that combats the appearance of blemishes for a clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-salicylic-acid-2pct-solution-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=E-8GX5LHLumO1fAPyq6MmA0&q=the+ordinary+Salicylic+Acid+2%25+Solution&oq=the+ordinary+Salicylic+Acid+2%25+Solution&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgYIABAHEB4yAggAMgIIADICCAAyAggAOgQIABBDOgQIABANUKXyBVi7lwZgmpgGaANwAHgAgAGEAYgBpQ2SAQQxNS40mAEAoAECoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjSnJ3s-L_qAhVpRxUIHUoXA9MQ4dUDCAw&uact=5"

    },

    



];

acneStepTwo = () => {

let randomProduct = StepTwoAcne[Math.floor(Math.random() * StepTwoAcne.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;
shopBagTwo.setAttribute("href", randomProduct.link);



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc");
var stepThreeImg = document.getElementById("stepThreeImg");


const StepThreeAcne = [

    {
        name: "Natural Moisturizing Factors + HA",
        description: "Protecting and hydrating the skin’s outer layer, offering immediate and long-lasting relief.",
        image: "https://theordinary.deciem.com/images/products/rdn-natural-moisturizing-factors-ha-100ml.png?ver=17",
        link: "https://www.google.com/search?ei=AuwGX9-zHt-c1fAP6aajiAY&q=natural+moisturizing+factors+%2B+ha&oq=natural+moisturi&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoICAAQsQMQgwE6BQgAELEDOgQIABBDOgUIABCRAjoHCAAQsQMQQ1DM3gFY9vEBYK_4AWgBcAB4AIABnwGIAekMkgEEMTEuNpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab"
    },

    {
        name: "Magnesium Ascorbyl Phosphate 10%",
        description: "A light cream designed to target dullness, uneven tone and signs of skin ageing.",
        image: "https://theordinary.deciem.com/images/products/rdn-magnesium-ascorbyl-phosphate-10pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=qe4GX7jWF4WE1fAP6cqOkAk&q=the+ordinary+Magnesium+Ascorbyl+Phosphate+10%25&oq=the+ordinary+Magnesium+Ascorbyl+Phosphate+10%25&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIGCAAQBxAeMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgQIABANUM0RWOMZYNAaaABwAXgAgAF0iAHiCZIBAzguNZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwj4zsC5-L_qAhUFQhUIHWmlA5IQ4dUDCAw&uact=5"
    },

    {
        name: "Azelaic Acid Suspension 10%",
        description: "A lightweight cream-gel, formulated to target dull, marked skin. Dullness, uneven skin tone, acne scars, and lingering blemish marks.",
        image: "https://theordinary.deciem.com/images/products/rdn-azelaic-acid-suspension-10pct-30ml.png?ver=17",
        link: "https://www.google.com/search?ei=yu4GX7GdN-XuxgOpoI2wDQ&q=the+ordinary+Azelaic+Acid+Suspension+10%25&oq=the+ordinary+Azelaic+Acid+Suspension+10%25&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEAcQHjoECAAQDVCmElj-G2D1HGgAcAJ4AIABZYgBkwmSAQQxMS4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwixqr7J-L_qAhVlt3EKHSlQA9YQ4dUDCAw&uact=5"
    },



];

acneStepThree = () => {

    let randomProduct = StepThreeAcne[Math.floor(Math.random() * StepThreeAcne.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    shopBagThree.setAttribute("href", randomProduct.link);
    
    }
    


/* END OF ACNE PRODUCTS*/




// Get a reference to an element.

// Create an instance of Hammer with the reference.
var hammer = new Hammer(stepOne);

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('swipeleft', function(e) {
    e.target.classList.toggle('expand');
  
    stepTwo.style.opacity = "0";
    stepTwo.style.transform = "translate(100%)"

    stepTwo.style.display = "flex";
  
    setTimeout(() => {
  
      stepTwo.style.transform = "translateX(0%)";
      stepTwo.style.opacity = "1";
  
      stepTwoButton.classList.add("buttonActive");
  }, 50);
    
      stepOne.style.display = "none";

      stepOneButton.classList.remove("buttonActive");
  
});


var hammer = new Hammer(stepTwo);

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('swipeleft', function(e) {
  e.target.classList.toggle('expand');


  stepThree.style.opacity = "0";
  stepThree.style.transform = "translate(100%)"

  stepThree.style.display = "flex";

  setTimeout(() => {

    stepThree.style.transform = "translateX(0%)";
    stepThree.style.opacity = "1";


    stepThreeButton.classList.add("buttonActive");
}, 50);

stepTwoButton.classList.remove("buttonActive");
  
    stepTwo.style.display = "none";





});

var hammer = new Hammer(stepTwo);

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('swiperight', function(e) {
  
    stepOne.style.opacity = "0";
    stepOne.style.transform = "translate(-100%)"

    stepOne.style.display = "flex";
  
    setTimeout(() => {
  
      stepOne.style.transform = "translateX(0%)";
      stepOne.style.opacity = "1";
  
     
      stepOneButton.classList.add("buttonActive");
  }, 50);

  stepTwoButton.classList.remove("buttonActive");
    
      stepTwo.style.display = "none";


    


});





var hammer = new Hammer(stepThree);

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('swiperight', function(e) {
    e.target.classList.toggle('expand');
  
  
    stepTwo.style.opacity = "0";
    stepTwo.style.transform = "translate(-100%)"
  
    stepTwo.style.display = "flex";
  
    setTimeout(() => {
  
      stepTwo.style.transform = "translateX(0%)";
      stepTwo.style.opacity = "1";
  
      
      stepTwoButton.classList.add("buttonActive");
  }, 50);

  stepThreeButton.classList.remove("buttonActive");
    
      stepThree.style.display = "none";
  



});














































}
