import CardAcomodacao from "../../components/cards/cardAcomodacao";
import Sidebar from "../../components/sidebar/sidebar";
import solteiroSimples from "../../assets/solteiroSimples.jpg";
import solteiroMais from "../../assets/solteiroMais.jpg";
import casalSimples from "../../assets/casalSimples.jpg";
import familiaSimples from "../../assets/familiaSimples.jpg";
import familiaMais from "../../assets/familiaMais.jpg";
import familiaSuper from "../../assets/familiaSuper.jpg";
import ModalReserva from "../../components/modal/modalReserva"; 
import "../../styles/global.css";
import "./home.css";
import { useState } from "react";

export default function Home(props: any) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="container">
            <Sidebar />
            <main className="content">
                <div>
                    <h1 className="titulo"><strong>Bem-Vindos ao Atlantis!</strong></h1>
                    <h4 className="titulo">O melhor sistema de gerenciamento de parques aquáticos e hotéis.</h4>
                </div>

                <br></br>
                <h2 className="titulo"><strong>Veja nossas acomodações disponíveis:</strong></h2>
                <br></br>
                <div className="acomodacoes">
                    <CardAcomodacao
                        titulo="Solteiro Simples"
                        imagem={solteiroSimples}
                        descricao="Acomodação simples para solteiro(a)"
                        camaSolteiro={1}
                        camaCasal={0}
                        suite={1}
                        garagem={0}
                        climatizacao="Sim"
                    />
                    <CardAcomodacao
                        titulo="Solteiro Mais"
                        imagem={solteiroMais}
                        descricao="Acomodação com garagem para solteiro(a)"
                        camaSolteiro={0}
                        camaCasal={1}
                        suite={1}
                        garagem={1}
                        climatizacao="Sim"
                    />
                    <CardAcomodacao
                        titulo="Casal Simples"
                        imagem={casalSimples}
                        descricao="Acomodação simples para casal"
                        camaSolteiro={0}
                        camaCasal={1}
                        suite={1}
                        garagem={1}
                        climatizacao="Sim"
                    />
                    <CardAcomodacao
                        titulo="Família Simples"
                        imagem={familiaSimples}
                        descricao="Acomodação para família com até duas crianças"
                        camaSolteiro={2}
                        camaCasal={1}
                        suite={1}
                        garagem={1}
                        climatizacao="Sim"
                    />
                    <CardAcomodacao
                        titulo="Família Mais"
                        imagem={familiaMais}
                        descricao="Acomodação para família com até cinco crianças"
                        camaSolteiro={5}
                        camaCasal={1}
                        suite={2}
                        garagem={2}
                        climatizacao="Sim"
                    />
                    <CardAcomodacao
                        titulo="Família Super"
                        imagem={familiaSuper}
                        descricao="Acomodação para até duas famílias, casal e três crianças cada"
                        camaSolteiro={6}
                        camaCasal={2}
                        suite={2}
                        garagem={2}
                        climatizacao="Sim"
                    />
                </div>
                <div className="button-container">
                    <button 
                        className="btn btn-primary" 
                        style={{ backgroundColor: '#092f44', border: '#092f44', width: 200, height: 40 }}
                        onClick={handleShow}
                    >
                        Fazer uma reserva!
                    </button>
                </div>
            </main>
            <ModalReserva show={showModal} handleClose={handleClose} />
        </div>
    );
}
