"use client";

import { useRouter } from "next/navigation";

const ProductPage = () => {

    const router = useRouter()
    const handelClick = (id: number) => {
        router.push(`/product/${id}`)
    }

    return (
        <>
            <button className="w-[150px] p-2 bg-blue-500 rounded-md text-white m-2  " onClick={() => handelClick(1)} >product 1</button>
            <button className="w-[150px] p-2 bg-blue-500 rounded-md text-white m-2  " onClick={() => handelClick(2)} >product 2</button>
            <button className="w-[150px] p-2 bg-blue-500 rounded-md text-white m-2  " onClick={() => handelClick(3)} >product 3</button>
            <button className="w-[150px] p-2 bg-blue-500 rounded-md text-white m-2  " onClick={() => handelClick(4)} >product 4</button>
        </>
    )
}
export default ProductPage