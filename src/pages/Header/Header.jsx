import { IconButton } from '@mui/material';

import React from 'react'
import "./Header.css"
import formimage from "../../assests/images/forms_2020q4_48dp.png"
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import avatarimage from "../../assests/images/2.jpg"
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import Templates from '../Template/Template';
import Mainbody from '../mainBody/mainBody';
function Header() {
    return (
        <>
            <div className="header">

                <div className="header_info">
                    <TemporaryDrawer />

                    <img src={formimage} style={{ height: '40px', width: "40px" }} className="form_image" alt='imageform' />
                    <div className="info">
                        Forms
                    </div>
                </div>
                <div className="header_search">
                    <IconButton><SearchIcon /></IconButton>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header_right">
                    <IconButton style={{ margin: "0px" }}>
                        <AppsIcon style={{ fontSize: "22px" }} />
                    </IconButton>

                    <IconButton>

                        <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
                    </IconButton>
                </div>


            </div>
            <Templates/>
            <Mainbody/>
            
        </>
     
    )
}

export default Header