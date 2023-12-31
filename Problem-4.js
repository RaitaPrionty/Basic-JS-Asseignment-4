// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।



// Sample Input & Output:-



// Input: [ 1,2,5 ]

// Output: 0



// Input: [ 2, -5, -7, -13 ]

// Output: 3



// Input: [ -4, -9, -5, -33, -55 ]

// Output: 5

function findingBadData(array){
    var newarray = [];
    // console.log(array);
    for(i = 0; i < array.length; i++){
        var elements = array[i];
        // console.log(elements);
        if(elements < 0){
            newarray.push(elements);
        }
        

    }
    return newarray.length;

}
var numbers = [-4, -9, -5, -33, -55];
var answer = findingBadData(numbers);
console.log(answer); 

