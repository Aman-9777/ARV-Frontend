
import Footer from "../components/shared/Footer";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Header";
import Loading from "../components/shared/Loading";

export const metadata = {
  title: "ARV CA",
  description: "ARV CA",
};

export default function RootLayout({ children }) {
  return (
        <div>
           <Loading/>
            <Sidebar/>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light sidebar-open">
              <Header/>
              {children}
            </div>
            <Footer/>
            
        </div>
  );
}
