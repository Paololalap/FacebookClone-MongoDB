import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MaintenancePage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.title = "Log Into Facebook";
  }, []);

  return (
    <>
      <div>
        <div className='bg-[#f0f2f5] pb-[20rem]'>
          <div className='flex justify-center pt-9'>
            <img
              className='h-[5rem] w-max-full '
              src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg'
              alt='Facebook'
            />
          </div>
          <div className='leading-6 mt-5'>
            <h1 className='text-2xl mb-3'>
              <strong>Sorry, something went wrong.</strong>
            </h1>
            <p>
              We&apos;re working on it and we&apos;ll get it fixed as soon as we
              can.
            </p>
            <button onClick={goBack} className='underline hover:text-blue-600'>
              Go Back.
            </button>
          </div>
        </div>
        <footer className='bg-white'>
          <nav className='w-9/12 mx-auto max-w-[980px] mt-[6rem]'>
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
                    <a className='hover:underline hover:cursor-pointer'>
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
                  <a className='hover:underline'>{link}</a>
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
