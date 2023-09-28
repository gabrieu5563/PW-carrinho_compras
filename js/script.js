function cadastrar()
{
    const produto = {
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        valor: document.getElementById("prod_valor").value
    }

    const item = document.createElement("li")
    const prod_nome = document.createElement("h3")
    const prod_marca = document.createElement("p")
    const prod_valor = document.createElement("p")

    prod_nome.innerHTML = produto.nome
    prod_marca.innerHTML = produto.marca
    prod_valor.innerHTML = produto.valor

    item.appendChild(prod_nome)
    item.appendChild(prod_marca)
    item.appendChild(prod_valor)

    document.getElementById("lista_html").appendChild(item)

    console.log(produto)
    console.log(lista)
}