const removeFromArray = function(myArray, removed) {
    const removedArray = myArray.filter(item => item != removed)
    return removedArray
};

// Do not edit below this line
module.exports = removeFromArray;
