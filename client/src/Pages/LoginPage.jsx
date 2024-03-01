//LoginPage.jsx
import React, { useEffect, useRef, useState } from "react";
import eyeIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const loginRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Trigger click event on Link component
      loginRef.current.click();
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Effect hook to focus on the email input field when the component mounts
  useEffect(() => emailRef.current.focus(), []);

  // Rendered JSX for the login page
  return (
    <div className='lg:h-5/6 '>
      <div className='w-full bg-[#f0f2f5]'>
        <div className='pt-4 pb-8 md:grid md:grid-cols-2 md:py-24 md:pb-28 md:overflow-x-hidden lg:grid lg:grid-cols-2 lg:max-w-6xl lg:mx-auto lg:py-26'>
          <header className='grid grid-cols-1 justify-items-center items-center md:relative  lg:relative'>
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
          </header>

          <main className='grid grid-cols-1 justify-items-center mb-24 md:scale-x-105'>
            <form className='border-2 w-96 p-4 pb-6 mt-4 bg-white shadow-xl md:mt-8 rounded-lg '>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-600'
              ></label>

              {/* Input field for email */}
              <input
                type='text'
                id='email'
                className='p-3 border-2 rounded-md w-full focus:ring-blue-500 focus:ring-1 focus:outline-0'
                placeholder='Email or phone number'
                ref={emailRef}
                autoComplete='on'
                onKeyDown={handleKeyPress}
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
                  className='mt-1 p-3 border-2 rounded-md w-full focus:ring-blue-500 focus:ring-1 focus:outline-0 placeholder:text-md'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}
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
              <Link
                to='/loginfailed'
                ref={loginRef}
                className='inline-block mt-4 p-2 py-3 pt-2 bg-[#0866ff] text-white rounded-md w-full text-xl font-sans font-bold transition-all focus:ring-blue-300 focus:ring focus:outline-0 focus:transition-all focus:duration-500 hover:bg-[#1877f2] active:ring-0 active:transition-none'
              >
                Log In
              </Link>

              <Link
                to='/maintenance'
                className='block text-center mt-3 text-sm text-blue-600 hover:underline'
              >
                Forgot password?
              </Link>
              <div className='border-t mt-5'></div>

              <Link
                to='/maintenance'
                className='inline-block mt-6 tracking-wider py-3 bg-[#42b72a] text-white rounded-md px-4 text-md font-bold mx-auto border-0 hover:transition-colors hover:bg-[#36a420] active:bg-[#2b9217] focus:ring-blue-300 focus:ring focus:outline-0 focus:transition-all focus:duration-500'
                type='submit'
              >
                Create new account
              </Link>
            </form>
            <div className='mt-6 mx-auto'>
              <p className='text-sm text-center'>
                <Link
                  to='/maintenance'
                  className='tracking-wider font-semibold hover:underline'
                >
                  <strong>Create a Page</strong>
                </Link>
                &nbsp;for a celebrity, brand or business.
              </p>
            </div>
          </main>
        </div>
      </div>

      <footer className='bg-white pb-6'>
        <nav className='w-9/12 mx-auto max-w-[980px]'>
          {/* Language options */}
          <ul className='flex flex-row flex-wrap text-gray-400 text-xs pt-6 text-center'>
            {[
              "English (US)",
              "Filipino",
              "Bisaya",
              "Español",
              "日本語",
              "한국어",
              "中文 (简体)",
              "العربية",
              "Português (Brasil)",
              "Français (France)",
              "Deutsch",
            ].map((lang, index) => (
              <li
                key={index}
                className={`${index !== 0 && "ml-2"} mb-2 text-[#8a8d91]`}
              >
                {index === 0 ? (
                  <span className='text-[#737373] hover:cursor-text'>
                    {lang}
                  </span>
                ) : (
                  <a href='#' className='hover:underline hover:cursor-pointer'>
                    {lang}
                  </a>
                )}
              </li>
            ))}

            {/* Plus icon */}
            <li className='ml-2 mb-2 cursor-pointer bg-slate-100 shadow hover:shadow-inner  focus:bg-slate-700'>
              <div className='border h-5 w-8 flex justify-center items-center pb-1 '>
                <a className='text-lg font-bold text-slate-700'>+</a>
              </div>
            </li>
          </ul>
          {/* Footer links */}
          <ul className='flex flex-row flex-wrap text-gray-400 text-xs leading-5 border-t pt-2'>
            {[
              "Sign Up",
              "Log In",
              "Messenger",
              "Facebook Lite",
              "Video",
              "Places",
              "Games",
              "Marketplace",
              "Meta Pay",
              "Meta Store",
              "Meta Quest",
              "Imagine with Meta AI",
              "Instagram",
              "Threads",
              "Fundraisers",
              "Services",
              "Voting Information Center",
              "Privacy Policy",
              "Privacy Center",
              "Groups",
              "About",
              "Create Ad",
              "Create Page",
              "Developers",
              "Careers",
              "Cookies",
              "Ad Choices",
              "Terms",
              "Help",
              "Contact Uploading & Non-Users",
            ].map((link, index) => (
              <li key={index} className='pr-5 text-[#8a8d91]'>
                <a href='#' className='hover:underline'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className='text-[#737373] text-xs mt-4 text-left'>
            Meta &copy; 2024
          </div>
        </nav>
      </footer>
    </div>
  );
}
