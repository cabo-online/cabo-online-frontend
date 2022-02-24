import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNewGame } from '../store/actions';
import { RootState } from '../store/reducers';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [gameCode, setGameCode] = useState('');

    const state = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    const onChange = (e: any) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onChangeGameCode = (e: any) => {
        e.preventDefault();
        setGameCode(e.target.value);
    }
  
    const submitName = (e: any) => {
        e.preventDefault();
        dispatch(createNewGame(name));
        navigate('/waiting-room');
    };

  return (
    <div>
        <Container>
            <Row className="justify-content-center my-4">
                Welcome to Cabo Online!
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <Form onSubmit={(e) => submitName(e)}>
                        <Row className="justify-content-center">
                            <Col className="col-4">
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={(e) => onChange(e)} type="text" placeholder="Enter name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="col-4">
                                <Form.Group className="mb-3" controlId="game-code">
                                    <Form.Label>Game Code</Form.Label>
                                    <Form.Control onChange={(e) => onChangeGameCode(e)} type="text" placeholder="Enter game code" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center my-2">
                            <Col className="justify-content-center col-4">
                                <Button variant="primary" type="submit">
                                    Create Game
                                </Button>
                            </Col>
                            <Col className="justify-content-center col-4">
                                <Button variant="primary" type="submit">
                                    Join Game
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Container>
                <Row className="justify-content-center my-5"> 
                    <Col className="col-4">
                        { state.data?.game_code ? state.data?.game_code : 'nothing yet ' }
                    </Col>
                    <Col className="col-4">
                        { state.data?.players ? state.data?.players[0] : 'nothing yet '}
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Home;