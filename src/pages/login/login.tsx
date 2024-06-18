import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/logo.png';

export default function Login(){
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <img src={logo} alt="Logo" style={{ width: 200, marginBottom: 20 }} />
            <h2 className="mb-4">Login</h2>
            <Form  style={{ width: 300 }}>
                <Form.Group controlId="formCpf" className="mb-3">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formSenha" className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: '#092f44' }}>
                    Entrar
                </Button>
            </Form>
        </Container>
    );
};