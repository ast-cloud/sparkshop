import { Divider, Typography } from "@mui/material";
import {Instagram, Facebook, Pinterest, YouTube} from '@mui/icons-material';

export function Footer(){

    return (
        <div className="flex flex-col" style={{backgroundColor:'#ebe8e8', padding:20, marginTop:0, marginBottom:0, marginLeft:0, marginRight:0, textAlign:'center'}}>
            <div className="flex my-5 justify-evenly ">
                <div className="flex flex-col items-start space-y-1">
                    <Typography fontWeight={5} variant="body1">Shop</Typography>
                    <p style={{color:'darkslategrey'}}>Male</p>
                    <p style={{color:'darkslategrey'}}>Female</p>
                    <p style={{color:'darkslategrey'}}>Topwear</p>
                    <p style={{color:'darkslategrey'}}>Bottomwear</p>
                </div>
                <div className="flex flex-col items-start space-y-1">
                    <Typography fontWeight={5} variant="body1">Why Spark Shop</Typography>
                    <p style={{color:'darkslategrey'}}>Our story</p>
                    <p style={{color:'darkslategrey'}}>Sustainability</p>
                    <p style={{color:'darkslategrey'}}>Careers at Spark Shop</p>
                </div>
                <div className="flex flex-col items-start space-y-1">
                    <Typography fontWeight={5} variant="body1">Support</Typography>
                    <p style={{color:'darkslategrey'}}>Contact</p>
                    <p style={{color:'darkslategrey'}}>Size guide</p>
                    <p style={{color:'darkslategrey'}}>FAQs</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="space-x-4">
                        <Instagram sx={{fontSize:'35px'}}/>
                        <Facebook sx={{fontSize:'35px'}}/>
                    </div>
                    <div className="space-x-4">
                        <Pinterest sx={{fontSize:'35px'}}/>
                        <YouTube sx={{fontSize:'35px'}}/>
                    </div>
                </div>
            </div>
            <Divider flexItem className="my-5" />
            <p className="text-sm font-normal" style={{color:'darkslategrey'}}>
                &copy; {new Date().getFullYear()} Spark Shop All rights reserved | Terms and conditions apply
            </p>
        </div>
    );

}