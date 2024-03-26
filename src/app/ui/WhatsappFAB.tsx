import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function WhatsappFAB(props:{left?:any, right?:any, top?:any, bottom?:any}){

    return (
        <Link href={'https://wa.me/918318485265?text=Hello%20there!'} target='_blank'>
            <Fab size='medium' sx={{position:'fixed', color:'green', left: props.left, right: props.right, top: props.top, bottom: props.bottom}}>
                <WhatsAppIcon/>
            </Fab>
        </Link>
    );
}