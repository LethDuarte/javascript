let vetores = [8, 1, 7, 4, 2, 9]

console.log(vetores)

/*
for (let pos = 0; pos < vetores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}.`)
}*/

for (let pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}.`)
}
