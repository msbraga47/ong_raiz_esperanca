// Máscaras simples (client-side); não substitui validação no servidor.
// Só para facilitar preenchimento manual (versão didática).
(function(){
  function setCursorToEnd(el){
    if(typeof el.selectionStart == "number"){
      el.selectionStart = el.selectionEnd = el.value.length;
    }
  }

  function maskCPF(v){
    return v.replace(/\D/g,'')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  }

  function maskPhone(v){
    v = v.replace(/\D/g,'');
    if(v.length <= 10){
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3').replace(/-$/,'');
    } else {
      return v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3').replace(/-$/,'');
    }
  }

  function maskCEP(v){
    return v.replace(/\D/g,'').replace(/(\d{5})(\d{1,3})/,'$1-$2').replace(/-$/,'');
  }

  document.addEventListener('input', function(e){
    const t = e.target;
    if(!t) return;
    if(t.id === 'cpf'){
      const old = t.value;
      t.value = maskCPF(old);
      setCursorToEnd(t);
    } else if(t.id === 'telefone'){
      const old = t.value;
      t.value = maskPhone(old);
      setCursorToEnd(t);
    } else if(t.id === 'cep'){
      const old = t.value;
      t.value = maskCEP(old);
      setCursorToEnd(t);
    }
  });
})();
