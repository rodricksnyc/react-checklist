
import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


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

import "./styles.css";

class App extends React.Component {


  render() {
    return (

    <div className="main overflow-hidden" id="overview">
    <Container fluid className="padding-0">
    <div className="header d-flex align-items-center EEO1">
    <div className="hdr-container">
    <a href={'https://www.gscommunications.com'}>

    <img src={'https://assets.syngentaebiz.com/images/media/G S_New_Logo_Circle_7545C_CMYK-600x600-950dd6f.png'} className="img-responsive eeoc" />

    </a>

    <h1>Web Experience &amp; Optimization QA Checklist</h1>

    </div>

    <div className="end">
    <object type="image/svg+xml" data={"./images/Selena.ab68b415.svg"} className="img-fluid avatar" alt=""></object>

    {/*<Button className="btn user">Log In<span className="user-icon"></span></Button>*/}
    </div>

    </div>

    <Form>

    <Container>

    <Row className="mt-5">
    <Col xs={12} md={9}>


    <Field label="ADVANTAGE ASSIGNMENT" for="firstName" id="firstName"/>

    </Col>

    <Col xs={12} md={3}>


    <Field label="QA TESTER(S)" for="tester" id="tester" />

    </Col>

    </Row>

    <Row className="mt-2">
    <Col xs={12} md={9}>


    <Field label="URL OF PAGE" for="url" id="url"/>

    </Col>

    <Col xs={12} md={3}>


    <Field label="INITIAL TEST DATE" for="date" id="date" />

    </Col>

    </Row>



    <Row className="d-flex justify-content-md-around flex-wrap options">


    <i className="fas fa-circle"><span>Pass</span></i>

    <i className="fas fa-circle"><span>Unsure/Needs Attention</span></i>


    <i className="fas fa-circle"><span>Fail</span></i>

    <i className="fas fa-circle"><span>Not Applicable</span></i>



    </Row>



    <Tabs>
    <Tab eventKey={1} title="GENERIC">


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>HEAD</Accordion.Header>
        <Accordion.Body>
            <Head />

        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="1">
        <Accordion.Header>HTML</Accordion.Header>
        <Accordion.Body>
        <Html />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>CSS</Accordion.Header>
        <Accordion.Body>
            <Css />
        </Accordion.Body>
      </Accordion.Item>



    <Accordion.Item eventKey="3">
      <Accordion.Header>NAVIGATION</Accordion.Header>
      <Accordion.Body>
            <Navigation />
      </Accordion.Body>
    </Accordion.Item>


    <Accordion.Item eventKey="4">
      <Accordion.Header>IMAGES</Accordion.Header>
      <Accordion.Body>
              <Images />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
      <Accordion.Header>COPY</Accordion.Header>
      <Accordion.Body>
              <Copy />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="6">
      <Accordion.Header>ACCESSIBILITY</Accordion.Header>
      <Accordion.Body>
            <Accessibility />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="7">
      <Accordion.Header>USER EXPERIENCE</Accordion.Header>
      <Accordion.Body>
          <UserExperience />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="8">
      <Accordion.Header>TECHNICAL</Accordion.Header>
      <Accordion.Body>
              <Technical />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="9">
      <Accordion.Header>TEAM SPECIFIC: MULTICHANNEL EXCELLENCE</Accordion.Header>
      <Accordion.Body>
                  <MultichannelExcellence />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="10">
      <Accordion.Header>TEAM SPECIFIC: MEASUREMENT</Accordion.Header>
      <Accordion.Body>

            <Measurement />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="11">
      <Accordion.Header>TEAM SPECIFIC: WEO</Accordion.Header>
      <Accordion.Body>

              <WEO />
      </Accordion.Body>
    </Accordion.Item>



  </Accordion>


    </Tab>
    <Tab eventKey={2} title="SYNGENTA">Tab 2 content</Tab>

    <Tab eventKey={3} title="WORDPRESS">Tab 4 content is displayed by default</Tab>
    <Tab eventKey={4} title="MARKETING CLOUD">Tab 5 content</Tab>
    </Tabs>








    </Container>


    </Form>



    <div className="footer">
    </div>


    </ Container>





    </div>


  )}

};

ReactDOM.render(<App />, document.querySelector("#root"));
