import { Typography } from "@mui/material"
import HomePageSlides from "./ui/HomePageSlides"
import ProductCard from "./ui/ProductCard"
import ScrollableProductContainer from "./ui/ScrollableProductContainer"

export default function Home() {

  

  return (
    <div className="">
      <HomePageSlides/>
      <div className="my-10 mx-14" style={{border:'0px solid red'}}>
        <ScrollableProductContainer/>
      </div>
    </div>
  )
}

