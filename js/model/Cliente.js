// js/model/Cliente.js

/**
 * Classe que representa o modelo de dados de um Cliente.
 * Define a estrutura e os atributos básicos que compõem um cliente na aplicação.
 */
class Cliente {
    
    /**
     * Construtor da classe Cliente.
     * É chamado automaticamente quando uma nova instância (objeto) desta classe é criada.
     * * @param {string} nome - O nome completo do cliente.
     * @param {string} tipo - O tipo de cliente (ex: Pessoa Física, Pessoa Jurídica, etc.).
     * @param {string} documento - O documento de identificação (ex: NIF, Cartão de Cidadão, CPF).
     * @param {string} whatsapp - O número de contacto de WhatsApp.
     * @param {string} email - O endereço de e-mail do cliente.
     * @param {string} cidade - A cidade de residência ou localização.
     * @param {string} estado - O estado ou distrito de residência.
     */
    constructor(nome, tipo, documento, whatsapp, email, cidade, estado) {
        // Atribui o valor do parâmetro 'nome' à propriedade 'nome' da instância atual (this)
        this.nome = nome;
        
        // Atribui o valor do parâmetro 'tipo' à propriedade 'tipo' da instância atual
        this.tipo = tipo;
        
        // Atribui o valor do parâmetro 'documento' à propriedade 'documento' da instância atual
        this.documento = documento;
        
        // Atribui o valor do parâmetro 'whatsapp' à propriedade 'whatsapp' da instância atual
        this.whatsapp = whatsapp;
        
        // Atribui o valor do parâmetro 'email' à propriedade 'email' da instância atual
        this.email = email;
        
        // Atribui o valor do parâmetro 'cidade' à propriedade 'cidade' da instância atual
        this.cidade = cidade;
        
        // Atribui o valor do parâmetro 'estado' à propriedade 'estado' da instância atual
        this.estado = estado;
    }
}