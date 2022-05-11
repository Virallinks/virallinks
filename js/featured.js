// Featured 1
const f1Name = "Benjamin Okafor";
const f1Link = "https://www.shoelayers.com/";
const f1Image = "./images/f1.jpg";
const f1Title = "Running shoes - 1 day shipping";
const f1Description = "The best selection of shoes on earth. Free return policy. 15% off your order";
const f1Category = "Goods and Articles";
const f1CategoryUrl = "./categories/goodsandArticles.html";
const f1Date = "2nd April, 2022";

document.getElementById("f1Image").src = f1Image;
document.getElementById("f1Category").href = f1CategoryUrl;
document.getElementById("f1Category").textContent = f1Category;
document.getElementById("f1Title").textContent = f1Title;
document.getElementById("f1Link").textContent = f1Link;
document.getElementById("f1Link").href = f1Link;
document.getElementById("f1Description").textContent = f1Description;
document.getElementById("f1Date").textContent = "Posted by "+f1Name+" on "+f1Date;

document.getElementById("f1ImageDiv").addEventListener("click", adClick1);
document.getElementById("f1Title").addEventListener("click", adClick1);

function adClick1(){

    localStorage.setItem("name", f1Name);
    localStorage.setItem("link", f1Link);
    localStorage.setItem("title", f1Title);
    localStorage.setItem("description", f1Description);
    localStorage.setItem("category", f1Category);
    localStorage.setItem("categoryUrl", f1CategoryUrl);
    localStorage.setItem("image", f1Image);
    localStorage.setItem("date", f1Date);

    window.location.href = "./mainAdvert.html";

}

//Featured 2
const f2Name = "Coco";
const f2Link = "https://www.instagram.com/p/CdLZsiqMVwn/?igshid=NDA1YzNhOGU=";
const f2Image = "./images/f3.jpeg";
const f2Title = "Yummy Bites by coco";
const f2Description = "Good morning everyone and happy new month. Just here to remind you to follow my business page @yummybitesbycocoa";
const f2Category = "Goods and Articles";
const f2CategoryUrl = "./categories/goodsandArticles.html";
const f2Date = "4th May, 2022";

document.getElementById("f2Image").src = f2Image;
document.getElementById("f2Category").href = f2CategoryUrl;
document.getElementById("f2Category").textContent = f2Category;
document.getElementById("f2Title").textContent = f2Title;
document.getElementById("f2Link").textContent = f2Link;
document.getElementById("f2Link").href = f2Link;
document.getElementById("f2Description").textContent = f2Description;
document.getElementById("f2Date").textContent = "Posted by "+f2Name+" on "+f2Date;

document.getElementById("f2ImageDiv").addEventListener("click", adClick2);
document.getElementById("f2Title").addEventListener("click", adClick2);

function adClick2(){

    localStorage.setItem("name", f2Name);
    localStorage.setItem("link", f2Link);
    localStorage.setItem("title", f2Title);
    localStorage.setItem("description", f2Description);
    localStorage.setItem("category", f2Category);
    localStorage.setItem("categoryUrl", f2CategoryUrl);
    localStorage.setItem("image", f2Image);
    localStorage.setItem("date", f2Date);

    window.location.href = "./mainAdvert.html";

}

//Featured 3
const f3Name = "Elvira Okeke";
const f3Link = " https://wa.me/qr/RLLT6BQDJJXTB1";
const f3Image = "./images/f2.jpeg";
const f3Title = "Vira's Ztore";
const f3Description = "Looking for a store with affordable classy accessories to suit your taste or to gift that special one";
const f3Category = "Goods and Articles";
const f3CategoryUrl = "./categories/goodsandArticles.html";
const f3Date = "7th May, 2022";

document.getElementById("f3Image").src = f3Image;
document.getElementById("f3Category").href = f3CategoryUrl;
document.getElementById("f3Category").textContent = f3Category;
document.getElementById("f3Title").textContent = f3Title;
document.getElementById("f3Link").textContent = f3Link;
document.getElementById("f3Link").href = f3Link;
document.getElementById("f3Description").textContent = f3Description;
document.getElementById("f3Date").textContent = "Posted by "+f3Name+" on "+f3Date;

document.getElementById("f3ImageDiv").addEventListener("click", adClick3);
document.getElementById("f3Title").addEventListener("click", adClick3);

function adClick3(){

    localStorage.setItem("name", f3Name);
    localStorage.setItem("link", f3Link);
    localStorage.setItem("title", f3Title);
    localStorage.setItem("description", f3Description);
    localStorage.setItem("category", f3Category);
    localStorage.setItem("categoryUrl", f3CategoryUrl);
    localStorage.setItem("image", f3Image);
    localStorage.setItem("date", f3Date);

    window.location.href = "./mainAdvert.html";

}

//Featured 4
const f4Name = "Nkechi Odinaka";
const f4Link = "https://www.instagram.com/p/CdVS4AHME3E/?igshid=YmMyMTA2M2Y=";
const f4Image = "./images/f4.jpeg";
const f4Title = "Kornament";
const f4Description = "Get your waist beads and ankle beads from us";
const f4Category = "Goods and Articles";
const f4CategoryUrl = "./categories/goodsandArticles.html";
const f4Date = "10th May, 2022";

document.getElementById("f4Image").src = f4Image;
document.getElementById("f4Category").href = f4CategoryUrl;
document.getElementById("f4Category").textContent = f4Category;
document.getElementById("f4Title").textContent = f4Title;
document.getElementById("f4Link").textContent = f4Link;
document.getElementById("f4Link").href = f4Link;
document.getElementById("f4Description").textContent = f4Description;
document.getElementById("f4Date").textContent = "Posted by "+f4Name+" on "+f4Date;

document.getElementById("f4ImageDiv").addEventListener("click", adClick4);
document.getElementById("f4Title").addEventListener("click", adClick4);

function adClick4(){

    localStorage.setItem("name", f4Name);
    localStorage.setItem("link", f4Link);
    localStorage.setItem("title", f4Title);
    localStorage.setItem("description", f4Description);
    localStorage.setItem("category", f4Category);
    localStorage.setItem("categoryUrl", f4CategoryUrl);
    localStorage.setItem("image", f4Image);
    localStorage.setItem("date", f4Date);

    window.location.href = "./mainAdvert.html";

}



