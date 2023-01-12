import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";


const HomeButton  = ({navigation}) => {  
  return (
    <Link to={'/'}>
        <Button 
                  title="Home"
                  style={buttonHome}>
                  <Icon style={{
                    resizeMode:"contain",
                    height: 100,
                    width:100,
                  }}
                  icon="mdi:home"
                  />
                  <h1>Home</h1>
              </Button>
    </Link>
    
  );

}


const buttonHome = {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "grey",
    position: 'absolute',
    bottom: 20,
    right: 20

}

export default HomeButton;

