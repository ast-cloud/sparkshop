'use client';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ProductCard(props : {index:Number}){
    
    return (
        <Card onClick={function(){}} style={{width:255, height:280, marginTop:55, marginRight:20, cursor:'pointer', flex:'0 0 auto'}}>
          <CardMedia className="hover:scale-105 transition duration-500" sx={{ height: 160, borderRadius:'4px'}} image={'/p1.webp'} title={'Crafts World Stylish Wooden Wall Shelves | Wooden Wall Shelf '} />
          <CardContent>
              <Typography variant="body2" sx={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp: '2', '-webkit-box-orient': 'vertical'}}>
              Crafts World Stylish Wooden Wall Shelves | Wooden Wall Shelf
              </Typography>
              <Typography variant="body2" sx={{color:'grey', fontSize:'12px', marginTop:'4px'}}>
                  author {`${props.index}`}
              </Typography>
              <div style={{display:'flex', justifyContent:'flex-start', marginTop:'4px'}}>
                  <Typography variant="body2">
                      $200
                  </Typography>
                  <Typography variant="body2" sx={{color:'grey', marginLeft:'7px', textDecoration:'line-through'}}>
                      $250
                  </Typography>
                  <Typography variant="body2" sx={{color:'grey', marginLeft:'7px'}}>
                      20% off
                  </Typography>
              </div>
          </CardContent>
        </Card>
    );
}