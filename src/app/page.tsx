import { TextField, Typography } from "@mui/material"
import HomePageSlides from "./ui/HomePageSlides"
import ProductCard from "./ui/ProductCard"
import ScrollableProductContainer from "./ui/ScrollableProductContainer"
import EmailInput from "./ui/EmailInput"

export default function Home() {

  
  return (
    <div className="">

      <HomePageSlides/>

      <div className="my-10 mx-14" style={{border:'0px solid red'}}>
        <ScrollableProductContainer containerHeading="Shop Best Sellers"/>
      </div>

      <br />

      <div className="my-10 mx-14" style={{border:'0px solid red'}}>
        <ScrollableProductContainer containerHeading="New products"/>
      </div>

      <div className="mt-20 mb-0 lg:py-10 px-5 lg:px-0 h-48 lg:h-40 flex flex-col lg:flex-row justify-evenly" style={{backgroundColor:'#F4F1EA'}}>
        <div className="flex flex-col self-center">
          <Typography variant="h6">Spark Shop newsletter</Typography>
          <Typography variant="body2">New products, limited editions, event invitations and much more.</Typography>
        </div>
        <div className="flex w-50 self-center cursor-pointer">
          <EmailInput/>
        </div>
      </div>

    </div>
  )
}


