let root = document.querySelector("#root");
document.body.style.fontFamily= "Montserrat"
document.body.style.backgroundColor= "gold"
let bgcolor= "gold";
let selectedImglink = "", blob_visible = false , heading= false;
let cardsize = "29%"
// Functions
const createRelation = (parent, child, styling= child.style.cssText) => {
    child.style.cssText = styling;
    parent.appendChild(child);
}

const createImgButton = (text,link="") => {
    let btn= document.createElement("button");
    btn.textContent= text;
    btn.setAttribute('name',text)
    btn.style.border= "1.5px solid black"
    btn.style.borderRadius = "5px"
    btn.style.backgroundColor = "transparent"
    btn.style.padding= "8px 12px"
    btn.style.margin= "15px 17px 0px 0px"
    btn.style.boxShadow= "2px 2px 3px #000"
    btn.classList.add("bgCheck")
    btn.addEventListener("click",changeImg)
    btn.addEventListener("click",changeButtonStyle)
    btn.addEventListener("mouseover",cursorChange)
    return btn
}

const addColors = (color) => {
    let opt = document.createElement("option");
    opt.setAttribute("value",color);
    opt.textContent = color;
    bling_color.appendChild(opt);
}

const addFooterLinks = () => {
    for(let linkname of Object.keys(imglinks))
    {  let li= document.createElement("li");
       let a= document.createElement("a");
       a.textContent= linkname;
       a.setAttribute("href","#");
       a.setAttribute("target","_blank");
       li.addEventListener("mouseenter",addStyleOnMouseOver);
       li.addEventListener("mouseleave",removeStyleOnMouseOver);
       createRelation(li,a,"color: black; text-decoration:none")
       createRelation(footer_ul,li,"margin-right: 15px; ")
       
    }
}

// Event Handlers
const changeText = (e) => { 
    heading= true;
    right_h1.style.display = "block"
    right_h1.textContent= e.target.value;
}

const imglinks= { 
  "Polaroid" : "assets/images/polaroid.png",
  "TV" : "assets/images/tv.png",
  "Traitor": "assets/images/among-us.png",
  "Fall Guy": "assets/images/fall-guy-01.png",
  "Radio" : "assets/images/radio-02.png"
}
const changeImg = (e) => {
    heading=true;
    if(right_h1.style.display=="none") right_h1.style.display= "block";
    e.target.style.backgroundColor = e.target.style.backgroundColor === "black" ? "transparent" : "black";

    let bg = e.target.style.backgroundColor;

    if(bg=="black")
    {   e.target.style.color = "white"
        right_div_img.setAttribute("src",imglinks[e.target.name]);
        right_div_img.style.cssText= "width: 31%; z-index: 2"
        selectedImglink = imglinks[e.target.name]
    }
    else
    {   
        e.target.style.color = "black";
        right_div_img.removeAttribute("src");
        right_div_img.style.cssText= "display: none";   
        selectedImglink = ""
    }
  
}

const changeButtonStyle = (e) => {
  let allImgButtons = document.getElementsByClassName("bgCheck")   
  for(let btn of allImgButtons )
    {   
        if(btn.name!= e.target.name)
        {
            btn.style.backgroundColor = "transparent";
            btn.style.color = "black"; 
            btn.style.boxShadow = "2px 2px 3px #000;"
        }       
    }
}



const changeColor = (e) => {
    document.body.style.backgroundColor= e.target.value;
    bgcolor= e.target.value;
}

const changeBlobImg = (e) => {
    if(e.target.value === "blob")
    { 
       right_div.style.backgroundImage = "url('assets/images/blob.png')";
       right_div.style.backgroundSize = "50%";
       right_div.style.backgroundRepeat= "no-repeat"
       right_div.style.backgroundPosition = "center"
       blob_visible= true;
    }
    else if(e.target.value === "nope" && blob_visible== true )
       { right_div.style.backgroundImage = "url('')"
         blob_visible= false;}
}

const addStyleOnMouseOver= (e) => {
    
    e.target.style.borderBottom="2px solid";
    e.target.style.paddingBottom= "5px";
    
}

const removeStyleOnMouseOver= (e) => {
    
    e.target.style.borderBottom= "none";
    
}  

const removeCard = (e) => {
 let card= e.target.parentElement ;
 card.remove() ;
}


const createCard = () => {
    let card = document.createElement("div")
    let card_close = document.createElement("input");
    card_close.setAttribute("type","image");
    card_close.setAttribute("src","assets/images/icon_delete.png");
    card_close.addEventListener("click",removeCard);
    let card_h1= document.createElement("h1")
    if (heading== true) card_h1.textContent= right_h1.textContent;
    let card_div= document.createElement("div")
    let card_main_img= document.createElement("img")
    card_main_img.setAttribute("src",selectedImglink);
    card_main_img.style.cssText= "width: 46%; z-index: 2; padding: 8px 0px"

    createRelation(card, card_close,"width: 25px; align-self: flex-end; position: relative; top: -10px; left: 10px")
    createRelation(card, card_h1,"font-size: 3em; font-weight: 800; margin: 15px;overflow-wrap: break-word;  ")
    createRelation(card_div,card_main_img);

    createRelation(card,card_div,"display: flex; flex-direction: column; align-items:center; justify-content: center;  margin: 15px 0px; padding: 40px 10px; min-height: 185px ");
    card.style.cssText=`width: ${cardsize}; border: 2px solid black; display: flex; flex-direction: column;  text-align: center; background-color: ${bgcolor}; margin: 15px 20px ;box-shadow: 2px 2px 3px #000;min-width:270px; min-height: 300px `;
    dashboard.insertBefore(card,dashboard.children[0]);

    if(blob_visible===true)
    {  
       card_div.style.cssText += "background-image: url('./assets/images/blob.png'); background-size: 67% ; background-position: center;background-repeat: no-repeat; ";

    } 
}

