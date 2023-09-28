"use client";
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus
} from "react-icons/ai";

export default function Page({ params }: { params: { eventId: number } }) {
  const [children, setChildren] = useState(0);
  console.log(params.eventId);
  return (
    <>
      {/*
    Features:
    - Continue last session
      - Load page, check for localStorage, if data exist prompt "continue last session?"" else create new form
      - JSON file add timestamp, if currentDate > timestamp for over 24 hours, clear localStorage
      - For every step, click "Next" button will update JSON file in localStorage
      - After clicking "Submit" button, clear localStorage
    
    - Multistep Form
      - 1. Pick numbers of guardians and childrens
      - 2. Fill in guardian & children form based on numbers filled in
      - 3. Show banking details, wait for user upload, disable submit button before file exist, (prompt "Please upload the receipt before submitting")
      - 4. Get status of Sheet API, if OK prompt "Success" else "Something went wrong, please contact us for more info. [button] - eefang/phanuel"
      - 5. Send email to user with success submission along with Itinerary and Filled In Form Details
    */}
      {/* 
    Top priority:
    1. Set up Sheet API, update whatever the shit I type to my Sheet
    */}
      <div className="min-h-screen pt-[5vh] pb-[10vh] px-[10vw] md:px-[15vw]">
        <p className="text-2xl font-bold my-8">Step 1</p>
        
        <div className="flex justify-between my-12">

          <div>
            IMAGE
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="flex">
                <button className="border rounded-lg p-2 bg-white"><AiOutlineMinus className="h-[20px] w-[20px]"/></button>
                <input type="number" className="form-input rounded-lg w-[50px] h-[50px]"/>
                <button className="border rounded-lg p-2 bg-white"><AiOutlinePlus className="h-[20px] w-[20px]"/></button>
              </div>
              <p>Children</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex">
                <button className="border rounded-lg p-2 bg-white"><AiOutlineMinus className="h-[20px] w-[20px]"/></button>
                <input type="number" />
                <button className="border rounded-lg p-2 bg-white"><AiOutlinePlus className="h-[20px] w-[20px]"/></button>
              </div>
              <p>Adults</p>
            </div>
          </div>

        </div>

        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 border rounded-lg font-bold text-neutral-500 bg-neutral-200">Cancel</button>
          <button className="px-4 py-2 border rounded-lg bg-sky-700 text-white font-bold">Next</button>
        </div>
      
      </div>
    </>
  );
}
