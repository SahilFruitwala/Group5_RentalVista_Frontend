var acceptedCards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/,
  };
  
  
  
  export function validateCard(value) {
    // remove all non digit characters
    value = value.replace(/\D/g, '');
    let sum = 0;
    var shouldDouble = false;
    // loop through values starting at the rightmost side
    for (var i = value.length - 1; i >= 0; i--) {
      var digit = parseInt(value.charAt(i));
  
      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    // var valid = (sum % 10) === 0;
    var accepted = false;
    
    // loop through the keys (visa, mastercard, amex, etc.)
    Object.keys(acceptedCards).forEach(function(key) {
      var regex = acceptedCards[key];
      if (regex.test(value)) {
        accepted = true;
      }
    });
    
    return accepted;
  }
  
  
  export function validateCVV(creditCard, cvv) {
    // remove all non digit characters
    creditCard = creditCard.replace(/\D/g, '');
    cvv = cvv.replace(/\D/g, '');
    // american express and cvv is 4 digits
    if ((acceptedCards.amex).test(creditCard)) {
      if((/^\d{4}$/).test(cvv))
        return true;
    } else if ((/^\d{3}$/).test(cvv)) { // other card & cvv is 3 digits
      return true;
    }
    return false;
  }