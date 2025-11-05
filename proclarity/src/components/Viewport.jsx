import "../App.css";
import Header from "./Header";
import Main from "./Main";

const Viewport = ({isOpen, setIsOpen}) => {
    return (
        <div className="viewport md:col-span-10 col-span-12 flex flex-col"> 
            <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
            <Main/>
        </div>
    )
}   

export default Viewport;