let profNum = document.getElementById("profNum");
let realNum = document.getElementById("realNum");
let goodsNum = document.getElementById("goodsNum");
let whatsNum = document.getElementById("whatsNum");
let networkNum = document.getElementById("networkNum");
let oppNum = document.getElementById("oppNum");
let youNum = document.getElementById("youNum");

document.getElementById("profClick").addEventListener("click", function(){
    localStorage.setItem("category", "Professional Services");
})
document.getElementById("realClick").addEventListener("click", function(){
    localStorage.setItem("category", "Real Estate");
})
document.getElementById("goodsClick").addEventListener("click", function(){
    localStorage.setItem("category", "Goods and Articles");
})
document.getElementById("whatsClick").addEventListener("click", function(){
    localStorage.setItem("category", "Whatsapp Groups");
})
document.getElementById("netClick").addEventListener("click", function(){
    localStorage.setItem("category", "Network Marketing");
})
document.getElementById("youClick").addEventListener("click", function(){
    localStorage.setItem("category", "Youtube Channels");
})
document.getElementById("oppClick").addEventListener("click", function(){
    localStorage.setItem("category", "Opportunities");
})

let a1 = 0,b1 = 0,c1 = 0,d1 = 0,e1 = 0,f1 = 0,g1 = 0;

const firebaseConfig = {
    apiKey: "AIzaSyAT6l6zoQWrwHe8Nxf0qxdAHaG1QbInDfQ",
    authDomain: "virallinks.firebaseapp.com",
    projectId: "virallinks",
    storageBucket: "virallinks.appspot.com",
    messagingSenderId: "875414938921",
    appId: "1:875414938921:web:507ea2b537dc7366de4338",
    measurementId: "G-TY66WKQ9DV"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true }); 

db.collection('Adverts').get().then((snapshot) =>{
    snapshot.docs.forEach( doc => {
        if(doc.data().category == "Professional Services"){
            a1++;
        }
        else if(doc.data().category == "Real Estate"){
            b1++;
        }
        else if(doc.data().category == "Goods and Articles"){
            c1++;
        }
        else if(doc.data().category == "Whatsapp Groups"){
            d1++;
        }
        else if(doc.data().category == "Network Marketing"){
            e1++;
        }
        else if(doc.data().category == "Youtube Channels"){
            f1++;
        }
        else if(doc.data().category == "Opportunities"){
            g1++;
        }
    })

    profNum.textContent = a1+" Adverts";
    realNum.textContent = b1+" Adverts";
    goodsNum.textContent = c1+" Adverts";;
    whatsNum.textContent = d1+" Adverts";;
    networkNum.textContent = e1+" Adverts";;
    youNum.textContent = f1+" Adverts";;
    oppNum.textContent = g1+" Adverts";;

})