const make = () => {
    var name = document.querySelector("#frnd").value;
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            return response.json(); 
        })
        .then((data) => {
            var c = data.value;
            var md = c.replace(/Chuck Norris/g, name);
            var cnt=document.querySelector("#joke-output");
            cnt.style.display = "flex";
            cnt.innerHTML=md;
        })
        .catch((error) => {
            console.error("Error fetching Chuck Norris joke:", error); 
        });
}
