import * as React from 'react';
import { Button, Container,} from 'react-bootstrap';
import HomeButton from '../../components/common/HomeButton'
import MemoryButton from '../../components/menu/MemoryButton';
import CastleButton from '../../components/menu/CastleButton';
import IrisModel from '../../models/IrisModel';
import Bubble from '../../components/common/Bubble'

const PlayMenu = ({navigation}) => { 
  
    return (
        <Container style={{ flex: 1}}>
        <Container style={{flex: 0.7}}>
          <h1>Play</h1>
          <Container >
            <Bubble text="In this page you can find a lot of funny games!"/>
            <IrisModel/>
            <HomeButton navigation={navigation}/>
          </Container>
        </Container>
        <Container style={{flex:0.5}}>
        <h1> Games </h1>
        <Container style={{flexDirection:'row'}}>
          <MemoryButton navigation={navigation}/>
        </Container>
        </Container>
        <Container style={{flex: 1}}>
        <h1>Stories</h1>
          <CastleButton navigation={navigation}/>
        </Container>
      </Container>   
      
    );
  }




export default PlayMenu;