'use client';
import { IconButton, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useRef } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function ScrollableProductContainer(props:{containerHeading: string}){
    
    const productsDivRef = useRef(null);
    let currentIndex = 2;

    function scrollToIndex(index: any) {
        const listNode = productsDivRef.current;
        // This line assumes a particular DOM structure:
        if(listNode){
            if(index<2) index=2;
            let len = listNode.querySelectorAll('.product_card').length;
            if(index>=len-2) index=len-1-2;
            currentIndex=index;
            const imgNode = listNode.querySelectorAll('.product_card')[index];
            imgNode.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
      }

    return (
        <>  
            <div className="flex flex-row justify-between">
                <Typography variant="h4" color={"darkslategrey"}>{`${props.containerHeading}`}</Typography>
                <div>
                    <IconButton onClick={()=>{scrollToIndex(currentIndex-1)}}><KeyboardDoubleArrowLeftIcon/></IconButton>
                    <IconButton onClick={()=>{scrollToIndex(currentIndex+1)}}><KeyboardDoubleArrowRightIcon/></IconButton>
                </div>
            </div>
            <div ref={productsDivRef} className="flex flex-nowrap overflow-x-auto space-x-2 pb-1 horizontal_scrollable_product_container" style={{border:'0px solid red'}}>
                <div className="product_card">
                    <ProductCard index={0}/>
                </div>
                <div className="product_card">
                    <ProductCard index={1}/>
                </div>
                <div className="product_card">
                    <ProductCard index={2}/>
                </div>
                <div className="product_card">
                    <ProductCard index={3}/>
                </div>
                <div className="product_card">
                    <ProductCard index={4}/>
                </div>
                <div className="product_card">
                    <ProductCard index={5}/>
                </div>
                <div className="product_card">
                    <ProductCard index={6}/>
                </div>
            </div>
        </>
    );
}