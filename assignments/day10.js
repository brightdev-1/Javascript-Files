//for loop: is a function created to iterate through a databset
//using the keyword for( initialization, condition, increment or decrement)

for(let daniel = 20; daniel >= 1; daniel--){
    console.log(daniel);
}

// fizzbuzz challenge

// log fizz if the number is divisible by 3
// log buzz if the number is divisible by 5
// log FIZZBUZZ if the number is divisible by both 3 and 5
// otherwise, log the number itself

for (let daniel = 1; daniel <= 100; daniel++) {
  if (daniel % 3 === 0 && daniel % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (daniel % 3 === 0) {
    console.log("fizz");
  } else if (daniel % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(daniel);
  }
}
 
