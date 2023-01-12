import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import StudyMenu from "../../pages/Menu/PlayMenu"


const PlayButton  = ({navigation, style}) => {  
  return (
    <Link to="/play">

    <Button 
              title="Play"
              style={style}>
              <Icon style={{
                resizeMode:"contain",
                height: 100,
                width:100,
              }}
              icon="mdi:puzzle"
              />
              <h1>Play</h1>
            </Button>
            </Link>
  );

}
export default PlayButton;
