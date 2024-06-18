import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../../styles/global.css";
import Sidebar from "../../components/sidebar/sidebar";
import "../../pages/cadastro/cadastro.css";

interface ModalAtualizarDependenteProps {
    showEditModal: boolean;
    handleCloseEditModal: () => void;
    tema: string;
}

interface Documento {
    tipo: string;
    numero: string;
    dataEmissao: string;
}

const ModalAtualizarDependente: React.FC<ModalAtualizarDependenteProps> = ({ showEditModal, handleCloseEditModal, tema }) => {
    const [documentoList, setDocumentoList] = useState<Documento[]>([]);

    const addDocumentoField = () => {
        setDocumentoList([...documentoList, { tipo: "", numero: "", dataEmissao: "" }]);
    }

    return (
        <div className="modal-atualizar">
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar dependente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCPF">
                            <Form.Label className="form-titulo">CPF do Titular:</Form.Label>
                            <Form.Control type="text" placeholder="Digite o CPF do titular" />
                        </Form.Group>

                        <Form.Group controlId="formNome">
                            <Form.Label className="form-titulo">Nome:</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome" />
                        </Form.Group>

                        <Form.Group controlId="formNomeSocial">
                            <Form.Label className="form-titulo">Nome social:</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome social" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label className="form-titulo">E-mail:</Form.Label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                <Form.Control type="email" placeholder="Digite o e-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formDocumentos">
                            <Form.Label className="form-titulo">Documentos:</Form.Label>
                            <div className="mb-3">
                                <Form.Label>Tipo:</Form.Label>
                                <Form.Select>
                                    <option value="">Selecione o tipo de documento</option>
                                    <option value="CPF">Cadastro de Pessoa Física (CPF)</option>
                                    <option value="RG">Registro Geral (RG)</option>
                                    <option value="Passaporte">Passaporte</option>
                                </Form.Select>
                            </div>

                            <div className="mb-3">
                                <Form.Label>Número:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="numero"
                                    placeholder="Digite o número"
                                />
                            </div>
                            <Form.Label>Data de Emissão:</Form.Label>
                            <div className="mb-3">
                                <Form.Control
                                    type="date"
                                    name="dataEmissao"
                                    placeholder="Data de Emissão"
                                />
                            </div>
                            {documentoList.map((documento, index) => (
                                <div key={index} className="mb-3">
                                    {index === 0 && (
                                        <div className="mb-3">
                                            <Form.Label>Tipo:</Form.Label>
                                            <Form.Select>
                                                <option value="">Selecione o tipo de documento</option>
                                                <option value="CPF">Cadastro de Pessoa Física (CPF)</option>
                                                <option value="RG">Registro Geral (RG)</option>
                                                <option value="Passaporte">Passaporte</option>
                                            </Form.Select>
                                        </div>
                                    )}

                                    <Form.Label>Número:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="numero"
                                        placeholder="Digite o número"
                                        value={documento.numero}
                                    />

                                    <Form.Label>Data de Emissão:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dataEmissao"
                                        placeholder="Data de Emissão"
                                        value={documento.dataEmissao}
                                    />
                                </div>
                            ))}
                            <Button
                                variant="outline-secondary"
                                type="button"
                                style={{ backgroundColor: '#092f44', marginBottom: 10, color: 'white' }}
                                onClick={addDocumentoField}
                            >
                                Adicionar Documento
                            </Button>
                        </Form.Group>

                        <div className="input-group mb-3 d-flex justify-content-center">
                            <Button variant="outline-secondary" type="button" style={{ background: tema }}>
                                Atualizar
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalAtualizarDependente;
