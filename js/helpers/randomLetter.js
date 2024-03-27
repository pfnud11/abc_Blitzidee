//gibt einen zufällig ausgewählen buchstaben zurück
function randomLetter() {
    let result = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersLength = letters.length;
    
      result = letters.charAt(Math.floor(Math.random() * lettersLength));
      
    return result;
}

//damit mans vom html datei easy aufrufen kann
document.getElementById("randomLetter").innerHTML=randomLetter();