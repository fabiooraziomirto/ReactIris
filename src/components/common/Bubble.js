import * as React from 'react';
import { Container  } from 'react-bootstrap';

function Bubble({text}) {
    return (
        <Container style={irisBubble} >
            <h1 style={irisText}>
                {text}
            </h1>
            
        </Container>
    );
}

export default Bubble;


const irisBubble = {
    backgroundColor: "#0078fe",
    padding:10,
    marginRight: '45%',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 95,
    marginLeft: "5%",
    maxWidth: '50%',
    alignSelf: 'flex-end',
    borderRadius: 20,
    zIndex: 999,
  }
const irisText = {
    fontSize: 16,
    color: "#fff",
  }