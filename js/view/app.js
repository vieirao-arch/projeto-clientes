


class View {

    static init() {
        document.getElementById("btnCadastrar")
            .addEventListener("click", View.cadastrar);

        document.getElementById("btnFiltrar")
            .addEventListener("click", View.filtrar);

        document.getElementById("tipo")
            .addEventListener("change", View.alterarTipo);

        View.renderLista(AppController.listarClientes());
    }

    static alterarTipo() {
        const tipo = document.getElementById("tipo").value;
        const doc = document.getElementById("documento");

        doc.placeholder = tipo === "PF" ? "CPF" : "CNPJ";
    }

    static cadastrar() {
        const dados = {
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            documento: document.getElementById("documento").value,
            whatsapp: document.getElementById("whatsapp").value,
            email: document.getElementById("email").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value
        };

        AppController.salvarCliente(dados);

        View.renderLista(AppController.listarClientes());
        View.limpar();
    }

    static filtrar() {
        const filtro = {
            tipo: document.getElementById("filtroTipo").value,
            cidade: document.getElementById("filtroCidade").value,
            estado: document.getElementById("filtroEstado").value
        };

        const clientes = AppController.filtrarClientes(filtro);
        View.renderLista(clientes);
    }

    static renderLista(clientes) {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        clientes.forEach(c => {
            const li = document.createElement("li");

            const tipoDoc = c.tipo === "PF" ? "CPF" : "CNPJ";

            li.innerText = `${c.nome} - ${c.tipo} - ${tipoDoc}: ${c.documento} - ${c.cidade}/${c.estado}`;
            lista.appendChild(li);
        });
    }

    static limpar() {
        document.getElementById("nome").value = "";
        document.getElementById("documento").value = "";
        document.getElementById("whatsapp").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
    }
}

View.init();