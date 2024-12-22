import Link from "next/link"

const About=()=>{
    return(
        <>
        About page 
               <button>TContact number <Link className="w-[100px] bg-black text-white" href="/about/contact">Click her</Link></button>
        </>
    )
}
export default About