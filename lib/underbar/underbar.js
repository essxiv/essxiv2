
let _ = {}

_.identity = function(value) {
    return value
}

_.first = function(array, n) {
    if (n === undefined) {
        return array[0]
    }
    if (Array.isArray(array)) {
        return array.slice(0, n)
    }
}

_.last = function(array, n) {
    if (n === undefined) {
        return array[array.length-1]
    }
    if (Array.isArray(array)) {
        return array.slice(Math.max(0, array.length-n))
    }
}

_.each = function(collection, callback) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection)
        }
    } else {
        for (var key in collection) {
            callback(collection[key], key, collection)
        }
    }
}

_.filter = function(collection, test) {
    var result = []

    _.each(collection, function(value) {
        test(value) && result.push(value)
    })
    return result
}

 _.reject = function(collection, test) {
     return _.filter(collection, function(value) {
         return !test(value)
     })
 }

 _.unique = function(array) {
     var hash = {}
     _.each(array, function(value) {
         hash[value] = value
     })
 }

module.exports = _

 //
 // let arr = [1,2,3,4,5,6,7,8,9,10]
 // let ambigObj = {
 //     key1: 1,
 //     key2: 2,
 //     key3: 3,
 //     key4: 4,
 //     key5: 5
 // }

// console.log(_.reject(ambigObj, function(obj, i, x) {
//     console.log('iterator:: ', obj)
//     console.log('i:: ', i)
//     console.log('x:: ', x)
// }))
