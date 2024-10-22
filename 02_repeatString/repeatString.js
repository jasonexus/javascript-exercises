const repeatString = function(word, count) {
    
    const handler = []
    for (let i = 0; i < count; i++) {
        handler.unshift(word)
    }
    const combine = handler.join('')
    return combine

};

// Do not edit below this line
module.exports = repeatString;
