const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
makePassword()
function makePassword(){
    
    let password1 = ""
    let password2 = ""
    let quantity = document.getElementById("quantity").value 
    
    if (quantity < 5 || quantity > 15 ){
        console.log("Quantity must be between 5-15 characters")
        return
    }
    
    for ( i= 0; i< quantity; i++){
        password1 = password1 + characters[randomIndex()]
        password2 = password2 + characters[randomIndex()]
    }
    
    password1El.textContent=password1
    password2El.textContent=password2
}

function randomIndex(){
    
    return Math.floor(Math.random()*characters.length)
}

function copy1(){
    let copyText = document.getElementById("copyPass")
    
    copyText.value = password1El.textContent
    console.log(copyText.value)
    
     
    copyText.select();
    document.execCommand("copy");
}

function copy2(){
    let copyText = document.getElementById("copyPass")
    
    copyText.value = password2El.textContent
    console.log(copyText.value)
    
     
    copyText.select();
    document.execCommand("copy");
}

