
const checkPrime = (num) => {

     if(num < 2){
       console.log(num , "Not a prime number")
     }else{

        for(let i = 2;i<num;i++){
          if(num % i == 0){
            console.log(num , "Not a prime number")
            return
          }
        }

        console.log(num , "is a prime number")
     }
}

module.exports = {checkPrime}