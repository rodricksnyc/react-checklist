import React from "react";
import RadioButton from "./RadioButton";
import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


const Html = (props) => {
  return (


    <Row>
    <Col xs={12} md={12}>

    <div className="container survey-wrapper el-S">

    <div className="ques-wrapper radiobuttons">

    <fieldset>
    <legend>

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



    <p className="prompt gray">Link check: All internal and external links are working as intended with no errors (e.g. 404's and 503's)
    <TooltipButton
    title='Can be easily tested with a browser extension such as <a href="https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf?hl=en" target="_blank">Check My Links for Chrome</a>, or using a tool such as Screaming Frog.'

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

    <p className="prompt gray">Link targets: All external links should open in a new tab
    <TooltipButton
    text='Internal links should not unless there is a specific business reason.'

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

    <p className="prompt gray">Comments: Unnecessary code has been removed and any complicated functions are documented
    <TooltipButton
    text='Keep your code tidy and easily readable for the next person who has to touch this page!'

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


    <tr className="mx-row">
    <td align="top" className="mx-question">

    <p className="prompt gray">Adblock test: Content renders correctly with adblockers enabled
    <TooltipButton
    text="uBlock Origin and AdBlock are the most common"
    />
    </p>
    </td>


    <RadioButton
    value="Title_Pass"
    id="Title_Pass"
    for="Title_Pass"
    label="Pass"
    />

    <RadioButton
    value="Title_Unsure"
    id="Title_Unsure"
    for="Title_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Title_Fail"
    id="Title_Fail"
    for="Title_Fail"
    label="Fail"
    />

    <RadioButton
    value="Title_NA"
    id="Title_NA"
    for="Title_NA"
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

export default Html;
