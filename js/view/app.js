/**
 * Classe responsável por gerir a interface com o utilizador (View).
 * Manipula o DOM (Document Object Model), capturando eventos e atualizando o ecrã.
 */
class View {

    /**
     * Inicializa a aplicação configurando os "event listeners" (escutadores de eventos)
     * para os botões e campos, e carrega a lista inicial de clientes no arranque.
     */
    static init() {
        // Adiciona um evento de clique ao botão "Cadastrar" para acionar o método View.cadastrar
        document.getElementById("btnCadastrar")
            .addEventListener("click", View.cadastrar);

        // Adiciona um evento de clique ao botão "Filtrar" para acionar o método View.filtrar
        document.getElementById("btnFiltrar")
            .addEventListener("click", View.filtrar);

        // Adiciona um evento de mudança (change) à dropdown "tipo" para alterar dinamicamente o placeholder do documento
        document.getElementById("tipo")
            .addEventListener("change", View.alterarTipo);

        // Renderiza a lista inicial no ecrã com todos os clientes já guardados
        View.renderLista(AppController.listarClientes());
    }

    /**
     * Altera a dica (placeholder) do campo de documento consoante o tipo de cliente selecionado na interface.
     */
    static alterarTipo() {
        // Obtém o valor atualmente selecionado no campo "tipo" (ex: "PF" ou "PJ")
        const tipo = document.getElementById("tipo").value;
        // Obtém a referência do elemento input destinado ao documento
        const doc = document.getElementById("documento");

        // Utiliza um operador ternário: se o tipo for "PF", o placeholder passa a "CPF", senão passa a "CNPJ"
        doc.placeholder = tipo === "PF" ? "CPF" : "CNPJ";
    }

    /**
     * Recolhe os dados preenchidos no formulário, guarda-os através do controlador e atualiza o ecrã.
     */
    static cadastrar() {
        // Cria um objeto associando os valores de cada elemento HTML às respetivas propriedades
        const dados = {
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            documento: document.getElementById("documento").value,
            whatsapp: document.getElementById("whatsapp").value,
            email: document.getElementById("email").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value
        };

        // Chama o método do AppController para guardar o objeto com os dados recém-recolhidos
        AppController.salvarCliente(dados);

        // Atualiza o ecrã pedindo ao controlador a lista mais recente e passando-a ao método renderLista
        View.renderLista(AppController.listarClientes());
        // Limpa os campos do formulário após o registo ser concluído
        View.limpar();
    }

    /**
     * Lê os critérios inseridos nos campos de filtro e atualiza a lista apresentada no ecrã em conformidade.
     */
    static filtrar() {
        // Cria um objeto com os valores preenchidos nos campos específicos de filtragem
        const filtro = {
            tipo: document.getElementById("filtroTipo").value,
            cidade: document.getElementById("filtroCidade").value,
            estado: document.getElementById("filtroEstado").value
        };

        // Obtém o array de clientes já filtrado através do AppController
        const clientes = AppController.filtrarClientes(filtro);
        // Processa e apresenta visualmente apenas os clientes que respeitam o filtro
        View.renderLista(clientes);
    }

    /**
     * Constrói e exibe visualmente a lista de clientes (elementos <li>) no elemento HTML correspondente.
     * @param {Array} clientes - O array contendo os objetos de clientes a serem renderizados.
     */
    static renderLista(clientes) {
        // Obtém a referência ao elemento contentor da lista (geralmente um <ul>)
        const lista = document.getElementById("lista");
        // Esvazia completamente o conteúdo atual da lista no DOM para evitar duplicação
        lista.innerHTML = "";

        // Itera (percorre) cada cliente dentro do array fornecido
        clientes.forEach(c => {
            // Cria um novo nó (node) de HTML do tipo <li> (item de lista)
            const li = document.createElement("li");

            // Determina a sigla do documento a exibir para compor a string de texto final
            const tipoDoc = c.tipo === "PF" ? "CPF" : "CNPJ";

            // Atribui o texto formatado (template string) com as propriedades do cliente ao elemento <li>
            li.innerText = `${c.nome} - ${c.tipo} - ${tipoDoc}: ${c.documento} - ${c.cidade}/${c.estado}`;
            // Anexa o novo elemento <li> como filho da lista principal (<ul>)
            lista.appendChild(li);
        });
    }

    /**
     * Limpa (repõe a vazio) todos os valores inseridos nos campos do formulário de registo de clientes.
     */
    static limpar() {
        // Altera o atributo "value" de cada input específico para uma string vazia ""
        document.getElementById("nome").value = "";
        document.getElementById("documento").value = "";
        document.getElementById("whatsapp").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
    }
}

// Inicia os processos da View mal o ficheiro script seja carregado e interpretado pelo browser
View.init();