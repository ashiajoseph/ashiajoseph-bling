
let root = document.querySelector("#root");
document.body.style.fontFamily= "Montserrat"
let bgcolor= "white";
let selectedImglink = "", blob_visible = false ;

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
       createRelation(footer_ul,li,"margin-right: 15px;")
       
    }
}

// Event Handlers
const changeText = (e) => { 
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
    if(right_h1.style.display=="none") right_h1.style.display= "block";
    e.target.style.backgroundColor = e.target.style.backgroundColor === "black" ? "transparent" : "black";

    let bg = e.target.style.backgroundColor;

    if(bg=="black")
    {   e.target.style.color = "white"
        right_div_img.setAttribute("src",imglinks[e.target.name]);
        right_div_img.style.cssText= "width: 35%; z-index: 2"
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
    {   if(btn.name!= e.target.name)
        {
            btn.style.backgroundColor = "transparent";
            btn.style.color = "black"; 
        }       
    }
}

const changeColor = (e) => {
    document.body.style.backgroundColor= e.target.value;
    bgcolor= e.target.value;
}

const changeBlobImg = (e) => {
    if(e.target.value === "blob")
    {  /*blob_img= document.createElement("img");
       blob_img.setAttribute("src","assets/images/blob.png")
       blob_img.setAttribute("id","blob")
       blob_img.style.cssText= "max-width: 49%; ";*/
       right_div.style.backgroundImage = "url('assets/images/blob.png')";
       right_div.style.backgroundSize = "45%";
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


const createCard = () => {
    let card = document.createElement("div")
    let card_h1= document.createElement("h1")
    card_h1.textContent= right_h1.textContent
    let card_div= document.createElement("div")

    let card_main_img= document.createElement("img")
    card_main_img.setAttribute("src",selectedImglink);
    card_main_img.style.cssText= "width: 40%; z-index: 2"

    
    createRelation(card, card_h1,"font-size: 3em; font-weight: 800; margin: 15px  ")
    createRelation(card_div,card_main_img);

    createRelation(card,card_div,"display: flex; flex-direction: column; align-items:center; justify-content: center;  margin: 15px 10px; padding: 40px 20px;");
    createRelation(dashboard,card,`width: 28%; border: 1px solid black; display: flex; flex-direction: column; justify-content: center; text-align: center; background-color: ${bgcolor}`);


    if(blob_visible===true)
    {  console.log("work")
       card_div.style.cssText += "background-image: url('./assets/images/blob.png'); background-size: 55% ; background-position: center;background-repeat: no-repeat ";
      
       console.log(card_div.style.backgroundImage)

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
createRelation(section,right,"display: flex; flex-direction: column; flex-basis: 35%; text-align: center;")

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

createRelation(bling_radio,radio_blob,"font-size: 0.6em; margin-right: 8px")
createRelation(bling_radio,radio_blob_label,"margin-right: 10px")
createRelation(bling_radio,radio_nope,"font-size: 0.6em; margin-right: 8px")
createRelation(bling_radio,radio_nope_label,"margin-right: 5px")

createRelation(user_choice,bling_name,"border: 1.5px solid black; padding: 5px 10px; border-radius: 5px; background-color: black; margin-right: 12px; color: white; outline: none")
createRelation(user_choice,bling_color,"border: 1.5px solid black; padding: 5px 10px; border-radius: 5px; background-color: black; margin-right: 12px; color: white; outline: none;")
createRelation(user_choice,bling_radio,"border: 1.5px solid black; padding: 5px 10px; border-radius: 5px; background-color: black; margin-right: 12px; color: white; outline: none; font-size: 0.8em")

createRelation(left,user_choice,"display: flex")


// Section - left - capture
let capture_div = document.createElement("div");
let capture_inp = document.createElement("input");
capture_inp.setAttribute("type","image");
capture_inp.setAttribute("src","assets/images/camera.png");
capture_inp.addEventListener("click",createCard);

createRelation(capture_div,capture_inp,"max-width: 33px; border: 1.5px solid black; background-color: transparent; padding: 7px; border-radius: 5px")
createRelation(left,capture_div,"background-color: transparent")

/*  Section - Right */
let right_h1= document.createElement("h1")
right_h1.textContent= "Stuff"
let right_div= document.createElement("div")
let right_div_img= document.createElement("img")

createRelation(right, right_h1,"font-size: 3em; font-weight: 800 ; display: none");
createRelation(right_div,right_div_img,);
createRelation(right,right_div,"display: flex; flex-direction: column; align-items:center; justify-content: center; padding: 50px; margin-top: 35px; height: 200px");

/* Dashboard */
let dashboard = document.createElement("div");

/* Footer */
let footer = document.createElement("footer");
let footer_ul = document.createElement("ul");
//let hearts = document.createElement(&hearts;)
let li_credits = document.createElement("ul");
li_credits.textContent= "Credits:"
//createRelation(footer_ul,hearts)
createRelation(footer_ul,li_credits,"margin-right: 15px")
addFooterLinks();
createRelation(footer,footer_ul,"display:flex; font-weight: bold")



// Appending to root

createRelation(root,title,"text-align:center; margin-top: 20px; font-weight: 700; font-size: 1.3em")
createRelation(root,section,"display: flex; justify-content: space-evenly; margin: 50px auto")
createRelation(root,dashboard,"display: flex; flex-wrap: wrap; justify-content: space-around; width: 85%; margin: auto; ")
createRelation(root,footer,"display: flex; justify-content: center; margin-top: 30px ; padding: 10px 0px")


