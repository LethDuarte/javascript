function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') //primeira validação dos dados
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        //res.innerHTML = `Idade calculada ${idade}.` //TESTE sempre testar o programa aos poucos

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('img', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade>=0 && idade<16){
                //criança
                img.setAttribute('src', 'foto-crianca-homem.png')
            } else if (idade<30) {
                //jovem
                img.setAttribute('src', 'foto-jovem-homem.png')
            } else if (idade<60){
                //adulto
                img.setAttribute('src', 'foto-adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-homem.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade>=0 && idade<16){
                //criança
                img.setAttribute('src', 'foto-crianca-mulher.png')
            } else if (idade<30) {
                //jovem
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade<60){
                //adulto
                img.setAttribute('src', 'foto-adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-mulher.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade}.`
        res.appendChild(img)
        img.style.textAlign = 'center'
        
    }
}