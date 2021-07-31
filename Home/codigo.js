function calcular() {
    
    var capital = document.getElementsByClassName('numero1')
    var rentabilidade = document.getElementById('numero2')
    var anos = document.getElementById('numero3')
    var res = document.getElementById('rua')
    var capital1 = Number(capital.value)
    var rentabilidade1 = Number(rentabilidade.value)
    var anos1 = Number(anos.value)
    var soma = capital1 + rentabilidade1 + anos1
      
       console.log(soma)
      res.innerHTML = `valor da ${soma}`
  
}

