import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import HomeButton from '../../components/common/HomeButton';
import TranslateButton from '../../components/menu/TranslateButton';
import CastleTestButton from '../../components/menu/CastleTestButton';
import BackpackButton from '../../components/menu/BackpackButton';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'

const StudyMenu = ({navigation}) => {  
    return (
      <Container style={{ flex: 1}}>
        <Container style={{flex: 0.7}}>
          <h1>Study Time</h1>
          <Container >
            <Bubble text="Right here, there are the assigned homeworks, I'm here to help you!"/>
            <IrisModel/>
            <HomeButton navigation={navigation}/>
          </Container>
        </Container>
        <Container style={{flex:0.5}}>
        <h1> Exercises </h1>
        <Container style={{flexDirection:'row'}}>
          <TranslateButton navigation={navigation}/>
          <BackpackButton navigation={navigation}/>
        </Container>
        </Container>
        <Container style={{flex: 1}}>
        <h1>Test</h1>
            <CastleTestButton navigation={navigation}/>
        </Container>
      </Container>
    );
  }

export default StudyMenu;
  