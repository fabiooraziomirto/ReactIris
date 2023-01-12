import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {Container} from "react-bootstrap"
import PlayButton from "../../components/common/PlayButton";
import StudyButton from "../../components/common/StudyButton";
import IrisModel from "../../models/IrisModel";
import Bubble from "../../components/common/Bubble";

function Home() {
    return (
      <div>
       <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Container>
            <Bubble text={"jfsaoudhasoudhaso"}/>
            <IrisModel scale={3} top={250} left={50}></IrisModel>
          </Container> {/*end top part*/}
          <Container >
           <PlayButton>
           </PlayButton>
           <StudyButton>
           </StudyButton>
          </Container>
        </Container>
      </div>
    );
  }

  export default Home;