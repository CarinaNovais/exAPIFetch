window.onload = function (){
  const cadastrar = document.querySelector("#cadastrar");
  const cadastrar = document.querySelector("#nome");
  const cadastrar = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");

//ação de cadastrar uma pessoa e curso
  cadastrar.addEventListener('click', function() {
    let formdata = new FormData();
  formdata.append('nome:', `${nome.value}`);
  formdata.append('curso:',`${curso.value}` );


      fetch (`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,
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

    //metodo que lista uma pessoa
    buscar.addEventListener("click", function(){
      fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
        method:"get",
        mode:'cors',
        cache:'default'
      }).then(response=>{
        responde.json().then(data => {
          nome.value = data ['nome'];
          curso.value = data ['curso'];
        
        })
      })
    });
    
    //metodo para deletar o registro 

    deletar.addEventListener("click", function(){
      fetch(`......./${id.value}`,{
        method:"get",
        mode:'cors',
        cache:'default'
      }).then(()=>{
      alert("Registro deletado")
      limparCampos();
      });
    })

    //metodo para alterar os dados dos registros
    alterar.addEventListener("click", function(){
       fetch(`......./${id.value}`,{
        method:"put",
        mode:'cors',
        cache:'default',
        headers:{
          'Conntent-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify({
          'nome': `${nome.value}`,
          'curso': `${curso.value}`
        })
      }).then(()=>{
        alert("registro alterado com sucesso")
        limparCampos();
      });
    })

    //ação de limpar os campos
    function limparCampos (){
      nome.value = "";
      curso.value = "";
    }
  }

