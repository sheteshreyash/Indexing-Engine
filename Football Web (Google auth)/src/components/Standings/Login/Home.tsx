import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { CLUBLIST, leagues } from "../../../constants/constants";
import { SignUpOrInFlow, useSession} from "@descope/react-sdk";
import { Club } from "../StandingLayout.types";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isSessionLoading } = useSession();

  useLayoutEffect(() => {
    isAuthenticated && !isSessionLoading && navigate('/leagues')
  },[isAuthenticated, isSessionLoading])

    console.log(CLUBLIST)
  return (
    <div className="flex flex-wrap w-full h-screen bg-gray-100">
      <div className="w-2/3 flex items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {CLUBLIST.map((club) => (
            <div key={club?.id} className="p-2">
              <img
                src={club.crestUrl}
                alt={club.name}
                className="h-40 w-45 rounded-t-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          <span className="block font-extrabold tracking-wider text-center text-3xl leading-none">
            House of Football
          </span>
          <hr className="w-32 my-4 mx-auto border-2 border-black" />
          <span className="block font-extrabold tracking-wider text-center uppercase text-sm">
            Join the community today!
          </span>
        </h2>

        {/* SIGN UP / SIGN IN  */}
        <div className="max-w-md w-full p-6">
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 shadow-lg">
            <SignUpOrInFlow
              theme="light"
              onSuccess={(e) => {
                navigate('/leagues')
              }}
              onError={(err) => {
                console.log("Error!", err);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
