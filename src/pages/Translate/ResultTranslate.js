import * as React from 'react';
import { Button, Container, ImageBackground } from 'react-bootstrap';
import StudyButton from '../../components/common/StudyButton';
import { useState, useEffect } from "react";
import { Keyboard, TextInput } from "react-bootstrap";
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'



const Translate  = ({navigation, text}) => {  
    return (
      <Container style={{ flex: 1}}>
        <Container style={{flex: 0.7}}>
          <h1>Study Time</h1>
          <Container >
            <Bubble text="Right here, the result!"/>
            <IrisModel/>
            <StudyButton style={buttonStudyCompact} navigation={navigation}/>
          </Container>
        </Container>
        <Container style={{flex:0.5}}>
            {/*<BoxKeyboard text={"Home"}/>
            <BoxKeyboard text={"Casa"}/>*/}
            <Button onPress={() => navigation.navigate('ResultTranslate', {
              text:text
            })} title="Translate"></Button>
        </Container>
        <Container style={{flex: 1}}>
          {/*<ImageBackground source={require('../../assets/home.png')} style={{flex:1}}/>*/}
        </Container>
      </Container>
    );
  }

  
const     buttonStudyCompact = {
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