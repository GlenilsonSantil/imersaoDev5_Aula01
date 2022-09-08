function calcularMedia() {
  let nomeAluno = document.getElementById('nome').value 
  let nota1 = document.getElementById('n1').value
  let nota2 = document.getElementById('n2').value
  let nota3 = document.getElementById('n3').value
  let nota4 = document.getElementById('n4').value
  let resultado = document.getElementById('resultado')

  if(nomeAluno === '') {
    return alert('Digite seu nome')
  } else if(nota1 === '') {
    return alert('Digite sua nota')
  }else if(nota2 === '') {
    return alert('Digite sua nota')
  }else if(nota3 === '') {
    return alert('Digite sua nota')
  }else if(nota4 === '') {
    return alert('Digite sua nota')
  }

  const soma = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))
  const media = soma / 4
  const notaFixada = media.toFixed(1)

  if(notaFixada >= 11) {
    return resultado.innerHTML = `Nota Invalida ${notaFixada}`
  }else if(notaFixada <= -1) {
    return resultado.innerHTML = `Nota Invalida ${notaFixada}`
  }

 if(notaFixada >= 7) {
    return resultado.innerHTML = `
    <h3>Parabéns ${nomeAluno}!</h3>
    <p>Sua nota: ${notaFixada}</p>
    <p>Você está aprovado(a)!</p>`
  } 
  if(notaFixada >= 5) {
    return resultado.innerHTML = `
    <h3>Olá ${nomeAluno}!</h3>
    <p>Sua nota: ${notaFixada}</p>
    <p>Se esforce na recuperação!</p>`
  }else {
    return resultado.innerHTML = `
     <h3>Olá!</h3>
    <p>Esta é a sua nota: ${notaFixada}</p>
    <p>Você está reprovado(a) ${nomeAluno}.</p>
    `
  }
}
  
