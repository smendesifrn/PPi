1 -

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

2 - 

let m1: number = +prompt ("modulo 1: ")
let m2: number = +prompt ("modulo 2: ")

let media = (m1 * 4 + m2 * 6) / 10 

if (media >= 60){
  document.write ("você foi aprovado!")
}
else document.write ("reprovado")

3- 

enum Cursos {
  informatica,
  redes,
  mecatronica,
}
let curso: Cursos = informatica


4-

let estudantes: string[] = ['Adib', 'Fernanda', 'John', 'Poliana', 'Samuel', 'Milena', 'Edilson'];

estudantes [4]
estudantes.length
estudantes.push ('sabrina', 'gabriel', 'julia') 
estudantes.splice (2,3,'Poliana') 

for (let index in estudantes){
  console.log (estudantes[index]) 
}

5- nao consegui fazer :c 