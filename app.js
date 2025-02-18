// var a = document.querySelectorAll("h1");
// console.log(a);
// a.innerHTML = "bhai kesa hai"
// a.style.color = "red"


// const proe = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello");
//         resolve();
//     },1000) 

// })
// proe.then(function(){
//     console.log("no nhi hai");
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hai bhai bolna !!!");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("done");
    
// })



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("hi bhailog !!");
        resolve({user:"sujal",id:1234})
    },3000)
}).then(function(user){
    console.log(user);
    
})


