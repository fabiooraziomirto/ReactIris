import * as React from 'react';
import { Button, Container} from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import StudyMenu from "../../pages/Menu/StudyMenu"


const StudyButton  = ({navigation, style}) => {  
  return (
    <Link to="/studytime">
        <Button 
            title="Study"
            style={style}>
                <Icon style={{
                resizeMode:"contain",
                height: 100,
                width:100,
                }}
                icon="arcticons:dictionaryformids"
                />
            <h1>Study</h1>
        </Button>
    </Link>
  );
}
export default StudyButton;
