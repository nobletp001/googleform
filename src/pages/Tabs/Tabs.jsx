import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';

import Question_form from '../Question_Form/Question_Form';
import { IconButton } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,

    },
    tab: {
        fontSize: 12,
        color: "#5f6368",
        textTransform: "capitalize",
        height: 10,
        fontWeight: "600",
        fontFamily: 'Google Sans,Roboto,Arial,sans-serif',

    },
    tabs: {
        height: 10

    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (

                <div>{children}</div>

            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                className={classes.tabs}
            >
                <Tab label="Questions" className={classes.tab}  
                    {...a11yProps(0)}

                 />
                <Tab label="Responses" className={classes.tab} 
                    {...a11yProps(1)}

                />

            </Tabs>
            <TabPanel value={value} index={0}>
                <Question_form />


            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="submit" style={{ height: "76vh" }}>
                    <div className="user_form" >
                        <div className="user_form_section">



                            <div className="user_form_questions" style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px", fontSize: "24px" }} >3 Responses</Typography>
                                    <div  ><IconButton>
                                        <MoreVertIcon className="form_header_icon" />
                                    </IconButton>
                                    </div>
                                </div>
                                <br></br>
                                <div style={{ marginBottom: "5px" }}>
                                    <div style={{ display: 'flex', fontSize: "12px", justifyContent: "flex-end" }}>
                                        Accepting responses <Switch color="primary" size="small" />
                                    </div>
                                </div>

                            </div>



                            <div className="user_footer">
                                Google Forms
                            </div>
                        </div>

                    </div>
                </div>
            </TabPanel>
        </Paper>
    );
}