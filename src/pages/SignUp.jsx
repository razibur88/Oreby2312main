import React, { useState } from "react";
import Container from "../components/Container";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set } from "firebase/database";

const SignUp = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [show, SetShow] = useState(false);
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate();

  let handleFirstName = (e) => {
    setFullName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then(() => {
            toast("Registration Successfully Done. Go Login page");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .then(() => {
            set(ref(db, "users/" + user.user.uid), {
              username: fullName,
              email: email,
            });
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <Container className="mb-[120px]">
      <div className="mt-[120px]">
        <h1 className="text-[40px] text-[#262626] font-dm font-bold">
          Sign up
        </h1>
        <p className="text-[12px] text-[#6D6D60]">Home &#62; Sign up</p>
      </div>
      <div className="w-[40%] mt-[130px]">
        <p className="text-[16px] text-[#767676] font-dm leading-[30px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </div>

      <div className="mt-[60px] border-t-2 pt-[80px]">
        <h2 className="text-[40px] text-[#262626] font-dm font-bold">
          Your Personal Details
        </h2>
      </div>

      <div className="flex gap-x-20 mt-[45px]">
        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              First Name
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              onChange={handleFirstName}
              type="text"
              className="outline-none  w-full"
              placeholder="First Name"
            />
          </div>
        </div>

        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Last Name
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-x-20 mt-[25px]">
        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Email address
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              onChange={handleEmail}
              type="text"
              className="outline-none  w-full"
              placeholder="company@domain.com"
            />
          </div>
        </div>

        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Telephone
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="Your phone number"
            />
          </div>
        </div>
      </div>

      <div className="mt-[120px] border-t-2 pt-[80px]">
        <h2 className="text-[40px] text-[#262626] font-dm font-bold">
          {" "}
          New Customer
        </h2>
      </div>

      <div className="flex gap-x-20 mt-[45px]">
        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Address 1
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="4279 Zboncak Port Suite 6212"
            />
          </div>
        </div>

        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Address 2
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="_"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-x-20 mt-[45px]">
        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              City
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="Your city"
            />
          </div>
        </div>

        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Post Code
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="05228"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-x-20 mt-[25px]">
        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              City
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="Your city"
            />
          </div>
        </div>

        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Post Code
            </h2>
          </div>
          <div className="pt-[10px]">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="05228"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-x-20 mt-[25px]">
        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              Division
            </h2>
          </div>
          <div className="pt-[10px] relative">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="Please select"
            />
            <div className="absolute top-[50%] right-0 text-[20px]">
              {" "}
              <RiArrowDownSFill />{" "}
            </div>
          </div>
        </div>

        <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
          <div className="">
            <h2 className="text-[20px] text-[#262626] font-dm font-bold">
              District
            </h2>
          </div>
          <div className="pt-[10px] relative">
            <input
              type="text"
              className="outline-none  w-full"
              placeholder="Please select"
            />
            <div className="absolute top-[50%] right-0 text-[20px]">
              {" "}
              <RiArrowDownSFill />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 pb-[80px]">
        <div className="border-t-2 mt-[80px] pt-[80px]">
          <h2 className=" text-[40px] text-[#262626] font-dm font-bold">
            Your Password
          </h2>
        </div>

        <div className="flex gap-x-20 mt-[25px]">
          <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
            <div className="">
              <h2 className="text-[20px] text-[#262626] font-dm font-bold">
                Password
              </h2>
            </div>
            <div className="pt-[10px] relative">
              <input
                onChange={handlePassword}
                type={show ? "text" : "password"}
                className="outline-none  w-full"
                placeholder="Password"
              />
            </div>
            <div onClick={() => SetShow(!show)} className="">
              {show == true ? "hide" : " pshow"}
            </div>
          </div>

          <div className="w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5">
            <div className="">
              <h2 className="text-[20px] text-[#262626] font-dm font-bold">
                Repeat Password
              </h2>
            </div>
            <div className="pt-[10px] relative">
              <input
                type="text"
                className="outline-none  w-full"
                placeholder="Repeat Password"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[70px]">
        <h2 className="flex items-center gap-x-5">
          {" "}
          <div>
            <input type="checkbox" />
          </div>
          <h3 className="text-[18px] text-[#767676]">
            I have read and agree to the Privacy Policy
          </h3>{" "}
        </h2>
      </div>

      <div className="flex items-center gap-x-10 mt-[20px]">
        <div>
          <h2 className="text-[18px] text-[#767676] font-dm">
            Subscribe Newsletter
          </h2>
        </div>
        <div>
          <input type="radio" name="gender" />
          <label
            htmlFor=""
            className="ml-[10px] text-[#767676] text-[18px] font-dm"
          >
            Yes
          </label>
          <input type="radio" name="gender" className="ml-[30px]" />
          <label
            htmlFor=""
            className="ml-[10px] text-[#767676] text-[18px] font-dm"
          >
            No
          </label>
        </div>
      </div>

      <div
        className="mt-[50px] border-2 text-[black] hover:text-[white] cursor-pointer
           border-black hover:bg-[#262626] w-[18%] py-[20px] text-center font-bold duration-500 ease-in-out"
      >
        <button onClick={handleSubmit} className=" text-[20px] font-dm ">
          Log in
        </button>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default SignUp;
