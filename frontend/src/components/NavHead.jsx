
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavHead(){
    return ( <nav className="nav">
        <Link to="/" className="title"> Water Watch</Link>
        <ul className="space-x-16">
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/maps">Maps</CustomLink>
            <button className="flex justify-end  hover:bg-green-800 text-white font-bold py-0 px-2 rounded" >Sign in</button>
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