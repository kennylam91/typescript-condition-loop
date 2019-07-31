let count:number = 50;
if (count > 0) {
  count--;
} else {
  count = 0;
}
console.log(count);

const keys:string="abcdef";
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

console.log("While loop")
let i = 0;
while (i < keys.length) {
  console.log(keys[i]);
  i++;
}

console.log("for-of loop")
for (const item of keys) {
  console.log(item);
}
console.log("for-in loop")
const user = {
  name:"Bob",
  age: 55
}
for(var key in user){
  // @ts-ignore
  console.log(key+": "+user[key])
}
