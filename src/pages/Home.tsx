import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNewGame } from '../store/actions';
import { RootState } from '../store/reducers';

function Home() {
    const [name, setName] = useState('');

    const state = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    const onChange = (e: any) => {
        e.preventDefault();
        setName(e.target.value);
    }
  
    const submitName = (e: any) => {
        e.preventDefault();
        dispatch(createNewGame(name));
    };

  return (
    <div>
        {console.log('state', state)}
        <Form onSubmit={(e) => submitName(e)}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => onChange(e)} type="text" placeholder="Enter name" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Create Game
            </Button>
         </Form>
         { state.data?.game_code ? state.data?.game_code : 'nothing yet ' }
         { state.data?.players ? state.data?.players[0] : 'nothing yet '}
    </div>
  )
}

export default Home;