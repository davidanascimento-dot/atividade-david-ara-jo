 const botao =  document.getElementById('btn')



  botao.addEventListener('click',()=>{
  alert("teste de backEnd")
  })

  let nome = 'david'
  let num = 2 
  let numero = "2"
  let nome1 = ""
  console.log(numero * 3)
  console.log(numero)
  numero = parseInt(numero)
  console.log(typeof numero)
  console.log(typeof nome)

for(i = 0; i < 33; i ++){
console.log(i)
}


function idade(idade) {
if (idade >= 18 ) {
   console.log("pode entrar: ");

} else {
  console.log("barrado beta")
}  

}

if (idade === "pode entrar") {
console.log("o teste falhou")

}else{
console.log("não pode entrar por limite de idade")
}

let resultado3 = idade(18)