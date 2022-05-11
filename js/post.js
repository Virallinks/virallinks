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

//Get date
const d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDay();

if(month == 0){
    month = "January";
}
else if(month == 1){
    month = "February";
}

else if(month == 2){
    month = "March";
}

else if(month == 3){
    month = "April";
}

else if(month == 4){
    month = "May";
}

else if(month == 5){
    month = "June";
}

else if(month == 6){
    month = "July";
}

else if(month == 7){
    month = "August";
}

else if(month == 8){
    month = "September";
}

else if(month == 9){
    month = "October";
}

else if(month == 10){
    month = "November";
}

else if(month == 11){
    month = "December";
}

let dateF = day+" "+month+", "+year;

// Captcha logic
let alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z', 'l', 'm', 'n', 'o', 'p', 'q', 'g', 'h', 'i', 'j', '$', '1', '2', '3', '4', '5', '6', '7', '8','9', '10' ];

let a1 = alpha[Math.floor(Math.random() * 47)];
let b1 = alpha[Math.floor(Math.random() * 47)];
let c1 = alpha[Math.floor(Math.random() * 47)];
let d1 = alpha[Math.floor(Math.random() * 47)];
let e1 = alpha[Math.floor(Math.random() * 47)];
let f1 = alpha[Math.floor(Math.random() * 47)];

let final = a1+b1+c1+d1+e1+f1;

document.getElementById("capt").value = final;

function validCap(){

    const nameH = document.getElementById("name");
    const titleH = document.getElementById("title");
    const linkH = document.getElementById("link");
    const descriptionH = document.getElementById("description");
    const categoryH = document.getElementById("category");
    const imageH = document.getElementById("image").files[0];
    const stg1 = document.getElementById("capt").value;
    const stg2 = document.getElementById("captInput").value
    const postButton = document.getElementById("postButton");

    if(nameH.value == ""){
        sweetAlert("", "Please enter your name", "error");
        return;
    }

    if(linkH.value == ""){
        sweetAlert("", "Please enter your a link for your advert", "error");
        return;
    }

    if(titleH.value == ""){
        sweetAlert("", "Please type in the title of your advert", "error");
        return;
    }

    if(descriptionH.value == ""){
        sweetAlert("", "Please type in the description of your advert", "error");
        return;
    }

    if(categoryH.value == ""){
        sweetAlert("", "Select a category", "error");
        return;
    }

    if(imageH.value == ""){
        sweetAlert("", "Please select an image for your advert", "error");
        return;
    }

    if(stg1 != stg2 || stg2 == ""){
        sweetAlert("", "Invalid captcha", "error");
        return;
    }

    /*Start upload*/
    let errorNum = "0";
    postButton.textContent = "Uploading...";
    postButton.disabled = true;

    //Upload image
    let imageUrl = "";
    let imageName = imageH.name;
    let storageRef = firebase.storage().ref('images/'+imageName);
    let uploadTask = storageRef.put(imageH);
    
    uploadTask.on('state_changed', function(snapshot){
        let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log(progress);
    },
    
    function(error){
        sweetAlert("", "An error occurred while uploading the image", "error");
        console.log(error.message); 
        postButton.textContent = "Submit";
        postButton.disabled = false;
       
    },
    
    function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL){
        imageUrl = downloadURL;
        console.log(downloadURL);

        //Collection ref
        db.collection('Adverts').add({
        name : nameH.value,
        link: linkH.value,
        title : titleH.value,
        description : descriptionH.value,
        category : categoryH.value,
        image : imageUrl,
        date : dateF }).then(() => {

            postButton.textContent = "Upload successful";
            postButton.disabled = true;
            window.location.href = "./index.html";

        })
      
    })
   
    })





}