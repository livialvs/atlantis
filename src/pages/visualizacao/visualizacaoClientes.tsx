import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsPencil, BsTrash, BsLink45Deg } from "react-icons/bs";
import ModalVisualizarDependente from "../../components/modal/modalVisualizarDependente";
import ModalVisualizarTitular from "../../components/modal/modalVisualizarTitular";
import ModalAtualizarDependente from "../../components/modal/modalAtualizarDependente";
import ModalAtualizarTitular from "../../components/modal/modalAtualizarTitular";
import "../../styles/global.css";
import "./visualizacao.css";
import Sidebar from "../../components/sidebar/sidebar";
import { CgProfile } from "react-icons/cg";

export default function VisualizacaoClientes() {
    const [showModalVisualizarTitular, setShowModalVisualizarTitular] = useState(false);
    const [showModalAtualizarTitular, setShowModalAtualizarTitular] = useState(false);
    const [showModalVisualizarDependente, setShowModalVisualizarDependente] = useState(false);
    const [showModalAtualizarDependente, setShowModalAtualizarDependente] = useState(false);

    const handleShowVisualizarTitular = () => setShowModalVisualizarTitular(true);
    const handleCloseVisualizarTitular = () => setShowModalVisualizarTitular(false);
    const handleShowAtualizarTitular = () => setShowModalAtualizarTitular(true);
    const handleCloseAtualizarTitular = () => setShowModalAtualizarTitular(false);
    const handleShowVisualizarDependente = () => setShowModalVisualizarDependente(true);
    const handleCloseVisualizarDependente = () => setShowModalVisualizarDependente(false);
    const handleShowAtualizarDependente = () => setShowModalAtualizarDependente(true);
    const handleCloseAtualizarDependente = () => setShowModalAtualizarDependente(false);

    return (
        <div className="container">
            <Sidebar />
            <div className="conteudo">
                <h1 className="titulo"><strong>Visualização de Clientes:</strong></h1>
                <h3><strong>Titulares:</strong></h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nome Social</th>
                            <th id="link-icon">Perfil</th>
                            <th>Edição</th>
                            <th>Deleção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Livia Alves</td>
                            <td>Livia</td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowVisualizarTitular}
                                >
                                    <CgProfile style={{ fontSize: '37px', marginRight: '0.5em' }} />
                                </button>

                            </td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowAtualizarTitular}>
                                    <BsPencil style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button className="botao-tabela">
                                    <BsTrash style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Maria Clara Faria</td>
                            <td>Clara</td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowVisualizarTitular}
                                >
                                    <CgProfile style={{ fontSize: '37px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowAtualizarTitular}>
                                    <BsPencil style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button className="botao-tabela">
                                    <BsTrash style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <h3><strong>Dependentes:</strong></h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nome Social</th>
                            <th id="link-icon">Perfil</th>
                            <th>Edição</th>
                            <th>Deleção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lexie</td>
                            <td>Lex</td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowVisualizarDependente}
                                >
                                    <CgProfile style={{ fontSize: '37px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowAtualizarDependente}>
                                    <BsPencil style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button className="botao-tabela">
                                    <BsTrash style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Gatinho</td>
                            <td>Gato</td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowVisualizarDependente}
                                >
                                    <CgProfile style={{ fontSize: '37px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button
                                    className="botao-tabela"
                                    onClick={handleShowAtualizarDependente}>
                                    <BsPencil style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                            <td id="link-icon">
                                <button className="botao-tabela">
                                    <BsTrash style={{ fontSize: '30px', marginRight: '0.5em' }} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* Modais */}
                <ModalVisualizarTitular show={showModalVisualizarTitular} handleClose={handleCloseVisualizarTitular} />
                <ModalAtualizarTitular showEditModal={showModalAtualizarTitular} handleCloseEditModal={handleCloseAtualizarTitular} tema="light" />
                <ModalVisualizarDependente show={showModalVisualizarDependente} handleClose={handleCloseVisualizarDependente} />
                <ModalAtualizarDependente showEditModal={showModalAtualizarDependente} handleCloseEditModal={handleCloseAtualizarDependente} tema="light" />
            </div>
        </div>
    );
}
