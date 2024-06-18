import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface ModalVisualizarTitularProps {
    show: boolean;
    handleClose: () => void;
}

const ModalVisualizarTitular: React.FC<ModalVisualizarTitularProps> = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Informações do cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formDadosPessoais">
                        <h5>Dados Pessoais</h5>
                        <p><strong>Nome:</strong> Livia Alves</p>
                        <p><strong>Nome Social:</strong> Livia</p>
                        <p><strong>E-mail:</strong> livia.faria@gmail.com</p>
                        <p><strong>Data de nascimento:</strong> 21/02/2005</p>
                    </Form.Group>

                    <Form.Group controlId="formDocumentos">
                        <h5>Documentos</h5>
                        <p><strong>Tipo:</strong> CPF</p>
                        <p><strong>Número:</strong> 9282737282</p>
                        <p><strong>Data de emissão:</strong></p>
                    </Form.Group>

                    <Form.Group controlId="formTelefones">
                        <h5>Telefones</h5>
                        <p><strong>Número:</strong> (12)98283-7386</p>
                    </Form.Group>

                    <Form.Group controlId="formEndereco">
                        <h5>Endereço</h5>
                        <p><strong>Rua:</strong> Rua Tal</p>
                        <p><strong>Bairro:</strong> Bairro Tal</p>
                        <p><strong>Cidade:</strong> Cidade Tal</p>
                        <p><strong>Estado:</strong> Estado Tal</p>
                        <p><strong>Código Postal:</strong> Código-postal Tal</p>
                    </Form.Group>


                    <Form.Group controlId="formDependentes">
                        <h5>Dependentes</h5>
                        <p><strong>Nome:</strong> Lexie</p>
                        <p><strong>Nome Social:</strong> Lex</p>
                        <p><strong>E-mail:</strong> lexie.lexinha@gmail.com</p>
                        <p><strong>Data de nascimento:</strong> 03/09/2017</p>
                    </Form.Group>

                    <Form.Group controlId="formAcomodacao">
                        <h5>Acomodação</h5>
                        <p><strong>Nome:</strong> Solteiro Simples</p>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalVisualizarTitular;
