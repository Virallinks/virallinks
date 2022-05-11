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

function renderAdverts(doc){
    let adDiv = document.getElementById("adDiv");
    let adLoading = document.getElementById("adLoading");
    let adSection = document.getElementById("adSection");
    let id = doc.id;
    let name = doc.data().name;
    let link = doc.data().link;
    let title = doc.data().title;
    let description = doc.data().description;
    let category = doc.data().category;
    let image = doc.data().image;
    let date = doc.data().date;
    let categoryUrl;

    if(category == "Professional Services"){
        categoryUrl = "./categories/profrssionalServices.html";
    }
    else if(category == "Whatsapp Groups"){
        categoryUrl = "./categories/whatsappGroup.html";
    }
    else if(category == "Real Estate"){
        categoryUrl = "./categories/realEstate.html";
    }
    else if(category == "Goods and Articles"){
        categoryUrl = "./categories/goodsandArticles.html";
    }
    else if(category == "Network Marketing"){
        categoryUrl = "./categories/networkMarketing.html";
    }
    else if(category == "Youtube Channels"){
        categoryUrl = "./categories/youtubeChannels.html";
    }


    let advertBlock = `<article class="item is-loop is-image" >
    <p style="display: none;">${title}</p>
    <div class="item-image global-image global-image-orientation global-radius">

        <img
        sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="${image}" loading="lazy" alt="" onclick="adClick('${name}', '${link}', '${title}', '${description}', '${category}', '${categoryUrl}', '${image}', '${date}')"  >

    </div>

    <div class="item-content">
        <div class="item-tags global-tags">
            <a href="${categoryUrl}">${category}</a>
        </div>
        
        <h2 class="item-title" onclick="adClick('${name}', '${link}', '${title}', '${description}', '${category}', '${categoryUrl}', '${image}', '${date}')">${title}</h2>

        <a style="color:#10153c; font-size: 12px; text-decoration: underline; margin-top: -2px;" target="_blank" href="${link}">${link}</a>

        <p class="item-excerpt">
            ${description}
        </p>
    </div>
    
</article>  `;

    adDiv.insertAdjacentHTML("beforeend", advertBlock);
}

function adClick(name, link, title, description, category, categoryUrl, image, date){

    localStorage.setItem("name", name);
    localStorage.setItem("link", link);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("category", category);
    localStorage.setItem("categoryUrl", categoryUrl);
    localStorage.setItem("image", image);
    localStorage.setItem("date", date);

    window.location.href = "./mainAdvert.html";

}

db.collection('Adverts').get().then((snapshot) =>{
    snapshot.docs.forEach( doc => {
        renderAdverts(doc);
    })

    adLoading.style.display = "none";
    adSection.style.display = "block";

})