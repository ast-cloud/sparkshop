'use client';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

export default function SortbyDropdown(){
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Sort By"
                onChange={()=>{}}
                size='small'
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}