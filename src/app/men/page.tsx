'use client';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import SortbyDropdown from "./SortbyDropdown";
import { CheckBox, KeyboardArrowDown } from "@mui/icons-material";
import Filters from "../ui/FilterWidget";


export default function Men(){

    return (
        <div className="flex justify-center ">
            <div className="flex flex-col mt-12" style={{width:'85vw'}}>
                <Typography variant="h5">Men Clothing</Typography>
                <Divider flexItem color="#FBD139"  className="my-2" sx={{width:'8vw', height:'2px'}}/>
                <div className="my-2" style={{alignSelf:'flex-end'}}>
                    <SortbyDropdown/>
                </div>
                <div className="flex mt-5">
                    <Filters/>
                    <Grid></Grid>
                </div>
            </div>
        </div>
    );
}