const palindromes = function (str) {
  let  pstr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
return pstr===(pstr.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
