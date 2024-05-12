import Editora from "../modelo/Editora";

const editoras: Array <Editora> = [
    {codEditora: 123, nome: "Editora Janeiro"},
    {codEditora: 456, nome: "Editora Fevereiro"},
    {codEditora: 789, nome: "Editora Março"}
];

class ControleEditora {
    getNomeEditora (codEditora: number): string {
        const editora = editoras.filter (editora => editora.codEditora === codEditora) [0];
        return editora.nome;
    }
    getEditoras () {
        return editoras;
    }
}