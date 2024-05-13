import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import React, {useState, useEffect} from "react";

//Instâncias das classes.
const controleLivro = new ControleLivro ();
const controleEditora = new ControleEditora ();

//Componente para a linha com informações do livro e botão de excluir.
function LinhaLivro (props) {
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora (livro.codEditora);
    return (
        <tr>
            <td>
                {livro.titulo}
                <button onClick={() => excluir (livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.autores.map ((autor, index) => (<li key = {index}>{autor}</li>))}</td>
        </tr>
    )
}
//Componente para carregamento dos livros.
function LivroLista () {
    const [livros, setLivros] = useState ([]);
    const [carregado, setCarregado] = useState (false);
    useEffect (() => {
        const obterLivros = async () => {
            const livros = await controleLivro.obterLivros ();
            setLivros (livros);
            setCarregado (true);
        }
        if (!carregado) {obterLivros ();}
    }, [carregado]);

    //Método para excluir o livro.
    const excluir = (codigo) => {
         controleLivro.excluir (codigo);
        setCarregado (false);
    }
    return (
        <main>
            <h1>Catálogo de livros</h1>
            <table>
                <thead>
                    <tr>Título</tr>
                    <tr>Resumo</tr>
                    <tr>Editora</tr>
                    <tr>Autores</tr>
                </thead>
                <tbody>
                    {livros.map (livro => (
                        <LinhaLivro key = {livro.codigo} livro = {livro} excluir = {excluir}/>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
export default LivroLista;