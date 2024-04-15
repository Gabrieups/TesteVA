function mostrarEquipamentos() {
    const container = document.getElementById("ProdutosDisponiveis");
    container.innerHTML = "";

    equipamentos.forEach(equipamento => {
        const elemento = document.createElement("a");
        elemento.id = 'equipamentosId'
        elemento.href = '#'
        elemento.innerHTML = `<p id="tipo-equipamento"style="display: none">${equipamento.tipo}</p>
                              <div style="height: 75%; overflow: hidden; display: flex; justify-content:center"><img style="width: 100%; height: 80%; object-fit: contain; padding: .5vw" alt="imgProduto" id="imgProduto" src="src/images/${equipamento.tipo}.png"/></div>
                              <div id="texto-equipamento">
                                <p style="font-size: .9vw; margin: 0;">${equipamento.nome}</p>
                                <p style="color: #f55b41; font-size: 1.5vw; margin: 0;">R$ ${equipamento.preco}</p>
                                <p style="font-size: .9vw; margin: 0;"><strong>${equipamento.estado}<strong></p>
                              </div>`;
        container.appendChild(elemento);
    });
}

function mostrarItens() {
    const container = document.getElementById("bodyListaPedido");
    container.innerHTML = "";

    equipamentos.forEach(equipamento => {
        const elemento = document.createElement("tr");
        elemento.innerHTML = `<td>${equipamento.id}</td>
                              <td>${equipamento.nome}</td>
                              <td>${equipamento.estado}</td>     
                              <td style="border: none; border-bottom-right-radius: 1vw;">${equipamento.preco}</td>`;
        container.appendChild(elemento);
    });
}

function imgButtonAlertClick(){
    const PopUp = document.getElementById("divTopoPopUp");
    PopUp.style.visibility = "visible";
}

function imgClose(){
    const PopUp = document.getElementById("divTopoPopUp");
    PopUp.style.visibility = "hidden";
}

function btnSalvarAlerta(){
    const select = document.getElementById("drpRemoveAlerta").value;
    const imgAlerta = document.getElementById("imgAlerta");
    const txt = document.getElementById("txtAlerta");
    const arquivo = window.location.pathname;
    const url = arquivo.substring(arquivo.lastIndexOf('/') + 1);


    if(select == "S"){
        if(url == "index.html"){
            if (imgAlerta.src.includes("sino.svg")){
                imgAlerta.src = "src/images/sino_cortado.svg";
                txt.textContent = "Deseja remover o alerta de produtos disponíveis para a compra ?";
                imgClose();
            } else {

                imgAlerta.src = "src/images/sino.svg";
                txt.textContent = "Deseja ativar o alerta de produtos disponíveis para a compra ?";
                imgClose();
            }
        } else {

            if (imgAlerta.src.includes("sino.svg")){
                imgAlerta.src = "../images/sino_cortado.svg";
                txt.textContent = "Deseja remover o alerta de produtos disponíveis para a compra ?";
                imgClose();
            } else {
                
                imgAlerta.src = "../images/sino.svg";
                txt.textContent = "Deseja ativar o alerta de produtos disponíveis para a compra ?";
                imgClose();
            }
        }

    } else {
        imgClose();
    }
}
