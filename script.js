window.onload = () => {

    /* var intro = document.getElementById("intro")

    var i = 0;
    var txt = 'Developed By Emmanuel'; 
    var speed = 100; 
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("intro-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    
      setTimeout(() => {
        secondFunction();
      },3000);
    
    }

    typeWriter();


    setTimeout(() => {
        intro.style.display = "none";
    }, 4000);  */


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


stepOneButton.onclick = () =>{
 
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



/* END OF SHOW RESULTS*/



/* HYDRATED PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneHydrated = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, AHA 30% + BHA 2% Peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17"
    },


];

hydratedStepOne = () => {

    let randomProduct = StepOneHydrated[Math.floor(Math.random() * StepOneHydrated.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoHydrated = [

   {
        name: "Hyaluronic Acid 2%  + B5",
        description: "A lightweight serum to rehydrate skin on a multi-depth level. This ultra-pure serum combines 3 types of hyaluronic acid with Vitamin B5 to offer lasting hydration and visible plumping of the skin.",
        image: "https://theordinary.deciem.com/images/products/rdn-hyaluronic-acid-2pct-b5-30ml.png?ver=17"
    },


];

hydratedStepTwo = () => {

let randomProduct = StepTwoHydrated[Math.floor(Math.random() * StepTwoHydrated.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc");
var stepThreeImg = document.getElementById("stepThreeImg");


const StepThreeHydrated = [

    {
        name: "‘B’ OIL",
        description: "Smoothing and brightening the skin, “B” Oil is a purified form of micro-algae in a blend of squalene and nourishing oils. Working to deliver a healthier, more radiant complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-b-oil-30ml.png?ver=17"
    },

    {
        name: "The Ordinary Natural Moisturizing Factors + HA",
        description: "Protecting and hydrating the skin’s outer layer, Natural Moisturizing Factors + HA is made up of compounds found naturally in the skin. Offering immediate and long-lasting relief.",
        image: "https://theordinary.deciem.com/images/products/rdn-natural-moisturizing-factors-ha-100ml.png?ver=17"
    },

    {
        name: "100% Plant-Derived Squalane",
        description: "A natural hydrator. Suitable for all skin types, 100% Plant-Derived Squalane softens and smooths dry skin. Applied daily to the face, skin is instantly hydrated",
        image: "https://theordinary.deciem.com/images/products/rdn-100pct-plant-derived-squalane-30ml.png?ver=17"
    },

    {
        name: "100% Organic Cold-Pressed Moroccan Argan Oil",
        description: "A pure blend of moisture-rich argan oil. This oil is rich in fatty acids and vitamins that work to support healthy hair, tame frizz, and hydrate and support healthy skin and hair.",
        image: "https://theordinary.deciem.com/images/products/rdn-100pct-organic-cold-pressed-moroccan-argan-oil-30ml.png?ver=17"
    }



];

hydratedStepThree = () => {

    let randomProduct = StepThreeHydrated[Math.floor(Math.random() * StepThreeHydrated.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    
    }
    


/* END OF HYDRATED PRODUCTS*/











/* YOUTHFUL PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneYouthful = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, AHA 30% + BHA 2% Peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17"
    },

    {
        name: "The Ordinary Glycolic Acid 7% Toning Solution",
        description: "A gentle exfoliating toner to brighten and refine skin texture.Promoting radiance, Glycolic Acid 7% Toning Solution is a daily use treatment. Gradually improving skin texture, use once a day after cleansing to brighten and tone.",
        image: "https://theordinary.deciem.com/images/products/rdn-glycolic-acid-7pct-toning-solution-240ml.png?ver=17"
    },

    


];

youthfulStepOne = () => {

    let randomProduct = StepOneYouthful[Math.floor(Math.random() * StepOneYouthful.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoYouthful = [

   {
        name: "Buffet Serum",
        description: "A multi-technology peptide serum to target multiple signs of ageing. Combining a number of highly concentrated peptides together with amino and hyaluronic acids for a powerful all-in-one anti-aging treatment",
        image: "https://theordinary.deciem.com/images/products/rdn-buffet-60ml.png?ver=17"
    },

    {
        name: "Agireline Solution 10%",
        description: "A water based serum to prevent the muscle movement that leads to wrinkle formation. Argireline Solution 10% reduces the appearance of wrinkles by preventing skin from folding.",
        image: "https://theordinary.deciem.com/images/products/rdn-argireline-solution-10pct-30ml.png?ver=17"
    },

    {
        name: "Hyaluronic Acid 2%  + B5",
        description: "A lightweight serum to rehydrate skin on a multi-depth level. This ultra-pure serum combines 3 types of hyaluronic acid with Vitamin B5 to offer lasting hydration and visible plumping of the skin.",
        image: "https://theordinary.deciem.com/images/products/rdn-hyaluronic-acid-2pct-b5-30ml.png?ver=17"
    }



];

youthfulStepTwo = () => {

let randomProduct = StepTwoYouthful[Math.floor(Math.random() * StepTwoYouthful.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc"); 
var stepThreeImg = document.getElementById("stepThreeImg"); 

const StepThreeYouthful = [

    {
        name: "‘B’ OIL",
        description: "Smoothing and brightening the skin, “B” Oil is a purified form of micro-algae in a blend of squalene and nourishing oils. Working to deliver a healthier, more radiant complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-b-oil-30ml.png?ver=17"
    },

    {
        name: "The Ordinary Natural Moisturizing Factors + HA",
        description: "Protecting and hydrating the skin’s outer layer, Natural Moisturizing Factors + HA is made up of compounds found naturally in the skin. Offering immediate and long-lasting relief.",
        image: "https://theordinary.deciem.com/images/products/rdn-natural-moisturizing-factors-ha-100ml.png?ver=17"
    },



];

youthfulStepThree = () => {

    let randomProduct = StepThreeYouthful[Math.floor(Math.random() * StepThreeYouthful.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    
    }
    


/* END OF YOUTHFUL PRODUCTS*/



/* START OF HYPERPIG PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneHyperpig = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, AHA 30% + BHA 2% Peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17"
    }


];

hyperpigStepOne = () => {

    let randomProduct = StepOneHyperpig[Math.floor(Math.random() * StepOneHyperpig.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoHyperpig = [

    {
        name: "The Ordinary Glycolic Acid 7% Toning Solution",
        description: "A gentle exfoliating toner to brighten and refine skin texture.Promoting radiance, Glycolic Acid 7% Toning Solution is a daily use treatment. Gradually improving skin texture, use once a day after cleansing to brighten and tone.",
        image: "https://theordinary.deciem.com/images/products/rdn-glycolic-acid-7pct-toning-solution-240ml.png?ver=17"
    },

    {
        name: "The Ordinary Niacinamide 10% + Zinc 1% ", 
        description: "A serum to combat blemishes, congestions and sebum over-production. this light, fluid serum works to reduce both future breakouts and the appearance of existing blemishes.",
        image: "https://theordinary.deciem.com/images/products/rdn-niacinamide-10pct-zinc-1pct-30ml.png?ver=17"
    },

    {
        name: "The Ordinary. Alpha Arbutin 2% + HA", 
        description: "A high-potency gel-like serum which visibly targets hyper-pigmentation and dark spots. Formulated at a notably high-concentration and supported by a potent dose of hyaluronic acid (to efficiently deliver ingredients deep into skin),",
        image: "https://theordinary.deciem.com/images/products/rdn-alpha-arbutin-2pct-ha-30ml.png?ver=17"
    },

    




];

hyperpigStepTwo = () => {

let randomProduct = StepTwoHyperpig[Math.floor(Math.random() * StepTwoHyperpig.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc");
var stepThreeImg = document.getElementById("stepThreeImg");


const StepThreeHyperpig = [

    {
        name: "Magnesium Ascorbyl Phosphate 10%",
        description: "A light cream designed to target dullness, uneven tone and signs of skin ageing.",
        image: "https://theordinary.deciem.com/images/products/rdn-magnesium-ascorbyl-phosphate-10pct-30ml.png?ver=17"
    },

    {
        name: "Azelaic Acid Suspension 10%",
        description: "A lightweight cream-gel, formulated to target dull, marked skin. Dullness, uneven skin tone, acne scars, and lingering blemish marks are targeted by this high (10%) concentration of high-purity Azelaic Acid.",
        image: "https://theordinary.deciem.com/images/products/rdn-azelaic-acid-suspension-10pct-30ml.png?ver=17"
    },



];

hyperpigStepThree = () => {

    let randomProduct = StepThreeHyperpig[Math.floor(Math.random() * StepThreeHyperpig.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    
    }
    


/* END OF HYPERPIG PRODUCTS*/










/* START OF ACNE PRODUCTS */

var stepOneTitle = document.getElementById("stepOneTitle");
var stepOneDesc = document.getElementById("stepOneDesc");
var stepOneImg = document.getElementById("stepOneImg");


const StepOneAcne = [

    {
        name: "AHA 30% + BHA 2% Peeling Solution",
        description: "An exfoliating peel. Treating the top layer of skin, AHA 30% + BHA 2% Peeling Solution exfoliates for a brighter and clearer complexion.",
        image: "https://theordinary.deciem.com/images/products/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?ver=17"
    },

    {
        name: "The Ordinary Salicylic Acid 2% Masque",
        description: "A charcoal infused face mask. Formulated to target lacklustre tone and textural irregularities, Salicylic Acid 2% Masque is infused with charcoal and clays enhance the appearance of smoothness and clarity.",
        image: "https://theordinary.deciem.com/images/products/rdn-salicylic-acid-2pct-masque-50ml.png?ver=17"
    }



];

acneStepOne = () => {

    let randomProduct = StepOneAcne[Math.floor(Math.random() * StepOneAcne.length)]; /* Gets a random verse object */
    
    stepOneTitle.innerHTML = randomProduct.name;
    stepOneDesc.innerHTML = randomProduct.description;
    stepOneImg.src = randomProduct.image;
    
    }




var stepTwoTitle = document.getElementById("stepTwoTitle");
var stepTwoDesc = document.getElementById("stepTwoDesc");
var stepTwoImg = document.getElementById("stepTwoImg");


const StepTwoAcne = [

    {
        name: "The Ordinary Glycolic Acid 7% Toning Solution",
        description: "A gentle exfoliating toner to brighten and refine skin texture.Promoting radiance, Glycolic Acid 7% Toning Solution is a daily use treatment. Gradually improving skin texture, use once a day after cleansing to brighten and tone.",
        image: "https://theordinary.deciem.com/images/products/rdn-glycolic-acid-7pct-toning-solution-240ml.png?ver=17"
    },

    {
        name: "The Ordinary Niacinamide 10% + Zinc 1% ", 
        description: "A serum to combat blemishes, congestions and sebum over-production. this light, fluid serum works to reduce both future breakouts and the appearance of existing blemishes.",
        image: "https://theordinary.deciem.com/images/products/rdn-niacinamide-10pct-zinc-1pct-30ml.png?ver=17"
    },

    {
        name: "Salicylic Acid 2% Solution", 
        description: "A powerful, concentrated treatment that combats the appearance of blemishes for a visibly clearer complexion. Ideal for oily and congested skin, the fluid, pH balanced formula sweeps across skin to exfoliate the interior wall of cells for superior unclogging,",
        image: "https://theordinary.deciem.com/images/products/rdn-salicylic-acid-2pct-solution-30ml.png?ver=17"
    },

    



];

acneStepTwo = () => {

let randomProduct = StepTwoAcne[Math.floor(Math.random() * StepTwoAcne.length)]; /* Gets a random verse object */

stepTwoTitle.innerHTML = randomProduct.name;
stepTwoDesc.innerHTML = randomProduct.description;
stepTwoImg.src = randomProduct.image;



}


var stepThreeTitle = document.getElementById("stepThreeTitle");
var stepThreeDesc = document.getElementById("stepThreeDesc");
var stepThreeImg = document.getElementById("stepThreeImg");


const StepThreeAcne = [

    {
        name: "The Ordinary Natural Moisturizing Factors + HA",
        description: "Protecting and hydrating the skin’s outer layer, Natural Moisturizing Factors + HA is made up of compounds found naturally in the skin. Offering immediate and long-lasting relief.",
        image: "https://theordinary.deciem.com/images/products/rdn-natural-moisturizing-factors-ha-100ml.png?ver=17"
    },

    {
        name: "Magnesium Ascorbyl Phosphate 10%",
        description: "A light cream designed to target dullness, uneven tone and signs of skin ageing.",
        image: "https://theordinary.deciem.com/images/products/rdn-magnesium-ascorbyl-phosphate-10pct-30ml.png?ver=17"
    },

    {
        name: "Azelaic Acid Suspension 10%",
        description: "A lightweight cream-gel, formulated to target dull, marked skin. Dullness, uneven skin tone, acne scars, and lingering blemish marks are targeted by this high (10%) concentration of high-purity Azelaic Acid.",
        image: "https://theordinary.deciem.com/images/products/rdn-azelaic-acid-suspension-10pct-30ml.png?ver=17"
    },



];

acneStepThree = () => {

    let randomProduct = StepThreeAcne[Math.floor(Math.random() * StepThreeAcne.length)]; /* Gets a random verse object */
    
    stepThreeTitle.innerHTML = randomProduct.name;
    stepThreeDesc.innerHTML = randomProduct.description;
    stepThreeImg.src = randomProduct.image;
    
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
