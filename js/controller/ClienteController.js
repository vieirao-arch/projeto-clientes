
// js/controller/AppController.js
class AppController {

    static salvarCliente(dados) {
        const cliente = new Cliente(
            dados.nome,
            dados.tipo,
            dados.documento,
            dados.whatsapp,
            dados.email,
            dados.cidade,
            dados.estado
        );

        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        clientes.push(cliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    static listarClientes() {
        return JSON.parse(localStorage.getItem("clientes")) || [];
    }

    static filtrarClientes(filtro) {
        let clientes = this.listarClientes();

        return clientes.filter(c => {
            return (!filtro.tipo || c.tipo === filtro.tipo) &&
                   (!filtro.cidade || c.cidade === filtro.cidade) &&
                   (!filtro.estado || c.estado === filtro.estado);
        });
    }
}