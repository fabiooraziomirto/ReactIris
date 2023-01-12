import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import StudyButton from '../../components/common/StudyButton';
import { useState, useEffect } from "react";
import { Keyboard, TextInput } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'
import { Link } from 'react-router-dom';

const Translate  = ({navigation}) => {  
    return (
      <Container style={{ flex: 1}}>
        <Container style={{flex: 0.7}}>
          <h1>Study Time</h1>
          <Container>
            <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!"/>
            <IrisModel/>
            <StudyButton style={buttonStudyCompact} navigation={navigation}/>
          </Container>
        </Container>
        <Container style={{flex:0.5}}>
          <Link to={"/resultTranslate"}>
          <Button title="Translate">Translate</Button>
          </Link>
            
        </Container>
        <Container style={{flex: 1}}>
        
        </Container>
      </Container>
    );
  }


  const    buttonStudyCompact=  {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "grey",
    marginLeft: 20,
  }
  
export default Translate;