let contar = (n) =>{
   if(n === 0){
    console.log("Fim de contagem!");
    return;
   }

   console.log(n);
   contar(n - 1);
  
}

console.log(contar(9));