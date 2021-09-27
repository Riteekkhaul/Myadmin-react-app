import React from 'react';
import {} from './Sidebar.css';
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Feedback, FeedbackTwoTone, LineStyle, LinkOff, LinkOffTwoTone, Mail, MailOutline, Message, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebarmenu">
                  <h3 className="sidebartitle">Dashboard</h3>
                  <ul className="sidebarlist">
                       <Link to="/" className="link">
                      <li className="sidebarlistitem active" >
                           <LineStyle  className="sidebaricon"/> Home
                      </li>  
                      </Link>
                      <li className="sidebarlistitem">
                           <Timeline className="sidebaricon" /> Analytics
                      </li>
                      <li className="sidebarlistitem">
                           <TrendingUp className="sidebaricon" /> Sales
                      </li>
                  </ul>  
                </div>
                <div className="sidebarmenu">
                  <h3 className="sidebartitle">Quick Menu</h3>
                  <ul className="sidebarlist">
                  <Link to="/users" className="link">  
                      <li className="sidebarlistitem">
                           <PermIdentity className="sidebaricon"/> Users
                      </li>
                  </Link>   
                  <Link to="/productlist" className="link">
                      <li className="sidebarlistitem">
                           <Storefront  className="sidebaricon"/> Products
                      </li>
                  </Link>               
                      <li className="sidebarlistitem">
                           <AttachMoney className="sidebaricon" /> Transaction
                      </li>
                      <li className="sidebarlistitem">
                           <BarChart className="sidebaricon" /> Reports
                      </li>
                  </ul>  
                </div>
                <div className="sidebarmenu">
                  <h3 className="sidebartitle">Notification</h3>
                  <ul className="sidebarlist">
                      <li className="sidebarlistitem">
                           <MailOutline  className="sidebaricon"/> Mail
                      </li>
                      <li className="sidebarlistitem">
                           <DynamicFeed className="sidebaricon" /> Feedback
                      </li>
                      <li className="sidebarlistitem">
                           <ChatBubbleOutline className="sidebaricon" /> Messages
                      </li>
                  </ul>  
                </div>
                <div className="sidebarmenu">
                  <h3 className="sidebartitle">Staff</h3>
                  <ul className="sidebarlist">
                      <li className="sidebarlistitem">
                           < WorkOutline className="sidebaricon"/> Manage
                      </li>
                      <li className="sidebarlistitem">
                           <Timeline className="sidebaricon" /> Analytics
                      </li>
                      <li className="sidebarlistitem">
                           <Report className="sidebaricon" /> Reports
                      </li>
                  </ul>  
                </div>
            </div>
        </div>
    )
}

export default Sidebar
