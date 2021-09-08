import './Header.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from './DataLayer';
function Header(){
    const [{ user,token }, dispatch] = useDataLayerValue();
    console.log(user);
    return(
        <div className = "header">
             <div className = "header__left">
                 <SearchIcon/>
                 <input placeholder = "Artists,songs or podcasts"
                 type = "text"/>
             </div>
         <div className = "header__right">
         
             <Avatar src = {user?.images[0]?.url} alt ={user?.display_name}/>
             <h4>{user?.display_name}</h4>
         </div>
        </div>
        
        )
};
export default Header;