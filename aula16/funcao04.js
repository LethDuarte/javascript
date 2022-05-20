function fatorial(n) {
    let fat = 1
    for (var i = n; i >=1; i--){
        fat *= i // fat = fat * i 
    }
    return fat
}

console.log(fatorial(4))


// 4! = 4 * 3 * 2 * 1