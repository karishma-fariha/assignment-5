// heart count
const hearts = document.querySelectorAll(".heart-icon");


for (const heart of hearts) {
  heart.addEventListener("click", function(){

    let totalCount = parseInt(document.getElementById("heart-count").innerText);

    totalCount++;

    document.getElementById("heart-count").innerText = totalCount;
  });
}

// calling
let callBtn = document.getElementsByClassName("callBtn");
let coins = document.getElementById("coin");
let log = document.getElementById("callLog");


for(let click of callBtn ){
    click.addEventListener("click", function(e){
        e.preventDefault();
        
        let parent = click.parentElement.parentElement;

        let Name = parent.querySelector("h3").textContent;
        let Number= parent.querySelector("h2").textContent;
       

        let coin = parseInt(coins.innerText);
        coin = coin-20;
        coins.innerText = coin;
        if(coin<1){
            window.alert("You Don't have enough coins to make a call");
            return;
        }
         window.alert("Calling"+ " " +Name+ " " +Number);

        let now = new Date().toLocaleTimeString(); 
        let callHistory = document.createElement("div");
        callHistory.className = "flex items-center justify-between p-5 bg-gray-100 mt-5 rounded-md";

        callHistory.innerHTML =
            '<div>' +
            '<h2 class="text-lg font-semibold">' + Name + '</h2>' +
            '<p>' + Number+ '</p>' +
            '</div>' +
            '<div class="text-right">' +
            '<p>' + now + '</p>' +
            '</div>';
        log.appendChild(callHistory);
        



    })
}
let clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", function(e){
    e.preventDefault();
    log.innerHTML=""
})
