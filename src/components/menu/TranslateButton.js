import * as React from 'react';
import { Button} from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


const TranslateButton  = ({navigation}) => {  
  return (
    <Link to={"/translate"}>
      <Button 
        title="Translate"
        style={buttonTranslate}>
        <Icon style={{
          resizeMode:"contain",
          height: 100,
          width:100,
        }}
        icon="mdi:translate"
        />
        <h1>Translate</h1>
      </Button>
    </Link>
    
  );

}

const     buttonTranslate = {
  width: 75,
  height: 75,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  borderRadius: 100,
  backgroundColor: "grey",
  marginLeft: 20,
}

export default TranslateButton;
