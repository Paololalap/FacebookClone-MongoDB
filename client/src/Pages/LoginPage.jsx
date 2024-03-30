//LoginPage.jsx
import React, { useEffect, useRef, useState } from "react";
import eyeIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const loginRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Trigger click event on Link component
      loginRef.current.click();
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Effect hook to focus on the email input field when the component mounts
  useEffect(() => emailRef.current.focus(), []);

  // Rendered JSX for the login page
  return (
    <div className="lg:h-5/6 ">
      <div className="w-full bg-[#f0f2f5]">
        <div className="lg:py-26 pb-8 pt-4 md:grid md:grid-cols-2 md:overflow-x-hidden md:py-24 md:pb-28 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2">
          <header className="grid grid-cols-1 items-center justify-items-center md:relative lg:relative ">
            <div className="lg:top-18 md:absolute md:left-5 md:top-20 md:pt-1 lg:absolute lg:left-16 lg:pl-1">
              <img
                className="w-max-full h-24 scale-105"
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                alt="Facebook"
              />
            </div>
            <div className="md:pr-18 w-96 text-center md:absolute md:left-10 md:top-44 md:w-80 md:text-left lg:absolute lg:left-20 lg:top-44 lg:-ml-1 lg:w-auto lg:scale-95  lg:text-left">
              <h1 className="mb-4 text-2xl leading-7 md:leading-7 lg:text-3xl lg:leading-8 ">
                Connect with friends and the world around you on Facebook.
              </h1>
            </div>
          </header>

          <main className="mb-24 grid grid-cols-1 justify-items-center md:scale-x-105">
            <form className="mt-4 w-96 rounded-lg border-2 bg-white p-4 pb-6 shadow-xl md:mt-8 ">
              {/* Input field for email */}
              <label className="block text-sm font-medium text-gray-600">
                <input
                  type="text"
                  id="email"
                  className="w-full rounded-md border-2 p-3 text-[1.05rem] focus:outline-0 focus:ring-1 focus:ring-blue-500"
                  placeholder="Email or phone number"
                  ref={emailRef}
                  autoComplete="on"
                  onKeyDown={handleKeyPress}
                />
              </label>

              {/* Input field for password with show/hide functionality */}
              <label className="mt-2 block text-xs font-medium text-gray-600">
                <div className="relative flex items-center justify-end">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="placeholder:text-md mt-1 w-full rounded-md border-2 p-3 text-[1.05rem] focus:outline-0 focus:ring-1 focus:ring-blue-500 "
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />

                  {/* Toggle password visibility button */}
                  {password && (
                    <div
                      className="absolute mr-4 mt-1 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      <img
                        src={showPassword ? eyeIcon : hideIcon}
                        alt={showPassword ? "Hide Password" : "Show Password"}
                        className="h-[1.7rem] max-w-full rounded-full p-[0.35rem] hover:bg-gray-100 active:bg-gray-300"
                      />
                    </div>
                  )}
                </div>
              </label>

              {/* Submit button for the login form */}
              <Link
                to="/loginfailed"
                ref={loginRef}
                className="
                mt-4 inline-block w-full rounded-md bg-[#0866ff] p-2 py-3 pt-2 font-sans text-xl font-bold text-white transition-all hover:bg-[#1877f2] focus:outline-0 focus:ring focus:ring-blue-300 focus:transition-all focus:duration-500 active:ring-0 active:transition-none"
              >
                Log In
              </Link>

              <Link
                to="/maintenance"
                className="mt-3 block text-center text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
              <div className="mt-5 border-t"></div>

              <Link
                to="/maintenance"
                className="text-md mx-auto mt-6 inline-block rounded-md border-0 bg-[#42b72a] px-4 py-3 font-bold tracking-wider text-white hover:bg-[#36a420] hover:transition-colors focus:outline-0 focus:ring focus:ring-blue-300 focus:transition-all focus:duration-500 active:bg-[#2b9217]"
                type="submit"
              >
                Create new account
              </Link>
            </form>
            <div className="mx-auto mt-6">
              <p className="text-center text-sm">
                <Link
                  to="/maintenance"
                  className="font-semibold tracking-wider hover:underline"
                >
                  <strong>Create a Page</strong>
                </Link>
                &nbsp;for a celebrity, brand or business.
              </p>
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-white pb-6">
        <nav className="mx-auto w-9/12 max-w-[980px]">
          {/* Language options */}
          <ul className="flex flex-row flex-wrap pt-6 text-center text-xs text-gray-400">
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
                  <span className="text-[#737373] hover:cursor-text">
                    {lang}
                  </span>
                ) : (
                  <a href="#" className="hover:cursor-pointer hover:underline">
                    {lang}
                  </a>
                )}
              </li>
            ))}

            {/* Plus icon */}
            <li className="mb-2 ml-2 cursor-pointer bg-slate-100 shadow hover:shadow-inner  focus:bg-slate-700">
              <div className="flex h-5 w-8 items-center justify-center border pb-1 ">
                <a className="text-lg font-bold text-slate-700">+</a>
              </div>
            </li>
          </ul>
          {/* Footer links */}
          <ul className="flex flex-row flex-wrap border-t pt-2 text-xs leading-5 text-gray-400">
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
              <li key={index} className="pr-5 text-[#8a8d91]">
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-left text-xs text-[#737373]">
            Meta &copy; 2024
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default LoginPage;
