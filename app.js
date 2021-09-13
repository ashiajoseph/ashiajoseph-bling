
let root = document.querySelector("#root");
document.body.style.fontFamily= "Montserrat"
let bgcolor= "white"
// Functions
const createRelation = (parent, child, styling= child.style.cssText) => {
    child.style.cssText = styling;
    parent.appendChild(child);
}

const createImgButton = (text,link="") => {
    let btn= document.createElement("button");
    btn.textContent= text;
    btn.setAttribute('name',text)
    btn.style.cssText = "border: 1.5px solid black; padding: 7px 10px; border-radius: 5px; background-color: transparent; margin-right: 12px";
    btn.classList.add("bgCheck")
    btn.addEventListener("click",changeImg)
    btn.addEventListener("click",changeButtonStyle)
    return btn
}
// Event Handlers
const changeText = (e) => { 
    right_h1.textContent= e.target.value;
    console.log(e.target.value)
}

const imglinks= { 
  "Polaroid" : "assets/images/polaroid.png",
  "TV" : "assets/images/tv.png",
  "Traitor": "assets/images/among-us.png",
  "Fall Guy": "assets/images/fall-guy-01.png",
  "Radio" : "assets/images/radio-02.png"
}
const changeImg = (e) => {
     
    e.target.style.backgroundColor = e.target.style.backgroundColor === "black" ? "white" : "black";

    let bg = e.target.style.backgroundColor;

    if(bg=="black")
    {   e.target.style.color = "white"
        right_div_img.setAttribute("src",imglinks[e.target.name]);
        right_div_img.style.cssText= "max-width: 30%; padding: 40px 10px"
    }
    else
    {   
        e.target.style.color = "black";
        right_div_img.removeAttribute("src");
        right_div_img.style.cssText= "display: none";   
    }
    
    
    console.log(Object.keys(imglinks))
  
}

const changeButtonStyle = (e) => {
  let allImgButtons = document.getElementsByClassName("bgCheck")   
  for(let btn of allImgButtons )
    {   if(btn.name!= e.target.name)
        {
            btn.style.backgroundColor = "white";
            btn.style.color = "black"; 
        }       
    }
}

// Bling Title 
let title= document.createElement("h3");
title.textContent= "BLING!";

// Section 
let section= document.createElement("section");
let left= document.createElement("div");
let right= document.createElement("div");

createRelation(section,left,"flex-basis: 40%;display: flex; flex-direction: column")
createRelation(section,right,"display: flex; flex-direction: column; flex-basis: 35%; text-align: center")

/*  Section - Left */
let left_h2 = document.createElement("h2")
left_h2.textContent = "Sizzle your Life"
let left_h1 = document.createElement("h1")
left_h1.textContent = "Make a Card"

createRelation(left,left_h2,"font-size: 1.5em; font-weight: lighter")
createRelation(left,left_h1,"font-size: 2.5em; font-weight: 600; word-spacing: 0.2em")

// Section - left - image choice
let img_choice= document.createElement("div");
let polaroid= createImgButton("Polaroid")
let tv= createImgButton("TV")
let traitor= createImgButton("Traitor")
let fallguy= createImgButton("Fall Guy")
let radio= createImgButton("Radio")

createRelation(img_choice,polaroid);
createRelation(img_choice,tv);
createRelation(img_choice,traitor);
createRelation(img_choice,fallguy);
createRelation(img_choice,radio);
createRelation(left,img_choice,"display: flex; ")

// Section - left - user choice
let user_choice= document.createElement("div");
let bling_name= document.createElement("input");
bling_name.setAttribute("type","text")
bling_name.setAttribute("placeholder","Name your Bling!")
bling_name.addEventListener("input",changeText)

let bling_color= document.createElement("select");

let bling_radio= document.createElement("div");
let radio_blob= document.createElement("input");
radio_blob.setAttribute("type","radio")
radio_blob.setAttribute("name","radio_blob")
radio_blob.setAttribute("value","blob")
let radio_blob_label= document.createElement("label");
radio_blob_label.textContent= "Blob";

let radio_nope= document.createElement("input"); 
radio_nope.setAttribute("type","radio");
radio_nope.setAttribute("name","radio_blob");
radio_nope.setAttribute("value","nope")
let radio_nope_label= document.createElement("label");
radio_nope_label.textContent= "Nope"

createRelation(bling_radio,radio_blob,"")
createRelation(bling_radio,radio_blob_label,"")
createRelation(bling_radio,radio_nope,"")
createRelation(bling_radio,radio_nope_label,"")

createRelation(user_choice,bling_name,"")
createRelation(user_choice,bling_color,"")
createRelation(user_choice,bling_radio,"")

createRelation(left,user_choice,"display: flex")


// Section - left - capture
let capture_div = document.createElement("div");
let capture_img = document.createElement("img");
capture_img.setAttribute("src","assets/images/camera.png");

createRelation(capture_div,capture_img,"")
createRelation(left,capture_div,"")

/*  Section - Right */
let right_h1= document.createElement("h1")
right_h1.textContent= "Stuff"
let right_div= document.createElement("div")
let right_div_img= document.createElement("img")


createRelation(right_div,right_div_img);
createRelation(right, right_h1,"font-size: 3.5em; font-weight: 800 ");
createRelation(right,right_div,"display: flex; flex-direction: column; align-items:center; justify-content: center");

// Appending to root

createRelation(root,title,"text-align:center; margin-top: 20px; font-weight: 700; font-size: 1.3em")
createRelation(root,section,"display: flex; justify-content: space-evenly; margin: 50px auto")



