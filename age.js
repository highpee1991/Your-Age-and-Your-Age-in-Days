function handsOnAgeInDays(){
    var birthYear = parseInt(prompt("What Year Were You Born"));
    var ageindays = (2021-birthYear)*365;
    var age = 2021-birthYear
    var para = document.createElement("h1")
    var textn = document.createTextNode(`You Are ${age} Years Old And Your Age In Days Is ${ageindays}`);
    para.setAttribute("id", "remove")
    para.appendChild(textn)
    document.getElementById("displayResult").appendChild(para)
}



function handsOnRefresh(){
    var remove = document.getElementById("remove")
    remove.remove()
}
