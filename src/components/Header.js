import { headers } from "next/headers";
import Link from "next/link";

import Navigation from "./Navigation";
import DropdownMenu from "./DropdownMenu";

const Header = async () => {
  const userEmail = headers().get("x-api-key");
  const userImage = headers().get("x-avatar");

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between flex-wrap">
          <Navigation />
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <button className="w-8 h-8 rounded-full text-gray-600 hover:text-white hover:bg-gray-400 focus:bg-gray-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mr-3">
              <i className="fa-regular fa-bell text-xl"></i>
            </button>

            {userEmail ? (
              <DropdownMenu userImage={userImage} />
            ) : (
              <>
                <Link
                  href="/api/auth/login"
                  className="inline-flex items-center border border-primary rounded-md bg-primary px-2 py-1 text-white mr-2 hover:text-primary hover:bg-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
