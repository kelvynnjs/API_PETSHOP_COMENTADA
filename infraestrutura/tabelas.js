//Define a criação de tabelas de atendimentos.
class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }


    /*Função criar Atendimentos: Gera uma tabela atendimentos com propriedades: 
    "ID", "CLIENTE", "PET", "SERVIÇO", "DATA", Data de criação do pedido, Status do pedido e observações do pedido */
    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'


        //tenta conexão com o banco de dados, e então cria a tabaela de atendimentos
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

//Torna Tabelas disponível para o app
module.exports = new Tabelas