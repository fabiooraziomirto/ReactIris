import * as React from 'react';
import { Button,} from 'react-bootstrap';
import { Icon } from "@iconify/react";


const CastleTestButton  = ({navigation}) => {  
  return (
    <Button 
    title="Castle Test"
    style={buttonCastleTest}>
    <Icon style={{
      resizeMode:"contain",
      height: 100,
      width:100,
    }}
    icon="mdi:castle"
    />
    <h1>Castle Test</h1>
</Button>
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

export default CastleTestButton;
