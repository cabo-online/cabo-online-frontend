import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

function WaitingRoom(props: any) {
  const state = useSelector((state: RootState) => state.game);
  return (
    <div>
      {console.log('state', state)}
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
    </div>
  )
}

export default WaitingRoom;