import { Visibility } from '@material-ui/icons';
import './WidgetSm.css';

const WidgetSm = () => {
    return (
        <div className="widgetsm">
           <span className="widgetsmtitle">New Join Members</span>
           <ul className="smlist">
               <li className="smlistitem">
                   <img src="AA.jpg" alt="user" />
                   <div className="smuser">
                       <span className="smusername">Anna Keller</span>
                       <span className="smusertitle">Software Engineer</span>
                   </div>
                   <button className="smbutton">
                       <Visibility className="smicon" />
                       Display
                   </button>
               </li>
               <li className="smlistitem">
                   <img src="AA.jpg" alt="user" />
                   <div className="smuser">
                       <span className="smusername">Anna Keller</span>
                       <span className="smusertitle">Software Engineer</span>
                   </div>
                   <button className="smbutton">
                       <Visibility className="smicon" />
                       Display
                   </button>
               </li>
               <li className="smlistitem">
                   <img src="AA.jpg" alt="user" />
                   <div className="smuser">
                       <span className="smusername">Anna Keller</span>
                       <span className="smusertitle">Software Engineer</span>
                   </div>
                   <button className="smbutton">
                       <Visibility className="smicon"/>
                       Display
                   </button>
               </li>
               <li className="smlistitem">
                   <img src="AA.jpg" alt="user" />
                   <div className="smuser">
                       <span className="smusername">Anna Keller</span>
                       <span className="smusertitle">Software Engineer</span>
                   </div>
                   <button className="smbutton">
                       <Visibility className="smicon"/>
                       Display
                   </button>
               </li>
               <li className="smlistitem">
                   <img src="AA.jpg" alt="user" />
                   <div className="smuser">
                       <span className="smusername">Anna Keller</span>
                       <span className="smusertitle">Software Engineer</span>
                   </div>
                   <button className="smbutton">
                       <Visibility className="smicon" />
                       Display
                   </button>
               </li>

           </ul>
        </div>
    )
}

export default WidgetSm;
