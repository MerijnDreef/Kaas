alert("Beantwoord deze vragen met ja of nee");
 var vraag1 = prompt("Is de kaas geel?");
if (vraag1 == "ja"){
    
    document.write("uw kaas is geel"+"<br>")

    var vraag2 = prompt("Zitten er gaten in?");
    if (vraag2 == "ja"){
        
        document.write("uw kaas heeft gaten"+"<br>")

        var vraag3 = prompt("Is uw kaas belachelijk duur?")
                if (vraag3 == "ja"){

                    document.write("uw kaas is belachelijk duur"+"<br>"+"Uw kaas is Emmenthaler!")
                }
                else if (vraag3 == "nee"){

                    document.write("uw kaas is niet belachelijk duur"+"<br>"+"Uw kaas is Leerdammer!")
                }
        }
    else if (vraag2 == "nee"){

            document.write("uw kaas heeft geen gaten" + "<br>")

            var vraag3 = prompt("Is uw kaas hard als steen?")
            if (vraag3 == "ja"){

                document.write("uw kaas is hard als steen"+"<br>"+"Uw kaas is Parmigiano Reggiano!")
            }
            else if (vraag3 == "nee"){

                document.write("uw kaas is niet hard als steen"+"<br>"+"Uw kaas is Goudse kaas!")
             }
    }
}

else if(vraag1 == "nee"){

    document.write("uw kaas is niet geel"+"<br>")
    var vraag2 = prompt("Heeft uw kaas blauwe schimmels");
    if (vraag2 == "ja"){

        document.write("uw kaas heeft blauwe schimmels"+"<br>")
        
            var vraag3 = prompt("Heeft uw kaas een korst?")
            if (vraag3 == "ja"){

                document.write("uw kaas heeft een korst"+"<br>"+"Uw kaas is Blue de Rochbaron!")
            
            }
            else if (vraag3 == "nee"){

                document.write("uw kaas heeft geen korst"+"<br>"+"Uw kaas is Fourme d'Ambert!")
            }
    }
    else if (vraag2 == "nee"){
        
        document.write("uw kaas heef geen blauwe schimmels"+"<br>")
        
        var vraag3 = prompt("Heeft uw kaas een korst?")
        if (vraag3 == "ja"){

            document.write("uw kaas heeft een korst"+"<br>"+"Uw kaas is Camembert!")
        
        }
        else if (vraag3 == "nee"){

            document.write("uw kaas heeft geen korst"+"<br>"+"Uw kaas is Mozzarella!")
        }
    }
}