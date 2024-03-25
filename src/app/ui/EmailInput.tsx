'use client';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function EmailInput(){
  
    return (
      <>
        <input type="email" placeholder="Your email" size={35} style={{borderTopLeftRadius:'8px', borderBottomLeftRadius:'8px', borderTopRightRadius:'0px', borderBottomRightRadius:'0px', height:'45px', width:'100%', padding:'15px', outline:'none'}}/>
        <div onClick={()=>{alert('Functionality not completed yet. Developer has been working on some more important tasks. You can code it yourself if you want it so badly. Its an open-source codebase. Duhh!')}} className="flex items-center" style={{height:'45px', width:'32px', backgroundColor:'white', borderTopRightRadius:'8px', borderBottomRightRadius:'8px'}}>
          <KeyboardArrowRightIcon sx={{color:'grey'}}/>
        </div>
      </>
    );
  }