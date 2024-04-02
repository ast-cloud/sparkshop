'use client';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import SortbyDropdown from "./SortbyDropdown";
import { CheckBox, KeyboardArrowDown } from "@mui/icons-material";


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
                    <div className="flex flex-col">
                        <p className="mb-2 ml-5" style={{fontWeight:'bold'}}>Filters</p>
                        <Accordion elevation={0} className='' sx={{border:'none'}} disableGutters>
                            <AccordionSummary sx={{fontSize:'10px', margin:0, border:'none'}}>
                                <div className="flex justify-between w-full">
                                    <Typography>Category</Typography>
                                    <KeyboardArrowDown sx={{color:'grey'}}/>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className="flex flex-col">
                                <FormControlLabel control={<Checkbox />} label="Checkbox 1" />
                                <FormControlLabel control={<Checkbox />} label="Checkbox 2" />
                                <FormControlLabel control={<Checkbox />} label="Checkbox 3" />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion elevation={0} className='' sx={{border:'none'}} disableGutters>
                            <AccordionSummary sx={{margin:0, border:'none'}}>
                                <div className="flex justify-between w-full">
                                    <Typography>Sizes</Typography>
                                    <KeyboardArrowDown sx={{color:'grey'}}/>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className="flex flex-col">
                                <FormControlLabel control={<Checkbox />} label="Checkbox A" />
                                <FormControlLabel control={<Checkbox />} label="Checkbox B" />
                                <FormControlLabel control={<Checkbox />} label="Checkbox C" />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Grid></Grid>
                </div>
            </div>
        </div>
    );
}