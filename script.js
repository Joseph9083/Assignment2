function getDate(){
    var body= document.getElementById("mainBody");

    var p = document.createElement("p");
    p.innerText = Date()
    body.appendChild(p)
}