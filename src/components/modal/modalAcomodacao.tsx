import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ModalAcomodacao(props: any) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: 'center', width:'100%' }}>{props.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img 
                    src={props.imagem} 
                    alt={props.titulo} 
                    style={{ 
                        width: '100%', 
                        maxHeight: '300px', 
                        objectFit: 'cover' 
                    }} 
                />
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quantidade de camas de solteiro: {props.camaSolteiro}</ListGroup.Item>
                    <ListGroup.Item>Quantidade de camas de casal: {props.camaCasal}</ListGroup.Item>
                    <ListGroup.Item>Quantidade de suítes: {props.suite}</ListGroup.Item>
                    <ListGroup.Item>Quantidade de garagens: {props.garagem}</ListGroup.Item>
                    <ListGroup.Item>Climatização: {props.climatizacao}</ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ backgroundColor: '#092f44' }} variant="secondary" onClick={props.onClose}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}
