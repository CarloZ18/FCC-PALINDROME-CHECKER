//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

//We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    var elim = str.replace(/[^0-9a-z]/gi, ""); //elimino los caracteres que no son alfanumericos
    var min = elim.toLowerCase(); //coloco toda la cadena en minúscula
    var letras = min;
  
    // utilizo un loop para invertir la cadena dada y que la añada a la nueva cadena, sin alterar la original
    var cadenaInvertida = "";
    for (let i = letras.length; i >= 0; i--) {
      cadenaInvertida = cadenaInvertida + letras.charAt(i);
    }
    //establezco una condicion para que cuando la cadena original sea igual a la cadena invertida me devuelva true y por lo tanto sea un palindromo si no se cumple la condicion me devuelve false
    if (letras === cadenaInvertida) {
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("Eye");
  