let x = 10;

for(let y = 8; y >= 3; y--){
    if(y % 2 === 0 && y % 3 === 0){
        x += y;
    } else{
        x--;
    }
    console.log(`${y}`);
}

console.log(x);


