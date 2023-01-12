import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const CastleButton  = ({navigation}) => {  
  return (
    <Link to={'/castlestory'}>
      <Button 
    title="The Castle"
    style={buttonCastleTest}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="mdi:castle"
    />
    <h1>The Castle</h1>
  </Button>
    </Link>
    
  );

}

const    buttonCastleTest=  {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20,
}

export default CastleButton;
