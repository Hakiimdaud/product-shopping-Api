function Products(props) {
    return <>
    <div>

        <div className="">
            <div className="w-[310px] h-72 border-2 border-black px-6 pt-1">
                <img className="w-[300px] h-[170px] " src={props.picture} alt="" />
                <div className="flex justify-between px-10 py-4">
                    <h1 className="font-semibold">{props.Title}</h1>
                    <h1 className="font-semibold">${props.Money}</h1>
                </div>
                <button className="p-2 py-2 bg-green-900 text-2xl text-white w-full ">Add To Cart</button>

            </div>







        </div>











    </div>
    </>
    
}
export default Products