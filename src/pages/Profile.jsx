import {useNavigate,useParams} from "react-router-dom"

function Profile() {
    let nav= useNavigate();
    let {username}= useParams();
    return ( 
    <div>
    <h1>This is {`${username}'s`} profile</h1> 
<button onClick={()=>{nav("/")}}>Back to home</button>

    </div>);
}

export default Profile;