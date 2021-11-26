window.onload = function (){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");
  const exibir = document.querySelector("#buscarQR");

//ação de cadastrar uma pessoa e curso

cadastrar.addEventListener("click", function(){
  navigator.connection.type;
   if(navigator.connection.type == Connection.NONE){
     function onConfirm(buttonIndex){
       function onConfirm(buttonIndex){
         alert('You selected button '+ buttonIndex);
       }
     }
     navigator.notification.confirm(
       'voce está sem conexão,saia ou volte',
       onConfirm,
       'Sem Internet',
       ['Tentar Novamente','Sair']
     );
   }else{
    let formData = new FormData();
    formData.append('nome', `${nome.value}`);
    formData.append('curso', `${curso.value}`);

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
        {
            body: formData,
            method: "post",
            mode: 'cors',
            cache: 'default'
        }).then(alert("Cadastrado"));
    }
  });

    //metodo que lista uma pessoa
 buscar.addEventListener("click", function(){
   navigator.connection.type;
   if(navigator.connection.type == Connection.NONE){
     function onConfirm(buttonIndex){
       function onConfirm(buttonIndex){
         alert('You selected button '+ buttonIndex);
       }
     }
     navigator.notification.confirm(
       'voce está sem conexão,saia ou volte',
       onConfirm,
       'Sem Internet',
       ['Tentar Novamente','Sair']
     );
   }else{

    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,
    {
      method:'GET',
      mode: 'cors',
      cache: 'default'
    })
      .then(response => {response.json()
        .then(data => {
          document.querySelector("#nome").value = data['nome'];
          document.querySelector("#curso").value = data['curso'];
        })
      });
     }
  });

    //metodo para deletar o registro 

    deletar.addEventListener("click", function(){
      navigator.connection.type;
   if(navigator.connection.type == Connection.NONE){
     function onConfirm(buttonIndex){
       function onConfirm(buttonIndex){
         alert('You selected button '+ buttonIndex);
       }
     }
     navigator.notification.confirm(
       'voce está sem conexão,saia ou volte',
       onConfirm,
       'Sem Internet',
       ['Tentar Novamente','Sair']
     );
   }else{
      fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
        method:"GET",
        mode:'cors',
        cache:'default'
      }).then(()=>{
      alert("Registro deletado")
      limparCampos();
      });
     }
    })

    //metodo para alterar os dados dos registros
    alterar.addEventListener("click", function(){
    navigator.connection.type;
   if(navigator.connection.type == Connection.NONE){
     function onConfirm(buttonIndex){
       function onConfirm(buttonIndex){
         alert('You selected button '+ buttonIndex);
       }
     }
     navigator.notification.confirm(
       'voce está sem conexão,saia ou volte',
       onConfirm,
       'Sem Internet',
       ['Tentar Novamente','Sair']
     );
   }else{
       fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
        method:"PUT",
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
      }
    })

    //ação de limpar os campos
    function limparCampos (){
      nome.value = "";
      curso.value = "";
    }
    buscarQR.addEventListener("click", function(){
      cordova.plugins.barcodeScanner.scan(
        function (result) {
            id.value = result.text;
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      );
    });
  }