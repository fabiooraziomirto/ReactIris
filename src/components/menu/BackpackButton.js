import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const BackpackButton  = ({navigation}) => {  
  return (
    <Link to={'/backpackS'}>
    <Button 
      title="The Backpack"
      style={buttonBackpack}>
      <Icon style={{
        resizeMode:"contain",
        height: 100,
        width:100,
      }}
      icon="mdi:backpack"
      />
      <h1>The Backpack</h1>
  </Button>
    </Link>
      
  );

}

const     buttonBackpack = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 40,
}

export default BackpackButton;
