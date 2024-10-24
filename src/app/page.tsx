import Image from "next/image";

export default function Home() {
  return (
    <main className=" my-[25px] h-80 ">
      <section className="flex mx-[50px] bg-[#F4F6F5] my-[25px] rounded-3xl justify-between">
        <div className="mt-[85px] ml-[65px] ">
          <h1 className="font-extrabold text-7xl bg-white mr-20  pl-2 pb-2">LET'S</h1>
          <h1 className="font-extrabold text-7xl">EXPLORE</h1>
          <h1 className="font-extrabold text-7xl  bg-[#EBD96B] mr-8 pl-2 pb-2 mt-2">UNIQUE</h1>
          <h1 className="font-extrabold text-7xl">CLOTHES.</h1>
          <h2 className="my-6 text-xl font-semibold">Live for Influential and Innovative fashion!</h2>
          <button className="hover:text-slate-400 active:text-slate-100 text-1xl font-bold bg-black text-white py-4 px-6 rounded-lg "> SHOP NOW</button>


        </div>
        <div className="mt-10 mr-7">
          <Image src="/poster.png" alt="poster" width="600" height="800" />
        </div>
      </section>
      <section>
        <div className="w-full my-10">
          <Image src="/Brands.png" alt="Brand Img" width="1920" height="186" />
        </div>
      </section>
      <section className="mx-[50px]">
        <div className=" mt-12 mb-20">
          <Image src="/Group 78.png" alt="Logo Img" width="300" height="58" />

        </div>
        <div className="flex justify-between mt-[30px] mb-[50px]">
          <Image className="hover:bg-yellow-100 rounded-lg px-2 pb-2" src="/Frame 15.png" alt="Catlog Img" width="360" height="80" />
          <Image className="hover:bg-yellow-100 rounded-lg px-2 pb-2" src="/Frame 16.png" alt="catlog Img" width="360" height="58" />
          <Image className="hover:bg-yellow-100 rounded-lg px-2 pb-2" src="/Frame 17.png" alt="catlog Img" width="360" height="58" />

        </div>
      </section>
      <section className="flex bg-[#F9DF56] ">

        <div>
          <Image src="/image 12.png" alt="poster" width="600" height="800" />

        </div>
        <div className="mt-20  ml-16">
          <h1 className="text-7xl font-extrabold mb-5  bg-white mr-12  pl-2 pb-2">PAYDAY</h1>
          <h1 className="text-7xl font-extrabold mb-8"> SALE NOW</h1>
          <h2 className="text-2xl font-semibold mb-8">Spend minimal $100 get 30% off <br />
            voucher code for you next purchase
          </h2>
          <h1 className="text-3xl font-bold ">1 June - 10 June 2021</h1>
          <h1 className="text-2xl font-semibold mb-8">*Terms & conditions apply</h1>
          <button className="hover:text-slate-400 active:text-slate-100 text-1xl font-bold bg-black text-white py-4 px-6 rounded-lg "> SHOP NOW</button>
        </div>
      </section>
      <section>
        <div>
          <Image className="mt-24 mb-20 ml-[50px]" src="/Group 82.png" alt="Logo Img" width="300" height="58" />

        </div>
        <div className="flex justify-around mx-[35px]">
          <Image className="hover:bg-yellow-100 rounded-lg px-2 pb-2" src="/Group 79.png" alt="Catlog Img" width="600" height="100" />
          <Image className="hover:bg-yellow-100 rounded-lg px-2 pb-2" src="/Group 80.png" alt="Catlog Img" width="600" height="100" />


        </div>
      </section>
      <section className="flex w-full justify-around mt-10">
        <div className="">
          <h1 className="font-extrabold text-4xl mt-[200px] ml-[65px]">DOWNLOAD APP & <br />GET THE VOUCHER!</h1>
          <p className="mt-10 ml-[65px] text-l">Get 30% off for first transaction using <br />
            Rondovision mobile app for now.
          </p>
          <div className="ml-[65px] mt-10">
            <button className=""><a target="blank" href="https://www.apple.com/app-store/"><Image className=" active:bg-slate-600  mr-3" src="/Rectangle 55.png" alt="mobile Img" width="150" height="50" /></a></button>
            <button className=""><a target="blank" href="https://play.google.com/store/games?hl=en"><Image className=" active:bg-slate-600" src="/Rectangle 18.png" alt="mobile Img" width="150" height="50" /></a></button>


          </div>
        </div>
        <div>
          <Image src="/Mobile app.png" alt="mobile Img" width="400" height="100" />

        </div>
      </section>
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
    </main>
  )
}