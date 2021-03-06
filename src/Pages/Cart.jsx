import React from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div>
        <div className="flex justfy-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 ">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>
          <div className="flex underline text-size-lg hover:cursor-pointer">
            <p> Items in your cart: 3</p>
            <p className="ml-5">Whishlist Item:0</p>
            <p className="ml-5"> </p>
          </div>
          <button className="btn">Checkout</button>
        </div>

        {/*Central div*/}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            {/*list of products div*/}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale[1.1] ease-in duration-300"
                  src="https://unsplash.com/photos/nimElTcTNyY"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>12345
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>yellow track suit for women
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p[10px] cursor-pointer ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>Large
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            {/*2nd  product*/}

            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale[1.1] ease-in duration-300"
                  src="https://unsplash.com/photos/laobUPA4jR8"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>12345678
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>stylish look
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p[10px] cursor-pointer ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>Large
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
              </div>
              <hr className="mt-7 mb-7" />
          </div>
          <div className=" p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3]
          rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Total Summary</h1>
            <div className="flex justify-between mt-3 w[100%]">
                <p>Subtotal</p>
                <p>140$</p>
            </div>
            <div className="flex justify-between mt-3 w[100%]">
                <p>Shipping charges</p>
                <p>40$</p>
            </div>
            <div className="flex justify-between mt-3 w[100%]">
                <p>Discount</p>
                <p>-40$</p>
            </div>
            <div className="flex justify-between mt-3 w[100%] text-3xl font-bold">
                <p>Total</p>
                <p>140$</p>
            </div>
            </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
