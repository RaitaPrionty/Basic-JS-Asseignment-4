// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 



// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43



// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-



// Input: 1, 1, 1

// Output: 96



// Input: 20, 200, 50

// Output: 6970



// Input: 100, 5, 1

// Output: 303

function gemsToDiamond(game1, game2, game3){
    var friend1PerGameDiamond = 21;
    var friend2PerGameDiamond = 32;
    var friend3PerGameDiamond  = 43;
    var friend1D = friend1PerGameDiamond * game1;
    var friend2D = friend2PerGameDiamond * game2;
    var friend3D = friend3PerGameDiamond * game3;
    var total = friend1D + friend2D + friend3D;
    if(total > 2000){
        var total2 = total - 2000;
        return total2;
    }
    else{
        return total;
    }

}
var answer = gemsToDiamond(20,200,50);
console.log(answer);

