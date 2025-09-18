const factorial = (num) => {
      if(num < 1){
        console.log("not a number");
        return
      }

      let fact = 1

      for(let i=num; i>=1; i--){
         fact  = fact * i;
      }

      console.log("Factorial of" ,  num ,"is:" , fact);
}

module.exports = {factorial}