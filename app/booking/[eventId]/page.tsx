"use client";
import React from "react";

export default function Page({ params }: { params: { eventId: number } }) {
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
      <div></div>
    </>
  );
}
