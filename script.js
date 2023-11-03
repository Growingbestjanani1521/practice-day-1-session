/*var n = 7;  // Set the value of n
var count = 0;  // Initialize a count variable to count divisors

for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
        count++;
    }
}

if (count === 2)
 {
    console.log("prime");
} 
else {
    console.log("composite");
}*/




 
 

function result(){ 
    var isPrime = false; 
    var n = document.getElementById("janani").value; 
while (!isPrime) {
    var count = 0; 

    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        isPrime = true;  
    } else {
        n++;  
    }
}
console.log("The next prime is " + n);
}



