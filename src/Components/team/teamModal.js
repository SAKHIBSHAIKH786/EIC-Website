import React, { useState } from "react";
import { MdClose } from 'react-icons/md';
import { GrLinkedin,GrInstagram,GrFacebook } from 'react-icons/gr';

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/*header*/}
                <div className="flex items-start gap-8 p-5 bg-blue-200 rounded-t-lg">
                  <div className="rounded-t-lg">
										<img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
											className="h-40 w-40 m-auto rounded-full shadow-md" />
									</div>

									<div className="flex flex-col gap-4">
										<div className="text-left">
											<h1 className="text-2xl">Arnav Botre</h1>
											<h3 className="text-xl italic">President and Founder</h3>
										</div>
										<div className="flex gap-6 text-2xl">
											<GrLinkedin className="bg-white text-blue-800 cursor-pointer hover:text-white hover:bg-blue-800"/>
											<GrInstagram className="p-0.5 text-white bg-pink-600 cursor-pointer hover:bg-white hover:text-pink-600"/>
											<GrFacebook className="bg-white text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600"/>
										</div>
									</div>

                  <button
                    className="p-1 ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                   	<MdClose />
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto rounded-b-lg">
                  <p className="my-4 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>             
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
