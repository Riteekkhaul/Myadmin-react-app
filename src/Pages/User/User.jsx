import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import './User.css';
import img from '../../images/AA.jpg';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className="user">
            <div className="usertitlecon">
                <h1 className="usertitle">Edit User</h1>
                <Link to="/newuser">
                    <button className="addbutton">Create</button>
                </Link>
                 </div>
            <div className="usercon">
                <div className="usershow">
                    <div className="showtop">
                    <img src={img} alt="user" />
                    <div className="showtoptitle">
                        <span className="showusername">Allu Arjun</span>
                        <span className="usertitle">Software Engineer</span>
                    </div>
                </div>
                <div className="showbutton">
                    <span className="showtitle">Account Details</span>
                    <div className="showinfo">
                        <PermIdentity   className="showicon" />
                        <span className="showinfotitle">wh8wdrj2</span>
                    </div>
                    <div className="showinfo">
                        <CalendarToday   className="showicon" />
                        <span className="showinfotitle">22.09.2021</span>
                    </div>
                    <span className="showtitle">Contact Details</span>
                    <div className="showinfo">
                        <PhoneAndroid   className="showicon" />
                        <span className="showinfotitle">+1 41 4555 454</span>
                    </div>
                    <div className="showinfo">
                        <MailOutline   className="showicon" />
                        <span className="showinfotitle">alluarjun@gmail.com</span>
                    </div>
                     <div className="showinfo">
                        <LocationSearching   className="showicon" />
                        <span className="showinfotitle">Mumbai | India</span>
                    </div>
                </div>
            </div>    
                <div className="userupdate">

                  <span className="updatetitle">Edit</span>
                  <form action="" className="updateform">
                      <div className="updateleft">
                          <div className="updateitem">
                              <label htmlFor="">Username</label>
                              <input type="text" className="updateinput" placeholder="wh8wdrj2"/>
                          </div>
                          <div className="updateitem">
                              <label htmlFor="">Full Name</label>
                              <input type="text" className="updateinput" placeholder="Allu Arjun"/>
                          </div>
                          <div className="updateitem">
                              <label htmlFor="">Phone</label>
                              <input type="text" className="updateinput" placeholder="+1 41 4555 454"/>
                          </div>
                          <div className="updateitem">
                              <label htmlFor="">Email</label>
                              <input type="text" className="updateinput" placeholder="alluarjun@gmail.com"/>
                          </div>
                          <div className="updateitem">
                              <label htmlFor="">Address</label>
                              <input type="text" className="updateinput" placeholder="Mumbai | India"/>
                          </div>
                      </div>
             <div className="updateright">
                <div className="upload">
                    <img src={img} alt="user" />
                    <label htmlFor="file"><Publish className="updateicon" /></label>
                    <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="updatebutton">Update</button>
              </div>
                  </form>
                </div>
            </div>
        </div>
    );
}

export default User;
