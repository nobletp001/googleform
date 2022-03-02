import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FiSettings } from "react-icons/fi"
import { BsQuestionCircle } from "react-icons/bs"
import formimage from "../../assests/images/forms_2020q4_48dp.png"
import excelsheetimage from "../../assests/images/google-sheets.png"

import docimage from "../../assests/images/new.png"

import slidesimage from "../../assests/images/google-slides.png"
import driveimage from "../../assests/images/new.png"



import "./TemporaryDrawer.css"

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();

    const [state, setState] = useState({

        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(anchor, false)}>
            <Divider />
            <List>

                <ListItem className="logo_title">
                    <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
                        <span style={{ color: "blue", fontWeight: "700", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>G</span>
                        <span style={{ color: "red", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>o</span>
                        <span style={{ color: "yellow", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>o</span>
                        <span style={{ color: "blue", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>g</span>
                        <span style={{ color: "green", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>l</span>
                        <span style={{ color: "red", fontWeight: "500", fontSize: "22px", marginRight: "10px", fontFamily: "'Product Sans',Arial,sans-serif" }}>e</span>
                        <span style={{ color: "#5f6368", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}> Docs</span>

                    </ListItemText>
                </ListItem>

            </List>


            <Divider />
            <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
                <ListItem className="list_item" >
                    <img alt="docimage" src={docimage} style={{ height: "20px", width: "20px" }} />
                    <div style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey" }} > Docs</div>
                </ListItem>


                <ListItem className="list_item" >
                    <img src={excelsheetimage} alt="exelpicture" style={{ height: "20px", width: "20px" }} />
                    <div style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey" }} > Sheets</div>

                </ListItem>

                <ListItem className="list_item" >
                    <img alt="slideimage" src={slidesimage} style={{ height: "20px", width: "20px" }} />
                    <div style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "600", color: "grey" }} > Slides</div>
                </ListItem>


                <ListItem className="list_item" >
                    <img src={formimage} alt="formimage" style={{ height: "20px", width: "20px" }} />
                    <div style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey" }} > Forms</div>

                </ListItem>

            </List>

            <Divider />
            <List style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}>
                <ListItem className="list_item" >
                    <FiSettings />
                    <div style={{ marginLeft: "20px", fontSize: "14px" }} > Settings</div>
                </ListItem>


                <ListItem className="list_item" >
                    <BsQuestionCircle />
                    <div style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "grey" }} > Help & Feedback</div>

                </ListItem>

            </List>

            <Divider />
            <List style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}>
                <ListItem className="list_item" >
                    <img src={driveimage} alt="driveimage" style={{ height: "20px", width: "20px" }} />

                    <div style={{ marginLeft: "20px", fontSize: "14px" }} > Drive</div>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <IconButton onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
