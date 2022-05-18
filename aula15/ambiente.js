let num = [5, 8, 9, 3, 2]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('Posição não encontrada.')
} else {
    console.log(`O valor 4 está na posição ${pos}.`)
}
