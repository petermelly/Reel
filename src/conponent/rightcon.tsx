import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';
import './Concon.css';
import { useState } from 'react';

let Rightcon=()=>{
    const [num,Setnum]=useState(22);
    const [isActive, setIsActive] = useState(false);
    let funfun=()=>{
        if(num<23){
            Setnum(num+1);
        }else{
            Setnum(num-1);
        }
        setIsActive(current => !current);
    }

    let messengefunction=()=>{
         prompt("Hello")
    }


    return (
        <div className="RightIcon">
            <div className='rightlogotop'>p</div>
            <div className='allicons'><FavoriteIcon onClick={funfun} className={isActive ? 'colorchange' : 'deletecolor'} sx={{'@media (max-width: 377px)' : {fontSize:13}}}/></div>
            <h1 className='wordsforicons'>{num}K</h1>
            <div className='allicons'><TextsmsIcon onClick={messengefunction} sx={{'@media (max-width: 377px)' : {fontSize:13}}}/></div>
            <h1 className='wordsforicons'>32K</h1>
            <div className='allicons'><BookmarkIcon sx={{'@media (max-width: 377px)' : {fontSize:13}}}/></div>
            <h1 className='wordsforicons'>100K</h1>
            <div className='allicons'><ReplyIcon sx={{'@media (max-width: 377px)' : {fontSize:13}}}/></div>
            <h1 className='wordsforicons'>9.9K</h1>
        </div>
    )
}
 export default Rightcon;
