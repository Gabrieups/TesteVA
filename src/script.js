// function MostrarFiltro() {
//     var filtros = document.getElementById("menu-container");
//     filtros.classList.toggle('show');
// }



function mostrarEquipamentos() {
    const container = document.getElementById("ProdutosDisponiveis");
    container.innerHTML = ""; // Limpa a lista atual

    equipamentos.forEach(equipamento => {
        const elemento = document.createElement("div");
        elemento.id = 'equipamentosId'
        elemento.innerHTML = `<p id="tipo-equipamento"style="display: none">${equipamento.tipo}</p>
                              <div style="height: 75%; overflow: hidden; display: flex; justify-content:center"><img style="width: 100%; height: 80%; object-fit: contain; padding: .5vw" alt="imgProduto" id="imgProduto" src="src/images/${equipamento.tipo}.png"/></div>
                              <div id="texto-equipamento"><p>${equipamento.nome}</p>
                              <p>Status: ${equipamento.status}</p>
                              <p>R$ ${equipamento.preco}</p></div>`;
        container.appendChild(elemento);
    });
}
