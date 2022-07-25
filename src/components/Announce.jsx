import {Close} from '@mui/icons-material/Close';
import {React,useState} from 'react';

function Announce() {
    const[AnnounceStyle,setAnnounceStyle]= useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
    const handleClose=()=>{
        setAnnounceStyle(AnnounceStyle + " hidden")
    }
  return <div className={AnnounceStyle}>
    <h2> HURRY UP! it's end of season sale</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>;
}

export default Announce;