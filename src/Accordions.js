import React, {useState} from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';


import RadioButton from "./RadioButton";
import Field from "./Field";
import Head from "./Head";
import Html from "./Html";
import Css from "./Css";
import Navigation from "./Navigation";
import Images from "./Images";
import Copy from "./Copy";
import Accessibility from "./Accessibility";
import UserExperience from "./UserExperience";
import Technical from "./Technical";
import MultichannelExcellence from "./MultichannelExcellence";
import Measurement from "./Measurement";
import WEO from "./WEO";
import Open from "./Open";

import TooltipButton from "./TooltipButton";


var selectedCards = [

    {
      header: 'HEAD',
      body: <Head/>,
    },
    {
      header: 'HTML',
      body: <Html/>,
    },
    {
      header: 'CSS',
      body: <Css/>,
    },
    {
      header: 'NAVIGATION',
      body:  <Navigation />,
    },
    {
      header: 'IMAGES',
      body: <Images />,
    },
    {
      header: 'COPY',
      body: <Copy />,
    },
    {
      header: 'ACCESSIBILITY',
      body: <Accessibility />,
    },
    {
      header: 'USER EXPERIENCE',
      body:  <UserExperience />,
    },
    {
      header: 'TECHNICAL',
      body: <Technical />,
    },
    {
      header: 'TEAM SPECIFIC: MULTICHANNEL EXCELLENCE',
      body: <MultichannelExcellence />,
    },
    {
      header: 'TEAM SPECIFIC: MEASUREMENT',
      body: <Measurement />,
    },
    {
      header: 'TEAM SPECIFIC: WEO',
      body:  <WEO />,
    },
];

function Accordions(props) {


var cards = [];


selectedCards.forEach(function(selectedCard, i){
    cards.push(
   <Accordion defaultActiveKey={0} key={i}>

      <Accordion.Item eventKey={i}>
      <Accordion.Header>{selectedCard.header}</Accordion.Header>
        <Accordion.Body>

        {selectedCard.body}

      </Accordion.Body>
      </Accordion.Item>


  </Accordion>
    )
  });



  return (


<div>

{cards}

</div>


  );



}

export default Accordions;
