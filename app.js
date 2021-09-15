let root = document.querySelector("#root");
document.body.style.fontFamily = "Montserrat";
document.body.style.backgroundColor = "gold";
let bgcolor = "gold";
let selectedImglink = "", blob_visible = false , heading= false;
let cardsize = "29%";


// Functions
const createRelation = (parent, child, styling= child.style.cssText) => {
    child.style.cssText = styling;
    parent.appendChild(child);
}

const createImgButton = (text) => {
    let btn = document.createElement("button");
    btn.textContent = text;
    btn.setAttribute('name',text);
    btn.style.border = "1.5px solid black";
    btn.style.borderRadius = "5px";
    btn.style.backgroundColor = "transparent";
    btn.style.padding = "10px 12px";
    btn.style.margin = "15px 17px 0px 0px";
    btn.style.boxShadow = "2px 2px 3px #000";
    btn.classList.add("bgCheck");
    btn.addEventListener("click",changeImg);
    btn.addEventListener("click",changeButtonStyle);
    btn.addEventListener("mouseover",cursorChange);
    return btn;
}

const addColors = (color) => {
    let opt = document.createElement("option");
    opt.setAttribute("value",color);
    opt.textContent = color;
    bling_color.appendChild(opt);
}

const addFooterLinks = () => {
    for(let linkname of Object.keys(imglinks))
    {  let li = document.createElement("li");
       let a = document.createElement("a");
       a.textContent = linkname;
       a.setAttribute("href","#");
       a.setAttribute("target","_blank");
       li.addEventListener("mouseenter",addStyleOnMouseOver);
       li.addEventListener("mouseleave",removeStyleOnMouseOver);
       createRelation(li,a);
       a.style.color = "black";
       a.style.textDecoration = "none";
       createRelation(footer_ul,li)
       li.style.marginRight = "15px"
       
    }
}

// Event Handlers
const changeText = (e) => { 
    heading= true;
    right_h1.style.display = "block"
    right_h1.textContent= e.target.value;
}
// Image Links - name : link
const imglinks= { 
  "Polaroid" : "assets/images/polaroid.png",
  "TV" : "assets/images/tv.png",
  "Traitor": "assets/images/among-us.png",
  "Fall Guy": "assets/images/fall-guy-01.png",
  "Radio" : "assets/images/radio-02.png"
};

const changeImg = (e) => {
    heading=true;
    if(right_h1.style.display=="none") right_h1.style.display= "block";
    e.target.style.backgroundColor = e.target.style.backgroundColor === "black" ? "transparent" : "black";

    let bg = e.target.style.backgroundColor;

    if(bg=="black")
    {   e.target.style.color = "white";
        right_div_img.setAttribute("src",imglinks[e.target.name]);
        right_div_img.style.width = "31%";
        right_div_img.style.zIndex = "2";
        right_div_img.style.display= "inline-block";
        selectedImglink = imglinks[e.target.name];
    }
    else
    {   
        e.target.style.color = "black";
        right_div_img.removeAttribute("src");
        right_div_img.style.display= "none";   
        selectedImglink = "";
    }
  
}

