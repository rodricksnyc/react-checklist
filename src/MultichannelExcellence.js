import React from "react";
import RadioButton from "./RadioButton";
import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



const MultichannelExcellence = (props) => {
  return (


    <Row>
    <Col xs={12} md={12}>

    <div className="container survey-wrapper el-S">

    <div className="ques-wrapper radiobuttons">

    <fieldset>
    <legend>
    TEAM SPECIFIC: MULTICHANNEL EXCELLENCE
    </legend>


    <Table role="presentation" className="mx">
    <thead>
    <tr>
    <td className=""></td>
    <td width="100"><i className="fas fa-circle" style={{color: '#02fa49'}}></i> Pass</td>
    <td width="100"><i className="fas fa-circle" style={{color: '#f7ea94'}}></i> Unsure</td>
    <td width="100"><i className="fas fa-circle" style={{color: '#f50505'}}></i> Fail</td>
    <td width="100"><i className="fas fa-circle" style={{color: '#adadad'}}></i> N/A</td>

    </tr>
    </thead>
    <tbody>
    <tr className="mx-row-alt">
    <td align="top" className="mx-question">



    <p className="prompt gray">Responsive: Page responsively adapts at all supported viewport sizes
    <TooltipButton
    title='Standard range is from 1920px down to 375px.'

    />


    </p>
    </td>

    <RadioButton
    value="Doctype_Pass"
    id="Doctype_Pass"
    for="Doctype_Pass"
    label="Pass"
    />

    <RadioButton
    value="Doctype_Unsure"
    id="Doctype_Unsure"
    for="Doctype_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Doctype_Fail"
    id="Doctype_Fail"
    for="Doctype_Fail"
    label="Fail"
    />

    <RadioButton
    value="Doctype_NA"
    id="Doctype_NA"
    for="Doctype_NA"
    label="N/A"
    />


    </tr>

    <tr className="mx-row">
    <td align="top" className="mx-question">

    <p className="prompt gray">Desktop browsers: Page works as intended in Chrome, Firefox, Safari, and Edge
    <TooltipButton
    title='Test utilizing <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>'

    />
    </p>
    </td>


    <RadioButton
    value="Charset_Pass"
    id="Charset_Pass"
    for="Charset_Pass"
    label="Pass"
    />

    <RadioButton
    value="Charset_Unsure"
    id="Charset_Unsure"
    for="Charset_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Charset_Fail"
    id="Charset_Fail"
    for="Charset_Fail"
    label="Fail"
    />

    <RadioButton
    value="Charset_NA"
    id="Charset_NA"
    for="Charset_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Mobile browsers: Page works as intended in iOS Safari and Android Chrome
    <TooltipButton
    title='Test utilizing <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>'

    />
    </p>
    </td>


    <RadioButton
    value="Viewport_Pass"
    id="Viewport_Pass"
    for="Viewport_Pass"
    label="Pass"
    />

    <RadioButton
    value="Viewport_Unsure"
    id="Viewport_Unsure"
    for="Viewport_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Viewport_Fail"
    id="Viewport_Fail"
    for="Viewport_Fail"
    label="Fail"
    />

    <RadioButton
    value="Viewport_NA"
    id="Viewport_NA"
    for="Viewport_NA"
    label="N/A"
    />


    </tr>

    </tbody>
    </Table>

    </fieldset>


    </div>


    </div>


    </Col>

    </Row>


  );
};

export default MultichannelExcellence;
