import Container from "@mui/material/Container/Container";
import Rightcon from './rightcon';
import './Concon.css';
import { Typography } from "@mui/material";

interface Pros{
    imageURL?:string;
    title?:string;
}

let Bodybox=({imageURL,title}:Pros)=>{
    return (
        <div className="Videocontain">
            <h4 style={{position:"absolute", bottom:70, left:30, color:"blue"}}>{title}</h4>
            {/*Video only */}
            <video 
            src={imageURL}
            controls
            style={{objectFit:"fill", width:'100%', height:'100%'}}>
            </video>
            {/*SideBar */}
            <Rightcon/>
        </div>
)
}
export default Bodybox;