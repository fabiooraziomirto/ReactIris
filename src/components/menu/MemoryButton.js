import * as React from 'react';
import { Button} from 'react-bootstrap';
import { Icon } from "@iconify/react";


const MemoryButton  = ({navigation}) => {  
  return (
    <Button 
                  title="Memory"
                  style={buttonCastleTest}>
                  <Icon style={{
                    resizeMode:"contain",
                    height: 100,
                    width:100,
                  }}
                  icon="mdi:puzzle"
                  />
                  <h1>Memory</h1>
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

export default MemoryButton;
