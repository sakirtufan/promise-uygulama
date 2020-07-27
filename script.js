// Örnek-1
//let promise = new Promise((resolve,reject) => {
//     if(true){
//         resolve('success');
//     }else{
//         reject('Failure');
//     }
// });

// promise.then((data) =>{
//     console.log(data);
// }).catch((err)=>{console.log(err)});



//Örnek 2
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 1000);
// }).then((number)=>{console.log(number);

// return number*number;})

// .then((number)=>{console.log(number);

// return number*number})

// .then((number)=>console.log(number));




//örnek 3
// const isMomHappy = true;

// const willGetNewPhone = new Promise((resolve,reject)=>{
//     if(isMomHappy){
//         const phone = {
//             name:'iPhone 8',
//             price : 4000,
//             color : 'silver'
//         }
//         resolve(phone);
//     }else{
//         const error = new Error('mom is not happy');
//         reject(error);
//     }
// });

// const showToFriends = (phone)=>{
//     const message = 'hey friends this is my new phone '+phone.name;
//     return Promise.resolve(message);
// }

// const askMom = ()=>{
//     willGetNewPhone
//     .then(showToFriends)
//     .then((message)=>console.log(message))
//     .catch((error)=>{
//         console.log(error);
//     })
// }
// askMom();


//örnek 4
let myObj = {
    
    url :'https://randomuser.me/api/?results=5',
   
}

let request = obj => {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || 'GET' , obj.url);

        if(xhr.headers){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]);
            });
        }

        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }

        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.send(obj.body);
        
    });
}

let buildHtml = function(data){
    let users = JSON.parse(data);
    let html = '';
    
    users.results.forEach((user)=>{
        html += `
            <div>
                <img src='${user.picture.medium}'>
                <div>
                    ${user.name.title} ${user.name.first} ${user.name.last}
                </div>
            </div>
        `
    })
    document.getElementById('users').innerHTML = html;

    return Promise.resolve('Html is loaded')
}


request(myObj).then(buildHtml)
              .then(msg =>{console.log(msg);})
              .catch(err => console.log(err));