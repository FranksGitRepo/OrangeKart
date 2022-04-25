import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import './Body.css';
const Body = (props) => {
    const bmpcartvaluehandler = (x,name,amt,img) => {
        console.log(x + "body")
        props.abmpcartvalue(x,name,amt,img)
    }
    return(
        <div className="bodyContainer">
            <div className="Main_Container"><MainContainer bmpcartvalue={bmpcartvaluehandler}/></div>
        </div>
    )
}
export default Body;