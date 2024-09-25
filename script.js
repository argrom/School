
let tab1 = ["kamien", "papier", "nozyce"]

function kamien(){
    let randomi = Math.floor(Math.random() * tab1.length)

    let randomp = document.getElementById("wynik")
    let wygrana;
    if(tab1[randomi] == "kamien"){
        wygrana = "remis";
    }
    if(tab1[randomi] == "papier"){
        wygrana = "przegrałeś";
    }
    if(tab1[randomi] == "nozyce"){
        wygrana = "wygrales";
    }
    randomp.innerHTML = "Komputer wybiera " + tab1[randomi] + "<br>" + wygrana;

}

function papier(){
    let randomi = Math.floor(Math.random() * tab1.length)

    let randomp = document.getElementById("wynik")
    let wygrana;
    if(tab1[randomi] == "kamien"){
        wygrana = "wygrałeś";
    }
    if(tab1[randomi] == "papier"){
        wygrana = "remis";
    }
    if(tab1[randomi] == "nozyce"){
        wygrana = "przegrałeś";
    }
    randomp.innerHTML = "Komputer wybiera " + tab1[randomi] + "<br>" + wygrana;

}

function nozyce(){
    let randomi = Math.floor(Math.random() * tab1.length)

    let randomp = document.getElementById("wynik")
    let wygrana;
    if(tab1[randomi] == "kamien"){
        wygrana = "przegrałeś";
    }
    if(tab1[randomi] == "papier"){
        wygrana = "wygrałeś";
    }
    if(tab1[randomi] == "nozyce"){
        wygrana = "remis";
    }
    randomp.innerHTML = "Komputer wybiera " + tab1[randomi] + "<br>" + wygrana;

}