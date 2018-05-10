var words = ["ground", "control", "to", "major", "tom"];

function myMap(arr, callback){
  let output = []
  arr.forEach(function(element){
    output.push(callback(element))
  })
  return output
}


var t1 = myMap(words, function(word) {
  return word.length;
});

var t2 = myMap(words, function(word) {
  return word.toUpperCase();
});

var t3 = myMap(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(t1)
console.log(t2)
console.log(t3)
