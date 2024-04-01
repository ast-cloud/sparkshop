import { Divider, Typography } from "@mui/material";

export default function Men(){
    return (
        <div className="flex justify-center ">
            <div className="flex flex-col mt-12" style={{width:'85vw'}}>
                <Typography variant="h5">Men Clothing</Typography>
                <Divider flexItem color="#FBD139"  className="my-2" sx={{width:'8vw', height:'2px'}}/>
                <p className="my-2" style={{alignSelf:'flex-end'}}>Sort By</p>
                <div className="flex">

                </div>
            </div>
        </div>
    );
}