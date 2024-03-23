import { Typography } from "@mui/material";

export function Footer(){

    return (
        <div style={{backgroundColor:'#ebe8e8', padding:20, marginTop:0, marginBottom:0, marginLeft:0, marginRight:0, textAlign:'center'}}>
            <Typography>
                &copy; {new Date().getFullYear()} Spark Shop All rights reserved | Terms and conditions apply
            </Typography>
        </div>
    )

}