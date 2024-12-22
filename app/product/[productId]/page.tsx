const  ProductDetail=({params}:{
    params:{
        productId:number
    }
})=>{
    return(
        <>
        <h1 className="text-[48px] font-extrabold">
        Deatil of product{params.productId}
        </h1>
        </>
    )
}
export default ProductDetail