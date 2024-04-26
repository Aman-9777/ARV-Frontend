"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import auth, { clearUser } from '../../lib/features/userAuth/auth'
import { useRouter, usePathname } from "next/navigation";
import { logout } from "../../utils/api";


export default function Header(){
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    console.log(router)
    const authToken = useSelector(state => state.auth.user?.token);
    // const toggleSidebar = () => {
    //     const sidebar = coreui.Sidebar.getInstance(document.querySelector('#sidebar'));
    //     sidebar.toggle();
    // };
    const toggleSidebar = () => {
        const sidebar = document.querySelector('#sidebar');
        const wrapper = document.querySelector('.wrapper');
        sidebar.classList.toggle('show');
        wrapper.classList.toggle('sidebar-open');
    };
    const handleLogout = async () => {
        try{
            const data =  '';
            await logout(data, authToken);
            dispatch(clearUser());
            console.log('Logout');
            router.push('/login');
        }catch (error){
            console.log('Server Not Responding');
        }
       
       
    }
    return(
       
        <header className="header header-sticky mb-4">
            <div className="container-fluid">
            <button className="header-toggler px-md-0 me-md-3" type="button" onClick={toggleSidebar}  fdprocessedid="3aaq9">
                <Image width={40} height={40} alt="toggle" src="/images/icons/togle_arrow.svg"/>
            </button>
            <ul className="header-nav ms-3">
                <li className="nav-item dropdown">
                <div className="dropdown">
                    <div className="avatar avatar-md dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                         <Image width={40} height={40} className="avatar-img" src="/images/8.jpg" alt="user@email.com"/>
                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#"> <svg className="icon me-2"> </svg> Account</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>
                            <svg className="icon me-2"> </svg> Logout</a></li>
                    </ul>
                </div>
                </li>
            </ul>
            </div>
            <div className="header-divider"></div>
            <div className="container-fluid">
            {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-0 ms-2">
                <li className="breadcrumb-item">
                    <span>Home</span>
                </li>
                <li className="breadcrumb-item active"><span>
                    {pathname}
                </span></li>
                </ol>
            </nav> */}
            </div>
        </header>
       
    )
}