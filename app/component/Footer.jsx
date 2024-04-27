import Link from "next/link";
import React from "react";

export const Footer = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center text-primary">
          <svg
            id="logo-83"
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="ccustom"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 30C26.3132 30 27.6136 29.7413 28.8268 29.2388C30.0401 28.7362 31.1425 27.9997 32.0711 27.0711C32.9997 26.1425 33.7362 25.0401 34.2388 23.8268C34.7413 22.6136 35 21.3132 35 20C35 16.0218 33.4196 12.2064 30.6066 9.3934C27.7936 6.58035 23.9782 5 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 21.3132 5.25866 22.6136 5.7612 23.8268C6.26375 25.0401 7.00035 26.1425 7.92893 27.0711C8.85752 27.9997 9.95991 28.7362 11.1732 29.2388C12.3864 29.7413 13.6868 30 15 30H25ZM20 9C17.0826 9 14.2847 10.1589 12.2218 12.2218C10.1589 14.2847 9 17.0826 9 20C9 20.7879 9.15519 21.5681 9.45672 22.2961C9.75825 23.0241 10.2002 23.6855 10.7574 24.2426C11.3145 24.7998 11.9759 25.2417 12.7039 25.5433C13.4319 25.8448 14.2121 26 15 26H25C25.7879 26 26.5681 25.8448 27.2961 25.5433C28.0241 25.2417 28.6855 24.7998 29.2426 24.2426C29.7998 23.6855 30.2417 23.0241 30.5433 22.2961C30.8448 21.5681 31 20.7879 31 20C31 17.0826 29.8411 14.2847 27.7782 12.2218C25.7153 10.1589 22.9174 9 20 9Z"
              fill="#d82c0d"
            ></path>
            <path
              className="ccustom"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 35C11.2928 35 9.60238 34.612 8.02512 33.8582C6.44792 33.1044 5.0148 31.9995 3.80761 30.6066C2.60047 29.2137 1.64289 27.5602 0.989566 25.7403C0.336257 23.9204 0 21.9698 0 20C0 14.6957 2.10714 9.60859 5.85787 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 21.9698 39.6637 23.9204 39.0104 25.7403C38.3571 27.5602 37.3995 29.2137 36.1924 30.6066C34.9852 31.9995 33.5521 33.1044 31.9749 33.8582C30.3976 34.612 28.7072 35 27 35H13ZM8.68629 8.68629C11.6869 5.68571 15.7565 4 20 4C24.2435 4 28.3131 5.68571 31.3137 8.68629C34.3143 11.6869 36 15.7565 36 20C36 21.5179 35.7404 23.0107 35.2457 24.3888C34.751 25.7668 34.0376 26.9854 33.1696 27.9869C32.3026 28.9873 31.3045 29.7452 30.25 30.2492C29.1981 30.752 28.0957 31 27 31H13C11.9043 31 10.8019 30.752 9.74999 30.2492C8.69549 29.7452 7.6974 28.9873 6.83037 27.9869C5.96242 26.9854 5.24903 25.7668 4.75433 24.3888C4.25961 23.0107 4 21.5179 4 20C4 15.7565 5.68571 11.6869 8.68629 8.68629Z"
              fill="#d82c0d"
            ></path>
            <path
              className="ccustom"
              d="M25 25H19.9956C19.6596 24.9997 19.3261 24.9655 19 24.899C18.368 24.77 17.7637 24.5192 17.2222 24.1573C16.3999 23.6079 15.759 22.8271 15.3806 21.9134C15.2579 21.6171 15.1645 21.3112 15.101 21C14.9686 20.3515 14.9657 19.6799 15.0961 19.0245C15.289 18.0546 15.7652 17.1637 16.4645 16.4645C17.1637 15.7652 18.0546 15.289 19.0245 15.0961C19.0549 15.09 19.0852 15.0843 19.1156 15.0788C19.4087 15.0262 19.7047 15 20 15C20.6535 15 21.3038 15.1281 21.9134 15.3806C22.827 15.759 23.6079 16.3999 24.1573 17.2221C24.7068 18.0444 25 19.0111 25 20H21C21 19.8022 20.9414 19.6089 20.8315 19.4444C20.7216 19.28 20.5654 19.1518 20.3827 19.0761C20.2 19.0004 19.9989 18.9806 19.8049 19.0192C19.6109 19.0578 19.4327 19.153 19.2929 19.2929C19.153 19.4327 19.0578 19.6109 19.0192 19.8049C18.9806 19.9989 19.0004 20.2 19.0761 20.3827C19.1518 20.5654 19.28 20.7216 19.4444 20.8315C19.6089 20.9414 19.8022 21 20 21H25C25.1313 21 25.2614 20.9741 25.3827 20.9239C25.504 20.8736 25.6142 20.8 25.7071 20.7071C25.8 20.6142 25.8736 20.504 25.9239 20.3827C25.9741 20.2614 26 20.1313 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14C19.8274 14 19.6556 14.0074 19.485 14.0221C19.0657 14.0582 18.6535 14.1382 18.255 14.2594C17.8629 14.3785 17.484 14.5376 17.1243 14.734C16.7123 14.959 16.3255 15.233 15.973 15.5522C15.8996 15.6186 15.8277 15.687 15.7574 15.7574C15.2651 16.2496 14.8672 16.8187 14.5753 17.4363C14.4294 17.7451 14.3099 18.066 14.2185 18.3956C14.1139 18.7724 14.0459 19.1604 14.0166 19.5544C14.0056 19.7022 14 19.8508 14 20C14 20.7841 14.1537 21.5646 14.4567 22.2961C14.9109 23.3925 15.6799 24.3295 16.6666 24.9888C16.6722 24.9926 16.6778 24.9963 16.6834 25H15C14.3434 25 13.6932 24.8707 13.0866 24.6194C12.48 24.3681 11.9288 23.9998 11.4645 23.5355C11.0002 23.0712 10.6319 22.52 10.3806 21.9134C10.1293 21.3068 10 20.6566 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 20.6566 29.8707 21.3068 29.6194 21.9134C29.3681 22.52 28.9998 23.0712 28.5355 23.5355C28.0712 23.9998 27.52 24.3681 26.9134 24.6194C26.3068 24.8707 25.6566 25 25 25Z"
              fill="#d82c0d"
            ></path>
          </svg>
        </div>

        <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {links.map((link, ids) => (
            <div key={ids}>
              <Link
                href={link.href}
                className="text-md font-semibold text-secondary duration-100"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </ul>

        <ul className="mt-8 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Dribbble</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
