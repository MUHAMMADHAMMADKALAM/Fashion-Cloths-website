import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
    <nav className="h-20 mx-[50px] flex justify-between items-center ">
        <div className="">
            <Image className="justify-center" src="/Frame 57.png" alt="icon" width="236" height="60" />
        
            
        </div>
        <div className="">
            <Link href="/" className="mx-4 hover:bg-slate-200 py-2 px-3 rounded-lg active:bg-white">CATALOGUE  </Link>
            <Link href="!#" className="mx-4 hover:bg-slate-200 py-2 px-3 rounded-lg active:bg-white">FASHION  </Link>
            <Link href="!#" className="mx-4 hover:bg-slate-200 py-2 px-3 rounded-lg active:bg-white">FAVOURITE  </Link>
            <Link href="!#" className="mx-4 hover:bg-slate-200 py-2 px-3 rounded-lg active:bg-white">LIFESTYLE  </Link>
            <Link href="!#" className="bg-black text-white px-3 py-2 rounded-lg hover:text-slate-300 active:text-black">SIGN UP</Link>
        </div>

    </nav>
    )
}