import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "~/assets/globals.scss";
import ThemeProviderContext from "~/components/ProviderContext";

export const metadata = {
  title: "Mindmap Flow",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProviderContext>
      <html lang="en">
        <UserProvider>
          <body>
            {children}
            <ToastContainer />
          </body>
        </UserProvider>
      </html>
    </ThemeProviderContext>
  );
}
