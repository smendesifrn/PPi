let n1: number = +prompt ("numero 1: ")
let n2: number = +prompt ("numero 2: ")
let n3: number = +prompt ("numero 3: ")

let soma: boolean 
if (n1 + n2 > n3 || n1 + n3 > n2 || n2 + n3 > n1 ){
  soma = false 
}
else{
  soma = true
}