const displayWhiteBg = (e) => {
    
    e.target.style.backgroundColor= "white";
}

const removeWhiteBg = (e) => {
    e.target.style.backgroundColor= "transparent";
}

const cursorChange = (e) => {
    e.target.style.cursor= "pointer"
}

// Bling Title 
let title= document.createElement("h3");
title.textContent= "BLING!";

// Section 
let section= document.createElement("section");
let left= document.createElement("div");
let right= document.createElement("div");

createRelation(section,left,"display: flex; flex-direction: column; margin: 20px 0px 20px 20px")
createRelation(section,right,"display: flex; flex-direction: column; width: 37%; text-align: center; min-width: 350px;margin: 20px 0px 20px 0px;")

/*  Section - Left */
let left_h2 = document.createElement("h2")
left_h2.textContent = "Sizzle your Life"
let left_h1 = document.createElement("h1")
left_h1.textContent = "Make a Card"

createRelation(left,left_h2,"font-size: 1.5em; font-weight: 300; margin: 5px 0px")
createRelation(left,left_h1,"font-size: 2.5em; font-weight: 600; word-spacing: 0.2em; margin: 5px 0px 15px;")

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
createRelation(left,img_choice,"display: flex; margin: 30px 0px 0px ; flex-wrap: wrap;")

// Section - left - user input
let user_choice= document.createElement("div");
let bling_name= document.createElement("input");
bling_name.setAttribute("type","text")
bling_name.setAttribute("placeholder","Name your Bling!")
bling_name.addEventListener("input",changeText)

let bling_color= document.createElement("select");
let colors= ["Gold","Snow","DodgerBlue","LightSalmon","LightCoral","LightPink","OrangeRed","Tomato","DarkOrchid","SpringGreen","Thistle"]
for(let color of colors)
    addColors(color)
bling_color.addEventListener("change", changeColor)

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

radio_blob.addEventListener("change", changeBlobImg)
radio_nope.addEventListener("change",changeBlobImg)

createRelation(bling_radio,radio_blob,"font-size: 0.3em; margin: 7px 8px 7px 12px; ")
createRelation(bling_radio,radio_blob_label,"margin-right: 12px; ")
createRelation(bling_radio,radio_nope,"font-size: 0.3em; margin: 7px 8px 7px 5px;")
createRelation(bling_radio,radio_nope_label,"margin-right: 12px; ")

createRelation(user_choice,bling_name,"border: 1.5px solid black; padding: 5px 10px; border-radius: 5px; background-color: black; margin-right: 12px; color: white; outline: none; box-shadow: 2px 2px 3px #000; max-height: 36px; margin-top: 15px ")
createRelation(user_choice,bling_color,"border: 1.5px solid black; padding: 5px 10px; border-radius: 5px; background-color: black; margin-right: 12px; color: white; outline: none; box-shadow: 2px 2px 3px #000;max-height: 36px; margin-top: 15px ")
createRelation(user_choice,bling_radio,"border: 1.5px solid black;  border-radius: 5px; background-color: black; margin-right: 5px; color: white; outline: none; font-size: 0.8em; box-shadow: 2px 2px 3px #000;padding: 3px 0px;max-height: 36px; margin-top: 15px  ")

createRelation(left,user_choice,"display: flex; margin: 15px 0px 25px;flex-wrap: wrap; ")


// Section - left - capture
let capture_div = document.createElement("div");
let capture_inp = document.createElement("input");
capture_inp.setAttribute("type","image");
capture_inp.setAttribute("src","assets/images/camera.png");
capture_inp.addEventListener("click",createCard);
capture_inp.addEventListener("mousedown",displayWhiteBg)
capture_inp.addEventListener("mouseup",removeWhiteBg)

createRelation(capture_div,capture_inp,"max-width: 37px; border: 1.5px solid black; background-color: transparent; padding: 9px 8px; border-radius: 5px; box-shadow: 2px 2px 3px #000;")
createRelation(left,capture_div,"background-color: transparent")

/*  Section - Right */
let right_h1= document.createElement("h1")
right_h1.textContent= "Stuff"
let right_div= document.createElement("div")
let right_div_img= document.createElement("img")

createRelation(right, right_h1,"font-size: 3em; font-weight: 800 ; display: none; overflow-wrap: break-word;");
createRelation(right_div,right_div_img,);
createRelation(right,right_div,"display: flex; flex-direction: column; align-items:center; justify-content: center;  min-height: 240px");

/* Dashboard */
let dashboard = document.createElement("div");
dashboard.setAttribute("id","dashboard")
/* Footer */
let footer = document.createElement("footer");
let footer_ul = document.createElement("ul");

let li_credits = document.createElement("ul");
li_credits.textContent= "🖤 Credits:"

createRelation(footer_ul,li_credits,"margin-right: 15px")
addFooterLinks();
createRelation(footer,footer_ul,"display:flex; font-weight: bold; flex-wrap: wrap; margin: 10px 10px; max-width: 80%; justify-content: center")

// Appending to root
createRelation(root,title,"text-align:center; margin: 30px 0px; font-weight: 900; font-size: 1.3em; text-shadow: 3.5px 2.5px 0px #E6A519")
createRelation(root,section,"display: flex; justify-content: space-evenly; margin: 90px 0px 10px; flex-wrap: wrap")
createRelation(root,dashboard,"display: flex; flex-wrap: wrap; justify-content: center; width: 85%; margin: auto; ")
createRelation(root,footer,"display: flex; justify-content: center; margin: 30px 0px 10px ; padding: 10px 0px; text-align: center")


