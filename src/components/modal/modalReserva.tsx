import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface ModalReservaProps {
    show: boolean;
    handleClose: () => void;
}

const ModalReserva: React.FC<ModalReservaProps> = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Fazer uma Reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formDocumento">
                        <Form.Label>Documento do cliente titular</Form.Label>
                        <Form.Control type="text" placeholder="Insira o número do documento" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAcomodacao">
                        <Form.Label>Acomodação</Form.Label>
                        <Form.Select>
                            <option disabled selected>Selecione a acomodação desejada</option>
                            <option value="Solteiro Simples">Solteiro Simples</option>
                            <option value="Solteiro Mais">Solteiro Mais</option>
                            <option value="Casal Simples">Casal Simples</option>
                            <option value="Família Simples">Família Simples</option>
                            <option value="Família Mais">Família Mais</option>
                            <option value="Família Super">Família Super</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                <Button variant="primary" onClick={handleClose} style={{backgroundColor: '#092f44', border: '#092f44'}}>Reservar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalReserva;
