"use strict";

// Exercise 2

// function wait (number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (number) {
//                 resolve("good you dont wait");
//             } else {
//                 reject("not good you have to wait");
//             }
//         },number)
//     });
// };
//
// // console.log(wait(true));
//
// wait(100).then(() => console.log('You\'ll see this after 1 second'));
// wait(300).then(() => console.log('You\'ll see this after 3 seconds'));


//Exercise 1

    function lastPush(username) {
        const url = "https://api.github.com/users/" + username + "/events/public"
        return new Promise((resolve, reject) => {
            resolve(fetch(url, {headers: {'Authorization': GITHUB_TOKEN}})
                .then(response => response.json())
                .then(data => console.log(data[0].created_at)))
                .catch(console.error)
        });
    }
    lastPush("YasinMogultay");
