import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import ModalVisualizarDependente from "../../components/modal/modalVisualizarDependente";
import ModalVisualizarTitular from "../../components/modal/modalVisualizarTitular";
import ModalAtualizarDependente from "../../components/modal/modalAtualizarDependente";
import ModalAtualizarTitular from "../../components/modal/modalAtualizarTitular";
import Sidebar from "../../components/sidebar/sidebar";
import { CgProfile } from "react-icons/cg";

const VisualizacaoReservas = () => {
    const [reservas, setReservas] = useState([
        {
            id: 1,
            clienteId: 1,
            clienteNome: "Livia Alves",
            acomodacaoNome: "Solteiro Simples"
        },
        {
            id: 2,
            clienteId: 2,
            clienteNome: "Maria Clara Faria",
            acomodacaoNome: "Solteiro Simples"
        }
    ]);

    return (
        <div className="container">
            <Sidebar />
            <div className="conteudo">
                <h1 className="titulo"><strong>Visualização de Reservas:</strong></h1>
                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente Titular</th>
                            <th>Acomodação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva) => (
                            <tr key={reserva.id}>
                                <td>{reserva.id}</td>
                                <td>{reserva.clienteNome}</td>
                                <td>{reserva.acomodacaoNome}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default VisualizacaoReservas;
