import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logoGreenbuilt.png";
import { useSelector } from "react-redux";
import { authenticated } from "../../../utils/auth";

// Components Import
import { SendOtp } from "./forms/SendOtp";
import { VerifyOtp } from "./forms/VerifyOtp";
import { UserDetails } from "./forms/UserDetails";

export const SignUp = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [form, setForm] = useState(1);
  const [confirmObj, setConfirmObj] = useState();
  const [businessName, setBusinessName] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token && user.role === 2) {
      if (user.isApproved) {
        navigate("/business/dashboard");
      }
      else if(user?.documentArray?.length < 2)
      {
        navigate("/documents")
      }
       else {
        navigate("/notapproved");
      }
    }
  }, [user]);

  // Functions to append state from the children components
  const setFormValue = (formNumber) => setForm(formNumber);
  const setConfirmValue = (value) => setConfirmObj(value);
  const businessDetails = (name, phone) => {
    setBusinessName(name);
    setBusinessPhone(phone);
  };

  return (
    <div className="bg-signupBg bg-no-repeat bg-cover bg-center">
      <img src={Logo} className="w-60 mx-auto fixed top-2 left-2 " alt="" />
      <div className="min-h-screen bg-gradient-to-br from-purple-1 to-transparent flex items-center justify-end">
        <div className="w-11/12 sm:w-9/12 md:w-2/3 lg:w-1/3 bg-white rounded-3xl shadow-xl px-6 py-8 mx-auto sm:mr-8 md:mr-16 lg:mr-24 xl:mr-32">
          <h1 className="text-3xl font-bold text-purple-1 pt-3 text-left">
            Come on Aboard ...
          </h1>
          {form === 1 || form === 2 ? (
            <SendOtp
              formNumber={form}
              businessDetails={businessDetails}
              changeFormNumber={setFormValue}
              changeConfirmObj={setConfirmValue}
            />
          ) : null}
          {form === 3 ? (
            <VerifyOtp
              confirmObj={confirmObj}
              businessName={businessName}
              businessPhone={businessPhone}
              changeFormNumber={setFormValue}
            />
          ) : null}
          {form === 4 ? (
            <UserDetails
            changeFormNumber={setFormValue}
              businessName={businessName}
              businessPhone={businessPhone}
            />
          ) : null}
          <h1 className="text-base font-normal text-purple-1 text-left">
            Already have an account ?{" "}
            <Link to="../login" className="underline hover:text-purple-1">
              {" "}
              Log In
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};
