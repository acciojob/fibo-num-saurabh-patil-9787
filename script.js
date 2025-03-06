function isFibonacci(num) {
    // Write your code here
 if(num ==0 || num== 1){
     return true
 }
let a = 0;
let b = 1;
let fib = 0;
while(true){
    fib= a+b
    a = b;
    b= fib;
    if(fib == num){
        return true
    }
    else if(fib>=num) {
    return false
    }
    
}
 
}

const input = parseInt(prompt("Enter a number"));
alert(isFibonacci(input));