
// ordenação de vetores
//for (i; i<5; i++){vet = Number(prompt("Informe um numero"))}

    var vet = [6,4,8,2,7,1]
    var i = 0
    var j = 0
    var aux = 0


    for (i; i<6; i++) {
    for (j=i+1; j<6; j++){
        if (vet[i]>vet[j]){
            aux = vet[i]
            vet [i]= vet[j]
            vet [j] = aux
            
        
        }
        
    }
    }
console.log(vet);



