"use client";
import Script from "next/script";
import ReduxProvider from "./components/providers";
import { ToastContainer, toast } from "react-toastify";

import "../public/assets/css/style.css";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import CoreuiClient from "./components/CoreuiClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <ToastContainer />
          <CoreuiClient />
        </ReduxProvider>
        {/* <Script src="/js/coreui.bundle.min.js" strategy="beforeInteractive" /> */}
      </body>
    </html>
  );
}
