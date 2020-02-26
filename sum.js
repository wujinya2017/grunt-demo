#!/usr/bin/node
if(process.argv.length != 4){
  console.log('sun x y');
  process.exit(1);
}
var x=Number(process.argv[2]);
var y=Number(process.argv[3]);

console.log('${x}+${y}=${x+y}');

function add(x,y){
  if((typeof x) === 'number' && (typeof y) === 'number'){
    return x+y
  } else{
    return NaN
  }
}
