import React from "react";
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Counter from '../components/Counter';

function ProductPage() {
  return <div>
    <Announce/>
    <Navbar/>
    <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
            <img
             src="https://unsplash.com/photos/nimElTcTNyY"
            alt="product_img"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease in duration-300"
            />
        </div>
        <div className="flex-[1.3] flex items-center justify-items-start flex-col mt-10">
            <h1 className="title text-[40px]">
            Sunflower yellow tracksuit
            </h1>
            <p className="pr[4rem] text-justify mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem hic ullam voluptatem maiores sequi, eligendi, nesciunt nemo voluptatibus in rem aliquam?
                Voluptatibus quia repellendus sed porro exercitationem deleniti provident nisi?
            </p>
            <div className="flex flex-col place-self-start">
            <p className=" mt-7 text-3xl">
             Price: <b>70$</b>
             </p>
        {/* COLOR VARIANTS*/}
        <div className="flex text-2xl mt-7">
            Colors
        <div className=" bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5  hover:border-[#8a4af3]"></div>
        <div className=" bg-blue-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
        <div className=" bg-pink-500 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
     </div>

    </div>
    <div className='mt-7 text-2xl'>
    Size
    <select className='ml-5 border-2'>
        <option selected disabled>Select</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
    </select>
    </div>
    <div className="mt-5">
    <Counter/>
    </div>
    </div>
    <button className="btn mt-5">
        Add to Cart
        </button>
        </div>
       
    <Newsletter/>
    <Footer/>
    </div>;

};

export default ProductPage;