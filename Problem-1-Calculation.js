// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")



// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

// Sample Input & Output

// Input: 5

// Output: 7.5



// Input: 50

// Output: 75



// Input: 33

// Output: 49.5S

function mindGame(number){
    var multiplication = number * 3;
    var summation = multiplication + 10;
    var devision = summation / 2;
    var substraction = devision - 5;
    var FinalAns = substraction;
    return FinalAns;


    

    
}
var answer = mindGame(50);
console.log(answer);