function validar(){
    var nome = form.nome.value;
    var email = form.email.value;
    var telefone = form.telefone.value;
    var mensagem = form.mensagem.value;
    
    if(nome == ""){
        alert("FORMULARIO INCOMPLETO");
        form.nome.focus();
        return false
    }
    
    if(email == ""){
        alert("FORMULARIO INCOMPLETO");
        form.email.focus();
        return false
    }
    
    if(telefone == ""){
        alert("FORMULARIO INCOMPLETO");
        form.telefone.focus();
        return false
    }


    if(mensagem == ""){
        alert("FORMULARIO INCOMPLETO");
        form.mensagem.focus();
        return false
    }

}
