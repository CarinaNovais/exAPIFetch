window.onload = function (){
  const cadastrar = document.querySelector("#cadastrar");
  const cadastrar = document.querySelector("#nome");
  const cadastrar = document.querySelector("#curso");


//ação de cadastrar uma pessoa e curso
  cadastrar.addEventListener('click', function(){
  let formdata = new FormData();
  formdata.append('nome:', `${nome.value}`);
  formdata.append('curso:',`${curso.value}` );


      fetch ("",
      {
        body:formdata,
        method:"post",
        mode:'cors',
        cache:'default'
      }).then(()=>{
        alert("Registro efetuado com suucesso");
        limparCampos();
          }
        );
    });
    //ação de limpar os campos
    function limparCampos (){
      nome.value = "";
      curso.value = "";
    }
  }

