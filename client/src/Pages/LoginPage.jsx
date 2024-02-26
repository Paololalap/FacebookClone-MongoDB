//LoginPage.jsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import eyeIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle form submission
  const Submit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    // Sending a POST request to create a new user
    axios
      .post("http://localhost:3001/createUser", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  // Effect hook to focus on the email input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Rendered JSX for the login page
  return (
    <div className='lg:h-5/6 '>
      <div className='w-full bg-[#f0f2f5]'>
        <div className='pt-4 pb-8 md:grid md:grid-cols-2 md:py-24 md:pb-28 md:overflow-x-hidden lg:grid lg:grid-cols-2 lg:max-w-6xl lg:mx-auto lg:py-26'>
          <div className='grid grid-cols-1 justify-items-center items-center md:relative  lg:relative'>
            <div className='md:absolute md:left-5 md:top-20 md:pt-1 lg:absolute lg:left-16 lg:top-18 lg:pl-1'>
              <img
                className='h-24 w-max-full scale-105'
                src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg'
                alt='Facebook'
              />
            </div>
            <div className='text-center w-96 md:absolute md:top-44 md:text-left md:left-10 md:pr-18 md:w-80 lg:w-auto lg:text-left lg:absolute lg:left-20 lg:top-44 lg:-ml-1  lg:scale-95'>
              <h1 className='text-2xl leading-7 mb-4 md:leading-7 lg:text-3xl lg:leading-8 '>
                Connect with friends and the world around you on Facebook.
              </h1>
            </div>
          </div>

          <div className='grid grid-cols-1 justify-items-center mb-24 md:scale-x-105'>
            <form
              className='border-2 w-96 p-4 pb-6 mt-4 bg-white shadow-xl md:mt-8 rounded-lg '
              onSubmit={Submit}
            >
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-600'
              ></label>

              {/* Input field for email */}
              <input
                type='text'
                id='email'
                name='email'
                className='p-3 border-2 rounded-md w-full focus:ring-blue-500 focus:ring-1 focus:outline-0'
                placeholder='Email or phone number'
                ref={inputRef}
                autoComplete='on'
                onChange={(e) => setEmail(e.target.value)}
              />

              <label
                htmlFor='password'
                className='block mt-2 text-xs font-medium text-gray-600'
              ></label>

              {/* Input field for password with show/hide functionality */}
              <div className='relative flex items-center justify-end'>
                <input
                  type={showPassword ? "text" : "password"}
                  id='password'
                  name='password'
                  className='mt-1 p-3 border-2 rounded-md w-full focus:ring-blue-500 focus:ring-1 focus:outline-0 placeholder:text-md'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Toggle password visibility button */}
                {password && (
                  <div
                    className='absolute cursor-pointer mt-1 mr-4'
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={showPassword ? eyeIcon : hideIcon}
                      alt={showPassword ? "Hide Password" : "Show Password"}
                      className='h-[1.7rem] max-w-full p-[0.35rem] rounded-full hover:bg-gray-100 active:bg-gray-300'
                    />
                  </div>
                )}
              </div>

              {/* Submit button for the login form */}
              <button
                type='submit'
                className='mt-4 p-2 py-3 pt-2 bg-[#0866ff] text-white rounded-md w-full text-xl font-sans font-bold transition-all focus:ring-blue-300 focus:ring focus:outline-0 focus:transition-all focus:duration-500 hover:bg-[#1877f2] active:ring-0 active:transition-none'
              >
                Log In
              </button>
              <div className='text-center mt-3 text-sm text-blue-600'>
                <a className='hover:underline' href='#'>
                  Forgot password?
                </a>
              </div>
              <div className='border-t mt-5'></div>
              <div className='flex'>
                <button
                  type='submit'
                  className='mt-6 tracking-wider py-3 bg-[#42b72a] text-white rounded-md px-4 text-md font-bold mx-auto border-0 hover:transition-colors hover:bg-[#36a420] active:bg-[#2b9217] focus:ring-blue-300 focus:ring focus:outline-0 focus:transition-all focus:duration-500'
                >
                  Create new account
                </button>
              </div>
            </form>
            <div className='mt-6 mx-auto'>
              <p className='text-sm text-center'>
                <a
                  href='#'
                  className='tracking-wider font-semibold hover:underline'
                >
                  <strong>Create a Page</strong>
                </a>
                &nbsp;for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white pb-6'>
        <div className='w-9/12 mx-auto  max-w-[968px]'>
          <ul className='flex flex-row flex-wrap text-gray-400 text-xs pt-6 text-center'>
            <li>
              <a className='text-[#737373] hover:cursor-default '>
                English&nbsp;(US)
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Filipino
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Bisaya
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Español
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                日本語
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                한국어
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                中文&nbsp;(简体)
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                العربية
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Português&nbsp;(Brasil)
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Français&nbsp;(France)
              </a>
            </li>
            <li className='ml-2 mb-2 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Deutsch
              </a>
            </li>
            <li className='ml-2 mb-2 cursor-pointer bg-slate-100 shadow hover:shadow-inner  focus:bg-slate-700'>
              <div className='border h-5 w-8 flex justify-center items-center pb-1 '>
                <a className='text-lg font-bold text-slate-700'>+</a>
              </div>
            </li>
          </ul>
          <div className='border-t mt-0'></div>
          <ul className='flex flex-row flex-wrap text-gray-400 text-xs mt-2 leading-5'>
            <li className='pr-6'>
              <a className='text-[#8a8d91]' href='#'>
                Sign&nbsp;Up
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Log&nbsp;In
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Messenger
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Facebook&nbsp;Lite
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Video
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Places
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Games
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Marketplace
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Meta&nbsp;Pay
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Meta&nbsp;Store
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Meta&nbsp;Quest
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Imagine&nbsp;with&nbsp;Meta&nbsp;AI
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Instagram
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Threads
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Fundraisers
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Services
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Voting&nbsp;Information&nbsp;Center
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Privacy&nbsp;Policy
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Privacy&nbsp;Center
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Groups
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                About
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Create&nbsp;Ad
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Create&nbsp;Page
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Developers
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Careers
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Cookies
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Ad&nbsp;Choices
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Terms
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Help
              </a>
            </li>
            <li className='pr-6 text-[#8a8d91]'>
              <a href='#' className='hover:underline'>
                Contact&nbsp;Uploading&nbsp;&&nbsp;Non-Users
              </a>
            </li>
          </ul>
          <div className='text-[#737373] text-xs mt-4 text-left'>
            Meta &copy; 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
