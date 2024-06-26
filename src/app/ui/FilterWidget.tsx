import { KeyboardArrowDown } from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Typography, } from '@mui/material';
export default function Filters(){

    return (
        <div className="flex flex-col " style={{width:'12vw', border:'0px solid red'}}>
                        <p className="mb-2 ml-5" style={{fontWeight:'bold'}}>Filters</p>
                        {/* Categories */}
                        <Accordion elevation={0} className='' sx={{border:'none'}} disableGutters>
                            <AccordionSummary sx={{fontSize:'10px', margin:0, border:'0px solid red', height: '40px', minHeight:'10px'}}>
                                <div className="flex justify-between w-full">
                                    <Typography>Category</Typography>
                                    <KeyboardArrowDown sx={{color:'grey'}}/>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="pt-0" sx={{border:'0px solid green'}}>
                            <div className="flex flex-col">
                                <Typography variant="body2" className="pb-1">Topwear</Typography>
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">T-Shirts</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Shirts</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Kurta</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Hoodies</Typography>} />
                                <Typography variant="body2" className="py-1">Bottomwear</Typography>
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Shorts</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Jeans</Typography>} />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        {/* Sizes */}
                        <Accordion elevation={0} className='' sx={{border:'none'}} disableGutters>
                            <AccordionSummary sx={{fontSize:'10px', margin:0, border:'none', height:'40px', minHeight:'10px'}}>
                                <div className="flex justify-between w-full">
                                    <Typography>Sizes</Typography>
                                    <KeyboardArrowDown sx={{color:'grey'}}/>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="pt-0">
                            <div className="flex flex-col">
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">XS</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">S</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">M</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">L</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">XL</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">XXL</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">XXXL</Typography>} />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        {/* Colors */}
                        <Accordion elevation={0} className='' sx={{border:'none'}} disableGutters>
                            <AccordionSummary sx={{fontSize:'10px', margin:0, border:'none', height:'40px', minHeight:'10px'}}>
                                <div className="flex justify-between w-full">
                                    <Typography>Colors</Typography>
                                    <KeyboardArrowDown sx={{color:'grey'}}/>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="pt-0">
                            <div className="flex flex-col">
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<div className="flex items-center">
                                    <div style={{height:'14px', width:'14px', borderRadius:'8px', backgroundColor:'maroon'}}></div>
                                    &nbsp;
                                    <Typography variant="body2">Maroon</Typography>
                                </div>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<div className="flex items-center">
                                    <div style={{height:'14px', width:'14px', borderRadius:'8px', backgroundColor:'green'}}></div>
                                    &nbsp;
                                    <Typography variant="body2">Green</Typography>
                                </div>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<div className="flex items-center">
                                    <div style={{height:'14px', width:'14px', borderRadius:'8px', backgroundColor:'yellow'}}></div>
                                    &nbsp;
                                    <Typography variant="body2">Yellow</Typography>
                                </div>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<div className="flex items-center">
                                    <div style={{height:'14px', width:'14px', borderRadius:'8px', backgroundColor:'turquoise'}}></div>
                                    &nbsp;
                                    <Typography variant="body2">Turquoise</Typography>
                                </div>} />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        {/* Design */}
                        <Accordion elevation={0} className='' sx={{border:'none'}} disableGutters>
                            <AccordionSummary sx={{fontSize:'10px', margin:0, border:'none', height:'40px', minHeight:'10px'}}>
                                <div className="flex justify-between w-full">
                                    <Typography>Design</Typography>
                                    <KeyboardArrowDown sx={{color:'grey'}}/>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="pt-0">
                            <div className="flex flex-col">
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Block</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Printed</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Checked</Typography>} />
                                <FormControlLabel control={<Checkbox size="small" sx={{height:'10px', border:'0px solid blue'}}/>} label={<Typography variant="body2">Striped</Typography>} />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
    );

}