
function simpleMultiplication(number){
  
    if(number % 2 ===  0) {
      return number * 8
  
    } else {
      return number * 9
  
    }
  
  }

  //Best Practice

  function simpleMultiplication(number){
    return (number % 2 === 0) ? number * 8 : number * 9
  }

  console.log( simpleMultiplication(2)) output: 16
  console.log( simpleMultiplication (3)) output: 18