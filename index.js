const acionaSubmit = (event) => {
    //É importante impedir que o evento recarregue a página antes de
    //finalizar a requisição
    event.preventDefault();
    //Capturando os dados do form
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const telefone =
        document.querySelector('input[name=telefone]').value;
    //Aqui é feita a chamada a API (substituindo o action)
    //Para isso é preciso passar alguns parâmetros de confuguração:
    //Especificar o método: POST, formata os dados para o formato JSON -
    //função JSON.stringify)
    fetch("https://api.sheetmonkey.io/form/6Npfk6JMW67ssziY8EberM", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        //Dados que serão enviados para o Google Sheet - Excel online
        body: JSON.stringify({ nome, email, telefone }),
    });
}
    //Precisamos 'capturar' o formulário, ou seja, selecioná-lo e adicionar
    //um evento de submit
    //Quando o evento de submit do form for disparado, será executada a
   // função acionaSubmit
document.querySelector('form').addEventListener('submit', acionaSubmit);