import React from "react";
import RadioButton from "./RadioButton";
import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



const UserExperience = (props) => {
  return (


    <Row>
    <Col xs={12} md={12}>

    <div className="container survey-wrapper el-S">

    <div className="ques-wrapper radiobuttons">

    <fieldset>
    <legend>
    USER EXPERIENCE
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



    <p className="prompt gray">RGB: All images are using the RGB color space
    <TooltipButton
    text='A logo using the CMYK color space will render incorrectly and violate brand guidelines.'

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

    <p className="prompt gray">Sized properly: Images have been resized down to something reasonable for where they are being used.
    <TooltipButton
    text='No 1920x1080 images being used as thumbnails. Generally speaking body images should not exceed 750px in any dimension unless there is a specific design reason. Hero images should not exceed 1500px wide. Background images will vary based on page layout.'

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

    <p className="prompt gray">Bootstrap helper classes: On sites where Bootstrap 3 is used, apply the img-responsive class to images. On sites where Bootstrap 4 is used, apply the img-fluid class to images.
    <TooltipButton
    text='No 1920x1080 images being used as thumbnails. Generally speaking body images should not exceed 750px in any dimension unless there is a specific design reason. Hero images should not exceed 1500px wide. Background images will vary based on page layout.'

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

    <p className="prompt gray">Lazy loading: Images below the fold have the <span class="highlight pink">loading="lazy"</span> attribute

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


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Optimization: All images have been run through an optimization tool
    <TooltipButton
    title='<a href="https://kraken.io/web-interface" target="_blank">Kraken</a> (Web), <a href="https://imageoptim.com/mac" target="_blank">ImageOptim</a> (macOS), or <A href="https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer" target="_blank">FileOptimizer</a> (Windows)'

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

    <p className="prompt gray">ALT text: All non-decorative images have alt text which describes the image visually
    <TooltipButton
    title='<a href="https://blog.hubspot.com/marketing/image-alt-text" target="_blank">Hubspot reference</a>. For images that are purely decorative, include the alt attribute but do not include anything between the quotes. Do not start with "Image of", "Photo of", etc. Do not try to cram in SEO keywords. Do not use it for citations, such as the photographer. Keep it concise.'

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


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Video captions: All videos have closed captioning
    <TooltipButton
    title='<a href="https://blog.hubspot.com/marketing/image-alt-text" target="_blank">Hubspot reference</a>. For images that are purely decorative, include the alt attribute but do not include anything between the quotes. Do not start with "Image of", "Photo of", etc. Do not try to cram in SEO keywords. Do not use it for citations, such as the photographer. Keep it concise.'

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

    <p className="prompt gray">SVG text: Any SVG's with text should have their text outlined
    <TooltipButton
    text='This ensures consistent rendering across different platforms.'

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


    <tr className="mx-row-alt">
    <td align="top" className="mx-question">

    <p className="prompt gray">Remove placeholders: All placeholder/FPO images have been removed and replaced with actual client-approved images

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

export default UserExperience;
