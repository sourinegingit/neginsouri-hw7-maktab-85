// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");


// answere
// برای تبدیل ب ارایه باید از array.from 
// استفاده کنیم
// چون که map.key 
// iterate میکند
let map = new Map();

map.set("name", "John");
map.set("last name", "negin");
console.log(map);
let keys = Array.from(map.keys());



alert(keys);