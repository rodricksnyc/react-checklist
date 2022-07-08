import React from "react";
import RadioButton from "./RadioButton";
import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


const word = `<title>`;
const myHTML1 = `<!doctype html>`;
const myHTML2 = `<meta charset="utf-8">`;
const myHTML3 = `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">`;
const myHTML4 = `<link rel="icon" type="image/png" href="https://example.com/favicon.png">`;
const myHTML5 = `<link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html">`;
const myHTML6 = `<meta property="og:title" content="Lorem Ipsum Dolor">`
const myHTML7 = `<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,700&display=swap" rel="stylesheet" />`


const Head = (props) => {
  return (


    <Row className="mt-2">
    <Col xs={12} md={12}>

    <div className="container survey-wrapper el-S">

    <div className="ques-wrapper radiobuttons">

    <fieldset>
    <legend>
    HEAD
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



    <p className="prompt gray">Doctype: The doctype is HTML5 and is at the top of all pages
    <TooltipButton
    text={myHTML1}

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

    <p className="prompt gray">Charset: The charset is UTF-8 and is at the top of all pages
    <TooltipButton
    text={myHTML2}

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

    <p className="prompt gray">Viewport: The viewport is declared properly at the top of all pages
    <TooltipButton
    text={myHTML3}

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

    <p className="prompt gray">Title: Page includes a <span className="highlight pink">{word}</span> tag that is ≤60 characters, relevant to the content of the page, and follows standard naming conventions
    <TooltipButton
    text="For example: Syngenta US and Thrive have different suffixes."
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


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Description: A meta description is provided, it is unique, and doesn't contain more than 160 characters
    <TooltipButton
    text="Each item should have four checkboxes indicating if they pass, need attention, fail, or are not applicable."
    />
    </p>
    </td>


    <RadioButton
    value="Description_Pass"
    id="Description_Pass"
    for="Description_Pass"
    label="Pass"
    />

    <RadioButton
    value="Description_Unsure"
    id="Description_Unsure"
    for="Description_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Description_Fail"
    id="Description_Fail"
    for="Description_Fail"
    label="Fail"
    />

    <RadioButton
    value="Description_NA"
    id="Description_NA"
    for="Description_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row">
    <td align="top" className="mx-question">

    <p className="prompt gray">Google Tag Manager: Script is included
    <TooltipButton
    text="Contact MCE if you need this snippet provided."
    />
    </p>
    </td>


    <RadioButton
    value="GTM_Pass"
    id="GTM_Pass"
    for="GTM_Pass"
    label="Pass"
    />

    <RadioButton
    value="GTM_Unsure"
    id="GTM_Unsure"
    for="GTM_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="GTM_Fail"
    id="GTM_Fail"
    for="GTM_Fail"
    label="Fail"
    />

    <RadioButton
    value="GTM_NA"
    id="GTM_NA"
    for="GTM_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">BugHerd: Script has been added or removed as needed
    <TooltipButton
    text="Contact your Project Manager if you need this snippet provided."
    />
    </p>
    </td>


    <RadioButton
    value="BugHerd_Pass"
    id="BugHerd_Pass"
    for="BugHerd_Pass"
    label="Pass"
    />

    <RadioButton
    value="BugHerd_Unsure"
    id="BugHerd_Unsure"
    for="BugHerd_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="BugHerd_Fail"
    id="BugHerd_Fail"
    for="BugHerd_Fail"
    label="Fail"
    />

    <RadioButton
    value="BugHerd_NA"
    id="BugHerd_NA"
    for="BugHerd_NA"
    label="N/A"
    />


    </tr>



    <tr className="mx-row">
    <td align="top" className="mx-question">

    <p className="prompt gray">Favicon: A favicon has been created and displays correctly
    <TooltipButton
    text={myHTML4}
    />
    </p>
    </td>


    <RadioButton
    value="Favicon_Pass"
    id="Favicon_Pass"
    for="Favicon_Pass"
    label="Pass"
    />

    <RadioButton
    value="Favicon_Unsure"
    id="Favicon_Unsure"
    for="Favicon_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Favicon_Fail"
    id="Favicon_Fail"
    for="Favicon_Fail"
    label="Fail"
    />

    <RadioButton
    value="Favicon_NA"
    id="Favicon_NA"
    for="Favicon_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Canonical: A canonical URL is specified if applicable
    <TooltipButton
    text={myHTML5}
    />
    </p>
    </td>


    <RadioButton
    value="Canonical_Pass"
    id="Canonical_Pass"
    for="Canonical_Pass"
    label="Pass"
    />

    <RadioButton
    value="Canonical_Unsure"
    id="Canonical_Unsure"
    for="Canonical_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Canonical_Fail"
    id="Canonical_Fail"
    for="Canonical_Fail"
    label="Fail"
    />

    <RadioButton
    value="Canonical_NA"
    id="Canonical_NA"
    for="Canonical_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row">
    <td align="top" className="mx-question">

    <p className="prompt gray">CSS order: All CSS files are loaded before any JavaScript files in the head
    <TooltipButton
    text="For reasons."
    />
    </p>
    </td>


    <RadioButton
    value="CSS_Pass"
    id="CSS_Pass"
    for="CSS_Pass"
    label="Pass"
    />

    <RadioButton
    value="CSS_Unsure"
    id="CSS_Unsure"
    for="CSS_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="CSS_Fail"
    id="CSS_Fail"
    for="CSS_Fail"
    label="Fail"
    />

    <RadioButton
    value="CSS_NA"
    id="CSS_NA"
    for="CSS_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Facebook Open Graph: Basic tags are included and populated
    <TooltipButton
    text={myHTML6}
    />
    </p>
    </td>


    <RadioButton
    value="FB_Pass"
    id="FB_Pass"
    for="FB_Pass"
    label="Pass"
    />

    <RadioButton
    value="FB_Unsure"
    id="FB_Unsure"
    for="FB_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="FB_Fail"
    id="FB_Fail"
    for="FB_Fail"
    label="Fail"
    />

    <RadioButton
    value="FB_NA"
    id="FB_NA"
    for="FB_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row">
    <td align="top" className="mx-question">

    <p className="prompt gray">Google Font Swap: Any Google Font loaded in should have the display=swap attribute
    <TooltipButton
    text={myHTML7}
    />
    </p>
    </td>


    <RadioButton
    value="Font_Pass"
    id="Font_Pass"
    for="Font_Pass"
    label="Pass"
    />

    <RadioButton
    value="Font_Unsure"
    id="Font_Unsure"
    for="Font_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Font_Fail"
    id="Font_Fail"
    for="Font_Fail"
    label="Fail"
    />

    <RadioButton
    value="Font_NA"
    id="Font_NA"
    for="Font_NA"
    label="N/A"
    />


    </tr>


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Types specified: CSS should be tagged as rel="stylesheet" or text/stylesheet and JavaScript with type/javascript
    <TooltipButton
    text='It helps.'
    />
    </p>
    </td>


    <RadioButton
    value="Types_Pass"
    id="Types_Pass"
    for="Types_Pass"
    label="Pass"
    />

    <RadioButton
    value="Types_Unsure"
    id="Types_Unsure"
    for="Types_Unsure"
    label="Unsure"
    />


    <RadioButton
    value="Types_Fail"
    id="Types_Fail"
    for="Types_Fail"
    label="Fail"
    />

    <RadioButton
    value="Types_NA"
    id="Types_NA"
    for="Types_NA"
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

export default Head;
