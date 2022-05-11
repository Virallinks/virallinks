const adDiv = document.getElementById("adDiv");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const adverts = adDiv.getElementsByTagName("article");
    
    Array.from(adverts).forEach(function(advert){
        const title = advert.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            //show
            advert.style.display = "block";
        }
        else{
            advert.style.display = "none";
        }
        
    })
})