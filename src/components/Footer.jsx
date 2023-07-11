import React from 'react'
import LogoWhite from '../assets/img/logo-white.svg'
import facebook from '../assets/img/icon-facebook.svg'
import twitter from '../assets/img/icon-twitter.svg'
import youtube from '../assets/img/icon-youtube.svg'
import pinterest from '../assets/img/icon-pinterest.svg'
import instagram from '../assets/img/icon-instagram.svg'

function Footer() {
  return (
    <>
        <div className="bg-veryDarkBlue">

            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">

                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    
                    
                        <div className="h-8 " alt="" >
                            <img src={LogoWhite} alt="" />
                        </div>
                        
                        <div className="flex justify-center space-x-4">
                        
                            <a href="#">
                                <img src={facebook} alt="" className="h-8" />
                            </a>
                            
                            <a href="#">
                                <img src={youtube} alt="" className="h-8" />
                            </a>
                            
                            <a href="#">
                                <img src={twitter} alt="" className="h-8" />
                            </a>
                            
                            <a href="#">
                                <img src={pinterest} alt="" className="h-8" />
                            </a>
                            
                            <a href="#">
                                <img src={instagram} alt="" className="h-8" />
                            </a>

                        </div>
                </div>

            <div className="flex justify-around space-x-32">

                <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">Home</a>
                <a href="#" className="hover:text-brightRed">Pricing</a>
                <a href="#" className="hover:text-brightRed">Products</a>
                <a href="#" className="hover:text-brightRed">About</a>
                </div>

                <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">Careers</a>
                <a href="#" className="hover:text-brightRed">Community</a>
                <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                </div>

            </div>


            <div className="flex flex-col justify-between">
                <form>
                <div className="flex space-x-3">
                    <input
                    type="text"
                    className="flex-1 px-4 rounded-full focus:outline-none"
                    placeholder="Updated in your inbox"
                    />
                    <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                    Go
                    </button>
                </div>
                </form>
                <div className="hidden text-white md:block">
                Copyright &copy; 2023, All Rights Reserved
                </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Footer