import { Card } from "react-bootstrap"
import Cardbody from "./cardbody"
import CardHeader from "./CardHeader"
import CardFooter from "./CardFooter"

const CustomCard = (props)=>{
console.log(props.isHeader);
// console.log("afbhdabflhsdbfjh");
const parentURL = props.parentURL !== "" && props.parentURL !== null && props.parentURL !== undefined ? props.parentURL : "";
const module = props.Module !== undefined && props.Module !== null ? props.Module : "";    
return (
        <Card className='card  mb-3'>
            {/* <Card.Img variant="top" style={{ opacity: 0.2, maxHeight:'70vh' }} src={process.env.PUBLIC_URL + '/4909528.jpg'} /> */}
            <Card.ImgOverlay style={{padding:'0px'}}>
                {props.isHeader === 1 ? <CardHeader linkId={props.linkId} linkURL={props.linkURL} headerText={props.headerText} isCreate={props.isCreate} breadcrumbText = {props.breadcrumb} parentURL = {parentURL} Module = {module}></CardHeader>: ""}
                <Cardbody component={props.bodyComponent}></Cardbody>
                {props.isFooter === 1 ? <CardFooter URL={props.linkURL}></CardFooter> : ""}
            </Card.ImgOverlay>
        </Card>
    )
}
export default CustomCard;