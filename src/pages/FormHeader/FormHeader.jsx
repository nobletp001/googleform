import React from 'react'
import form_image from "../../assests/images/google-forms-new-logo-1.png";
import { FiStar, FiSettings } from "react-icons/fi"
import { AiOutlineEye } from 'react-icons/ai'
import { IconButton } from '@mui/material';

import avatarimage from "../../assests/images/2.jpg"
import { IoMdFolderOpen } from "react-icons/io"

import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import "./FormHeader.css"
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../../stateProvider'
// import AlertDialog from './Alert';

function Formheader() {
    let navigate = useNavigate();
    const [{ doc_name }, dispatch] = useStateValue();


    function navigates() {
        navigate("/response")
    }

    return (
        <div className="form_header">
            <div className="form_header_left">
                <img src={form_image} style={{ height: "45px", width: "40px" }} alt="form_image"/>
                <input type="text" placeholder="Untitled form" className="form_name"  
                    value={doc_name}

                ></input>
                <IoMdFolderOpen className="form_header_icon" style={{ marginRight: "10px" }}></IoMdFolderOpen>
                <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
                <span style={{ fontSize: "12px", fontWeight: "600", color: "" }}>All changes saved in Drive</span>
            </div>

            <div className="form_header_right">
                <IconButton>
                    <ColorLensIcon size="small" className="form_header_icon" />
                </IconButton>
                <IconButton  target="blank"
                    onClick={navigates}

                >
                    <AiOutlineEye className="form_header_icon" />
                </IconButton>


                <IconButton>
                    <FiSettings className="form_header_icon" />
                </IconButton>
                {/* <AlertDialog /> */}


                <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>
                <IconButton>
                    <MoreVertIcon className="form_header_icon" />
                </IconButton>
                <IconButton>
                    <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
                </IconButton>
            </div>

        </div>
    )
}

export default Formheader
