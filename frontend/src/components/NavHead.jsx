
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavHead(){
    return ( <nav className="nav">
        <Link to="/" className="title"> Water Watch</Link>
        <ul className="space-x-16">
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/Stocks">Services</CustomLink>
            <CustomLink to="/Stocks">Contact</CustomLink>
            <CustomLink to="/Stocks">Maps</CustomLink>
            <CustomLink to={"/register"}  >Sign in</CustomLink>
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