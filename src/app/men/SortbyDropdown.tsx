'use client';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

export default function SortbyDropdown(){

    const [sortbyValue, setSortbyValue] = useState('0');
    const handleChange = (event: SelectChangeEvent) => {
        setSortbyValue(event.target.value);
      };

    return (
        <FormControl sx={{width:'150px', border:'0px solid red'}} >
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortbyValue}
                label="Sort By"
                onChange={handleChange}
                size='small'
                className='w-full'
                sx={{fontSize:'10px'}}
            >
                <MenuItem value={'0'}>Popular</MenuItem>
                <MenuItem value={'1'}>New</MenuItem>
                <MenuItem value={'2'}>Price (Low to high)</MenuItem>
                <MenuItem value={'3'}>Price (High to low)</MenuItem>
            </Select>
        </FormControl>
    );
}