import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalAcomodacao from '../modal/modalAcomodacao';

export default function CardAcomodacao(props: any) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imagem} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>{props.descricao}</Card.Text>
                    <Button
                        style={{ backgroundColor: '#092f44', border: '#092f44', marginTop: 'auto' }}
                        variant="primary"
                        onClick={handleShow}
                    >
                        Ver detalhes
                    </Button>
                </Card.Body>
            </Card>

            <ModalAcomodacao
                show={showModal}
                onClose={handleClose}
                titulo={props.titulo}
                descricao={props.descricao}
                imagem={props.imagem}
                camaSolteiro={props.camaSolteiro}
                camaCasal={props.camaCasal}
                suite={props.suite}
                garagem={props.garagem}
                climatizacao={props.climatizacao}
            />
        </>
    );
}