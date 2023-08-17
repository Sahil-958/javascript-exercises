const findTheOldest = function(arrObj) {
return arrObj.reduce(function(oldest,current){
    if(!current.yearOfDeath) current.yearOfDeath=new Date().getFullYear(); 
    let currentAge=current.yearOfDeath-current.yearOfBirth;
    let oldestAge=oldest.yearOfDeath-oldest.yearOfBirth;
    return oldestAge < currentAge ? current : oldest;
},arrObj[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
