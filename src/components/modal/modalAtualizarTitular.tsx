import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../../styles/global.css";
import Sidebar from "../../components/sidebar/sidebar";
import "../../pages/cadastro/cadastro.css";

interface ModalAtualizarTitularProps {
    showEditModal: boolean;
    handleCloseEditModal: () => void;
    tema: string;
}

interface Documento {
    tipo: string;
    numero: string;
    dataEmissao: string;
}

interface Telefone {
    ddd: string;
    numero: string;
}

const ModalAtualizarTitular: React.FC<ModalAtualizarTitularProps> = ({ showEditModal, handleCloseEditModal, tema }) => {
    const [documentoList, setDocumentoList] = useState<Documento[]>([]);
    const [telefoneList, setTelefoneList] = useState<Telefone[]>([]);
    const [endereco, setEndereco] = useState({
        pais: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        codigoPostal: ""
    });

    const addDocumentoField = () => {
        setDocumentoList([...documentoList, { tipo: "", numero: "", dataEmissao: "" }]);
    }

    const addTelefoneField = () => {
        setTelefoneList([...telefoneList, { ddd: "", numero: "" }]);
    };

    return (
        <div className="modal-atualizar">
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                                <Form.Control type="email" placeholder="Digite o e-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formCpf">
                            <Form.Label className="form-titulo">CPF:</Form.Label>
                            <Form.Control type="text" placeholder="Digite o CPF" />
                        </Form.Group>

                        <Form.Group controlId="formDataEmissaoCpf">
                            <Form.Label className="form-titulo">Data de Emissão do CPF:</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group controlId="formEndereco">
                            <Form.Label className="form-titulo">Endereço:</Form.Label>
                            <Form.Control
                                type="text"
                                name="pais"
                                placeholder="Digite o país"
                                value={endereco.pais}
                                className="mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="estado"
                                placeholder="Digite o estado"
                                value={endereco.estado}
                                className="mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="cidade"
                                placeholder="Digite a cidade"
                                value={endereco.cidade}
                                className="mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="bairro"
                                placeholder="Digite o bairro"
                                value={endereco.bairro}
                                className="mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="rua"
                                placeholder="Digite a rua"
                                value={endereco.rua}
                                className="mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="numero"
                                placeholder="Digite o número"
                                value={endereco.numero}
                                className="mb-2"
                            />
                            <Form.Control
                                type="text"
                                name="codigoPostal"
                                placeholder="Digite o código postal"
                                value={endereco.codigoPostal}
                                className="mb-2"
                            />
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
                    <Form.Group controlId="formTelefone">
                        <Form.Label className="form-titulo">Telefone:</Form.Label>
                        <div className="input-group mb-3">
                            <Form.Control
                                type="text"
                                name="ddd"
                                placeholder="Digite o DDD"
                            />
                            <Form.Control
                                type="text"
                                name="numero"
                                placeholder="Digite o número"
                            />
                        </div>
                        {telefoneList.slice(1).map((telefone, index) => (
                            <div key={index} className="input-group mb-3">
                                <Form.Control
                                    type="text"
                                    name="ddd"
                                    placeholder="Digite o DDD"
                                />
                                <Form.Control
                                    type="text"
                                    name="numero"
                                    placeholder="Digite o número"
                                />
                            </div>
                        ))}
                        <Button
                            variant="outline-secondary"
                            type="button"
                            style={{ backgroundColor: '#092f44', marginBottom: 10, color: 'white' }}
                            onClick={addTelefoneField}
                        >
                            Adicionar Telefone
                        </Button>
                    </Form.Group>

                        <div className="input-group mb-3 d-flex justify-content-center">
                            <Button variant="outline-secondary" type="button" style={{ backgroundColor: '#092f44', color: 'white' }}>
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

export default ModalAtualizarTitular;
