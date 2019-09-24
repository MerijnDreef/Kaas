alert("Beantwoord deze vragen met ja of nee");
var vraag1 = prompt("Is de kaas geel?");
if (vraag1 == "ja"){
    
    document.write("uw kaas is geel" + "<br>")
    var vraag2 = prompt("Zitten er gaten in?");
    if (vraag2 == "ja"){
        
        document.write("uw kaas heeft gaten" + "<br>")
    }
    else if (vraag2 == "nee"){

        document.write("uw kaas heeft geen gaten" + "<br>")
    }
}

else if(vraag1 == "nee"){

    document.write("uw kaas is niet geel" + "<br>")
    var vraag2 = prompt("Heeft de kaas schimmels");
    if (vraag2 == "ja"){

        document.write("uw kaas heeft schimmels" + "<br>")
    }
    else if (vraag2 == "nee"){
        
        document.write("uw kaas heef geen schimmels" + "<br>")
    }
}