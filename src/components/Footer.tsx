import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        < footer className="">
        <section className="bg-[#E5C643] flex justify-center">
          <center className="mt-12   ">
            <h1 className="text-4xl text-white font-extrabold ">JOIN SHOPPING COMMUNIT TO </h1>
            <h1 className="text-4xl text-white font-extrabold ">GET MONTHLY PROMO</h1>
            <p className="text-2xl text-white font-normal mt-6 ">Type your email down below and be young wild generation.</p>

            <form className="bg-white py-1 w-[350px] mt-8 mb-28 rounded-md">

              <input className="pr-16 py-2 pl-4" type="email" name="email" id="emial" placeholder="Add your email here" />
              <button type="submit" className=" hover:text-slate-400 active:text-slate-100 font-semibold bg-black text-white  py-2 px-5 rounded-md ">SEND</button>

        </form>
        </center>
      </section>
      <section className="flex bg-black">
        <div className="pt-24 ml-24">
          <h1 className="text-white text-4xl font-bold mb-6">FASHION</h1>
          <p className="text-white mb-6" >Complete your style with awesome <br />clothes from us.</p>
          <div className="flex mb-24 ">
            
             <a className="mx-1" href="https://www.facebook.com/profile.php?id=61555985446463" target="blank"><Image src="/Group 10.png" alt="Catlog Img" width="50" height="50" /> </a>
             <a className="mx-1" href="" target="blank"><Image src="/Group 11.png" alt="Catlog Img" width="50" height="50" /> </a>
             <a className="mx-1" href="" target="blank"><Image src="/Group 12.png" alt="Catlog Img" width="50" height="50" /> </a>
             <a className="mx-1" href="https://www.linkedin.com/in/sheikh-hammad-4771202b5/" target="blank"><Image src="/Group 13.png" alt="Catlog Img" width="50" height="50" /> </a>

          </div>
        </div>
       <div className="mt-24 ml-72 flex justify-around" >
       <div className="mx-12">
          <h1 className="text-white">Company</h1>
          <ul className="text-slate-400 leading-[45px]">
            <li>About </li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="mx-12">
          <h1 className="text-white">Quik Link</h1>
          <ul className="text-slate-400 leading-[45px]">
            <li>Share Location</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="mx-12">
          <h1 className="text-white">Legal</h1>
        <ul className="text-slate-400 leading-[45px]">
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            
          </ul>
        </div>
       </div>


      </section>
    </footer>
  
    )
}