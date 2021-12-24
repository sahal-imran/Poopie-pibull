import React from 'react'

function Footer() {
    return (
        <div className=" flex flex-col -mt-1 bg-black-default py-8">
            <div className='grid grid-rows-1 md:grid-cols-3 grid-cols-4 gap-x-4 justify-center items-center w-4/5 m-auto py-8 px-12 rounded-lg bg-gradient-to-r from-gradFrom to-gradTo' >
                 <div className='flex md:col-span-1 col-span-2 justify-center items-center' >
                     <img src="./images/FooterText.png" alt="" />
                 </div>
                 <div className='flex justify-center items-center' >
                     <img src="./images/arrow.png" alt="" />
                 </div>
                 <div className='flex justify-center items-center' >
                     <a href=""><img src="./images/discord.png" alt="" /></a>
                 </div>
            </div>
            <div className='mt-16 flex flex-col md:flex-row justify-center md:justify-evenly items-center' >
                <p className='text-white-light text-lg mb-4' >Poopie Pitbull NFT © 2021 </p>
                <a className='text-white-light text-lg mb-4' target={"_blank"} href="">Terms & conditions</a>
                <div className='flex mb-4' >
                    <a href=""><img className='m-4' src="./images/discord-fill.png" alt="" /></a>
                    <a href=""><img className='m-4' src="./images/twitter-fill.png" alt="" /></a>
                    <a href=""><img className='m-4' src="./images/facebook-fill.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
