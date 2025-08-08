import { useEffect, useState } from "react"
import Products from "../components/products"
import Contains from "../contains"
import axios from "axios"
import Footer from "../components/footer"


function Home() {
    const [Data ,SetData]=useState([])

    const GetJob =()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            SetData(response.data)
        })
    }
    useEffect(()=>{
        GetJob()
    },[])

    return <>
    <div>
    < Contains />
    </div>
    <div className="flex flex-wrap gap-8 justify-center mt-20">
        {
            Data.slice(8,14).map((item)=>{
                return (

                    <Products 
                    picture ={item.image}
                    Title ={item.category}
                    Money ={item.price}
                    />

                )
            })
        }
    </div>
    <div className="mt-20">
        <Footer />
    </div>
    </>
    
}
export default Home