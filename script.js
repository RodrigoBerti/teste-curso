function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora sao ${hora} horas`
    if(hora >= 0 && hora < 12){//dia
        img.src = 'manha2.png'
        document.body.style.background = '#d8d5d1'
    }else if(hora >= 12 && hora <= 18){//tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fe8f01'
    }else{
        img.src = 'noite2.png'
        document.body.style.background = '#022346'
    }

}


