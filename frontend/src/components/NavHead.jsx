
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavHead(){
    return ( 
    <nav className="nav">
        <div className=" mt-2 text-gray-50 mr-[600px] font-bold text-3xl">
             <Link to="/"> Water Watch</Link>
        </div>
       
        <ul className="space-x-16">
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/map">Maps</CustomLink>
            <CustomLink to={"/register"}  >Sign in / Register</CustomLink>
        </ul>
        
</nav>)

function CustomLink({to, children,...props}){
     const resolvedPath=useResolvedPath(to);
     const isActive=useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )

}

}