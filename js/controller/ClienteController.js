// js/controller/AppController.js

/**
 * Classe responsável por gerir as operações da aplicação relacionadas aos clientes,
 * utilizando o armazenamento local do navegador (localStorage) como base de dados.
 */
class AppController {

    /**
     * Guarda um novo cliente no localStorage.
     * @param {Object} dados - Objeto contendo os dados do formulário/cliente.
     */
    static salvarCliente(dados) {
        // Cria uma nova instância do objeto Cliente com os dados recebidos
        const cliente = new Cliente(
            dados.nome,
            dados.tipo,
            dados.documento,
            dados.whatsapp,
            dados.email,
            dados.cidade,
            dados.estado
        );

        // Obtém a lista atual de clientes do localStorage e converte de JSON para array. 
        // Se não existir nada, inicializa como um array vazio ([]).
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        
        // Adiciona o novo cliente ao final do array
        clientes.push(cliente);
        
        // Converte o array atualizado de volta para string JSON e guarda no localStorage
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    /**
     * Recupera todos os clientes armazenados.
     * @returns {Array} Array com todos os clientes ou um array vazio.
     */
    static listarClientes() {
        // Retorna a lista de clientes diretamente do localStorage
        return JSON.parse(localStorage.getItem("clientes")) || [];
    }

    /**
     * Filtra a lista de clientes com base nos critérios especificados no parâmetro.
     * @param {Object} filtro - Objeto contendo as propriedades para filtrar (tipo, cidade, estado).
     * @returns {Array} Array de clientes que correspondem aos critérios.
     */
    static filtrarClientes(filtro) {
        // Chama o método listarClientes() desta mesma classe para obter todos os registos
        let clientes = this.listarClientes();

        // Utiliza a função filter() do array para retornar apenas os itens que cumprem as condições
        return clientes.filter(c => {
            // A lógica de retorno verifica 3 condições:
            // 1. O filtro por "tipo" não foi definido (logo é ignorado) OU o "tipo" do cliente é igual ao pesquisado.
            // 2. O filtro por "cidade" não foi definido OU a "cidade" do cliente é igual à pesquisada.
            // 3. O filtro por "estado" não foi definido OU o "estado" do cliente é igual ao pesquisado.
            // Todas as condições ativas têm de ser verdadeiras (uso do operador && - AND).
            return (!filtro.tipo || c.tipo === filtro.tipo) &&
                   (!filtro.cidade || c.cidade === filtro.cidade) &&
                   (!filtro.estado || c.estado === filtro.estado);
        });
    }
}