const changeButtonStyle = (e) => {
  let allImgButtons = document.getElementsByClassName("bgCheck");  
  for(let btn of allImgButtons )
    {   
        if(btn.name!= e.target.name)
        {
            btn.style.backgroundColor = "transparent";
            btn.style.color = "black"; 
            btn.style.boxShadow = "2px 2px 3px #000;";
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
       right_div.style.backgroundRepeat= "no-repeat";
       right_div.style.backgroundPosition = "center";
       blob_visible= true;
    }
    else if(e.target.value === "nope" && blob_visible== true )
       { right_div.style.backgroundImage = "url('')";
         blob_visible= false;
       }
}

const addStyleOnMouseOver= (e) => {
    
    e.target.style.borderBottom = "2px solid";
    e.target.style.paddingBottom = "5px";
    
}

const removeStyleOnMouseOver= (e) => {
    
    e.target.style.borderBottom = "none";
    
}  

const removeCard = (e) => {
 let card = e.target.parentElement ;
 card.remove() ;
}


const createCard = () => {
    let card = document.createElement("div")
    let card_close = document.createElement("input");
    card_close.setAttribute("type","image");
    card_close.setAttribute("src","assets/images/icon_delete.png");
    card_close.addEventListener("click",removeCard);
    let card_h1 = document.createElement("h1")
    if (heading == true) card_h1.textContent= right_h1.textContent;
    let card_div = document.createElement("div")

    let card_main_img = document.createElement("img");
    card_main_img.setAttribute("src",selectedImglink);
    card_main_img.style.width = "46%";
    card_main_img.style.zIndex = "2";
    card_main_img.style.padding = "8px 0px";

    createRelation(card, card_close)
    card_close.style.width = "37px";
    card_close.style.alignSelf = "flex-end";
    card_close.style.position = "relative";
    card_close.style.top = "-14px";
    card_close.style.left = "19px";

    createRelation(card, card_h1)
    card_h1.style.fontSize = "3.7em";
    card_h1.style.fontWeight = "800";
    card_h1.style.margin = "15px";
    card_h1.style.overflowWrap = "break-word";

    createRelation(card_div,card_main_img);

    createRelation(card,card_div);
    card_div.style.display = "flex";
    card_div.style.flexDirection = "column";
    card_div.style.alignItems = "center";
    card_div.style.justifyContent = "center";
    card_div.style.margin = "15px 0px";
    card_div.style.padding = "40px 10px";
    card_div.style.minHeight = "185px";
   
    card.style.cssText=`width: ${cardsize}; border: 2px solid black; display: flex; flex-direction: column;  text-align: center; background-color: ${bgcolor}; margin: 15px 20px ;box-shadow: 2px 2px 3px #000;min-width:270px; min-height: 300px `;
    dashboard.insertBefore(card,dashboard.children[0]);

    if(blob_visible===true)
    {  
       card_div.style.cssText += "background-image: url('./assets/images/blob.png'); background-size: 67% ; background-position: center;background-repeat: no-repeat; ";

    } 
}

const displayWhiteBg = (e) => {
    
    e.target.style.backgroundColor = "white";
}

const removeWhiteBg = (e) => {
    e.target.style.backgroundColor= "transparent";
}

const cursorChange = (e) => {
    e.target.style.cursor = "pointer";
}

// Bling Title 
let title= document.createElement("h3");
title.textContent= "BLING!";

// Section 
let section= document.createElement("section");
let left= document.createElement("div");
let right= document.createElement("div");

createRelation(section,left)
left.style.display = "flex";
left.style.flexDirection = "column";
left.style.margin = "20px 0px 20px 20px";

createRelation(section,right)
right.style.display = "flex";
right.style.flexDirection = "column";
right.style.width = "37%";
right.style.textAlign = "center";
right.style.minWidth = "350px";
right.style.margin = "20px 0px 20px 20px";

/*  Section - Left */
let left_h2 = document.createElement("h2");
left_h2.textContent = "Sizzle your Life";
let left_h1 = document.createElement("h1");
left_h1.textContent = "Make a Card";

createRelation(left,left_h2);
left_h2.style.fontSize = "1.65em";
left_h2.style.fontWeight = "300";
left_h2.style.margin = "5px 0px";

createRelation(left,left_h1)
left_h1.style.fontSize = "3.0em";
left_h1.style.fontWeight = "700";
left_h1.style.margin = "5px 0px 15px";
left_h1.style.wordSpacing = "0.2em";

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
createRelation(left,img_choice)

img_choice.style.display = "flex";
img_choice.style.margin = "30px 0px 0px";
img_choice.style.flexWrap = "wrap";

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

createRelation(bling_radio,radio_blob)
radio_blob.style.fontSize = "0.3em";
radio_blob.style.margin = "7px 8px 7px 12px";
createRelation(bling_radio,radio_blob_label)
radio_blob_label.style.marginRight = "12px";
createRelation(bling_radio,radio_nope)
radio_nope.style.fontSize = "0.3em";
radio_nope.style.margin = "7px 8px 7px 5px";
createRelation(bling_radio,radio_nope_label)
radio_nope_label.style.marginRight = "12px";

createRelation(user_choice,bling_name);
bling_name.style.border = "1.5px solid black";
bling_name.style.padding = "5px 10px";
bling_name.style.borderRadius = "5px";
bling_name.style.backgroundColor = "black";
bling_name.style.marginRight = "12px";
bling_name.style.color = "white";
bling_name.style.boxShadow = "2px 2px 3px #000";
bling_name.style.maxHeight = "36px";
bling_name.style.marginTop = "15px";
bling_name.style.outline = "none";

createRelation(user_choice,bling_color);
bling_color.style.border = "1.5px solid black";
bling_color.style.padding = "5px 10px";
bling_color.style.borderRadius = "5px";
bling_color.style.backgroundColor = "black";
bling_color.style.marginRight = "12px";
bling_color.style.color = "white";
bling_color.style.boxShadow = "2px 2px 3px #000";
bling_color.style.maxHeight = "36px";
bling_color.style.marginTop = "15px";
bling_color.style.outline = "none";

createRelation(user_choice,bling_radio);
bling_radio.style.border = "1.5px solid black";
bling_radio.style.padding = "3px 0px";
bling_radio.style.borderRadius = "5px";
bling_radio.style.backgroundColor = "black";
bling_radio.style.marginRight = "5px";
bling_radio.style.color = "white";
bling_radio.style.fontSize = "0.9em";
bling_radio.style.boxShadow = "2px 2px 3px #000";
bling_radio.style.maxHeight = "36px";
bling_radio.style.marginTop = "15px";
bling_radio.style.outline = "none";

createRelation(left,user_choice)
user_choice.style.display = "flex";
user_choice.style.margin = "15px 0px 25px";
user_choice.style.flexWrap = "wrap";

// Section - left - capture
let capture_div = document.createElement("div");
let capture_inp = document.createElement("input");
capture_inp.setAttribute("type","image");
capture_inp.setAttribute("src","assets/images/camera.png");
capture_inp.addEventListener("click",createCard);
capture_inp.addEventListener("mousedown",displayWhiteBg)
capture_inp.addEventListener("mouseup",removeWhiteBg)

createRelation(capture_div,capture_inp)
capture_inp.style.maxWidth = "37px";
capture_inp.style.border = "1.5px solid black";
capture_inp.style.backgroundColor = "transparent";
capture_inp.style.padding = "9px 8px";
capture_inp.style.borderRadius = "5px";
capture_inp.style.boxShadow = "2px 2px 3px #000;";

createRelation(left,capture_div);
capture_div.backgroundColor = "transparent";

/*  Section - Right */
let right_h1= document.createElement("h1")
right_h1.textContent= "Stuff"
let right_div= document.createElement("div")
let right_div_img= document.createElement("img")

createRelation(right, right_h1);
right_h1.style.fontSize = "3.7em";
right_h1.style.fontWeight = "800";
right_h1.style.display = "none";
right_h1.style.overflowWrap = "break-word";

createRelation(right_div,right_div_img);
createRelation(right,right_div);
right_div.style.display = "flex";
right_div.style.flexDirection = "column";
right_div.style.alignItems = "center";
right_div.style.justifyContent = "center";
right_div.style.minHeight = "240px";
/* Dashboard */
let dashboard = document.createElement("div");
dashboard.setAttribute("id","dashboard")

/* Footer */
let footer = document.createElement("footer");
let footer_ul = document.createElement("ul");

let li_credits = document.createElement("li");
li_credits.textContent= "🖤 Credits:"

createRelation(footer_ul,li_credits)
li_credits.style.marginRight = "10px";
addFooterLinks();

createRelation(footer,footer_ul)
footer_ul.style.display = "flex";
footer_ul.style.fontWeight = "bold";
footer_ul.style.flexWrap = "wrap";
footer_ul.style.margin = "10px 10px";
footer_ul.style.maxWidth = "80%";
footer_ul.style.justifyContent = "center";

// Appending to root
createRelation(root,title);
title.style.textAlign = "center";
title.style.textShadow = "3.5px 2.5px 0px #E6A519";
title.style.fontWeight = "900";
title.style.fontSize = "1.5em";
title.style.letterSpacing = "1px";
title.style.margin = "30px 0px";

createRelation(root,section)
section.style.display = "flex";
section.style.justifyContent = "space-evenly";
section.style.flexWrap = "wrap";
section.style.margin = "90px 0px 10px";

createRelation(root,dashboard);
dashboard.style.display = "flex";
dashboard.style.justifyContent = "center";
dashboard.style.flexWrap = "wrap";
dashboard.style.width = "85%"
dashboard.style.margin = "auto";

createRelation(root,footer)
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.margin = "50px 0px 10px";
footer.style.padding = "10px 0px";

