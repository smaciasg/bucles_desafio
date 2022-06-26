// Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
var sum=0;
for(var i=0;i<=100;i++){
    sum +=i;
}
console.log(sum);