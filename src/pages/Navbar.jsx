import {Link} from "react-router-dom"
function Navbar() {
    let style={
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        margin:"auto",
        width:"50%"
       
     }
    return (  
        <nav style={style}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    );
}

export default Navbar;