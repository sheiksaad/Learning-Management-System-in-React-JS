import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../../config/Firebase-config";
import logo from "../../assets/logo.jpg";
import png from "../../assets/login.png";

function SignUp() {
  let [showPass, setShowPass] = useState(false);
  let [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      localStorage.setItem("user", JSON.stringify(formData));
      await signOut(auth);

      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-5">
        {/* Logo */}
        <div className="w-24 md:w-32 lg:w-40">
          <img src={logo} alt="Logo" />
        </div>

        {/* Heading */}
        <h3 className="text-xl md:text-2xl lg:text-3xl underline mt-5 mb-10 text-center">
          WELCOME TO LEARNING MANAGEMENT SYSTEM
        </h3>

        {/* Image */}
        <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
          <img src={png} alt="Login" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 p-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>
        <form className="flex flex-col gap-5" onSubmit={sumbitHandler}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2">
              <div className="w-full border-[2px]">
                <input
                  className="w-full focus:outline-blue-600  py-1 px-2"
                  type="text"
                  placeholder="First Name"
                  onChange={(e) =>
                    setFormData({ ...formData, firstname: e.target.value })
                  }
                  value={formData.firstname}
                  required
                />
              </div>
              <div className="w-full border-[2px]">
                <input
                  className="w-full focus:outline-blue-600  py-1 px-2"
                  type="text"
                  placeholder="last Name"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  value={formData.lastName}
                  required
                />
              </div>
              <div className="w-full border-[2px]">
                <input
                  className="w-full focus:outline-blue-600  py-1 px-2"
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  required
                />
              </div>
              <div className="w-full border-[2px] relative">
                <input
                  className="w-full focus:outline-blue-600  py-1 px-2 bg-transparent"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  value={formData.password}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-[50%] -translate-y-[50%] z-[100]"
                >
                  {showPass ? (
                    <IoIosEye
                      className="text-black text-xl"
                      onClick={() => setShowPass((prev) => !prev)}
                    />
                  ) : (
                    <IoIosEyeOff
                      className="text-black text-xl"
                      onClick={() => setShowPass((prev) => !prev)}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button className="flex w-full justify-center rounded-md bg-indigo-50 px-3 py-1.5 text-sm font-semibold leading-6 text-[rgb(0,128,0)] shadow-sm hover:text-[rgb(231,238,231)] hover:bg-[rgb(0,128,0)]">
              Sign up
            </button>
          </div>
        </form>
        <div className="flex justify-center flex-col sm:flex-row">
          <p className="text-center">Already a member?</p>
          <NavLink
            to="/login"
            className="text-green-700 cursor-pointer text-center hover:text-blue-600"
          >
            Login Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
