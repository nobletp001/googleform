import React, { useState, useEffect } from 'react'
import "./Question_Form.css"

import { useParams } from "react-router";
import axios from "axios";

import { useStateValue } from '../../stateProvider'
import { actionTypes } from '../../reducer'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import BackupIcon from '@mui/icons-material/Backup';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from "react-icons/bs"
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FcRightUp } from "react-icons/fc"
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';


import FormControlLabel from '@mui/material/FormControlLabel';
import AccordionActions from '@mui/material/AccordionActions';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SaveIcon from '@mui/icons-material/Save';
// import CenteredTabs from "./Tabs"

// ------------------------------------------

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BsFileText } from "react-icons/bs"
import TextField from '@mui/material/TextField';;






function Question_form() {

  const [Questions, setQuestions] = useState([{
questionText:'aaaaaaa',
      questionType:'radio',
options:[
    {
        optionText:'nnnnn'
    },
    {
        optionText: 'nnnnn'
    },
    {
        optionText: 'nnnnn'
    }
],
open:true,
required:false,
answer:false,
points:0,
answerKey:''
  }]);

    const [documentName, setDocName] = useState("untitled Document");

    const [documentDescription, setDocDesc] = useState("Add Description"); 
    let { id } = useParams();
    const [{ }, dispatch] = useStateValue();
    function commitToDB() {
        console.log(Questions);
        dispatch({
            type: actionTypes.SET_QUESTIONS,
            questions: Questions

        })

        axios.post(`http://localhost:9000/add_questions/${id}`, {
            "document_name": documentName,
            "doc_desc": documentDescription,
            "questions": Questions,



        })
    }
    useEffect(() => {
        async function data_adding() {
            var request = await axios.get(`http://localhost:9000/data/${id}`);
            console.log("sudeep")
            var question_data = request.data.questions;
            console.log(question_data)
            var doc_name = request.data.document_name
            var doc_descip = request.data.doc_desc
            console.log(doc_name + " " + doc_descip)
            setDocName(doc_name)
            setDocDesc(doc_descip)
            setQuestions(question_data)
            dispatch({
                type: actionTypes.SET_DOC_NAME,
                doc_name: doc_name

            })

            dispatch({
                type: actionTypes.SET_DOC_DESC,
                doc_desc: doc_descip

            })
            dispatch({
                type: actionTypes.SET_QUESTIONS,
                questions: question_data

            })
        }

        data_adding()
    }, [])
// handle question Value
    const handleQuestionValue=(text, i)=> {
        let optionsOfQuestion = [...Questions];
        optionsOfQuestion[i].questionText = text;
        setQuestions(optionsOfQuestion);
        console.log(optionsOfQuestion)
    }

    // HandleQuestionValue end /////


    // Add Question Type 
    function addQuestionType(i, type) {
        let qs = [...Questions];
        console.log(type)
        qs[i].questionType = type;

        setQuestions(qs);

    }

    // End question Type

    // //////HandleOptionValue

    function handleOptionValue(text, i, j) {
        var optionsOfQuestion = [...Questions];
        optionsOfQuestion[i].options[j].optionText = text;
        //newMembersEmail[i]= email;
        setQuestions(optionsOfQuestion);
    }


    // ////// End Handle Option value


    // Remove option

    function removeOption(i, j) {
        var optionsOfQuestion = [...Questions];
        if (optionsOfQuestion[i].options.length > 1) {
            optionsOfQuestion[i].options.splice(j, 1);
            setQuestions(optionsOfQuestion)
            console.log(i + "__" + j);
        }
    }

    // //////


    // AddQuestiion Option 
    function addOption(i) {
        var optionsOfQuestion = [...Questions];
        if (optionsOfQuestion[i].options.length < 5) {
            optionsOfQuestion[i].options.push({ optionText: "Option " + (optionsOfQuestion[i].options.length + 1) })
        } else {
            console.log("Max  5 options ");
        }
        //console.log(optionsOfQuestion);
        setQuestions(optionsOfQuestion)
    }

    // /////

    // copy Question 

    function copyQuestion(i) {
        expandCloseAll()
        let qs = [...Questions]
        var newQuestion = { ...qs[i]}

        setQuestions([...Questions, newQuestion])

    }
    // ////

    // delete Question 

    function deleteQuestion(i) {
        let qs = [...Questions];
        if (Questions.length > 1) {
            qs.splice(i, 1);
        }
        setQuestions(qs)
    }

    // ////


    // require Question
    function requiredQuestion(i) {
        var requiredQuestion = [...Questions];

        requiredQuestion[i].required = !requiredQuestion[i].required

        console.log(requiredQuestion[i].required + " " + i);
        setQuestions(requiredQuestion)
    }
// //////

// AddmoreQuestion here

    function addMoreQuestionField() {
        expandCloseAll(); 

        setQuestions(questions => [...Questions, { questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true, required: false }]);
    }
////Handle Expand 
    function expandCloseAll() {
        let qs = [...Questions];
        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false;
        }
        setQuestions(qs);
    }

    function handleExpand(i) {
        let qs = [...Questions];
        for (let j = 0; j < qs.length; j++) {
            if (i === j) {
                qs[i].open = true;

            } else {
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }
// add answer keys

    function setOptionAnswer(ans, qno) {
        var questions = [...Questions];

        questions[qno].answerKey = ans;


        setQuestions(questions)
        console.log(qno + " " + ans)
    }

    function setOptionPoints(points, qno) {
        var questions = [...Questions];

        questions[qno].points = points;


        setQuestions(questions)
        console.log(qno + " " + points)
    }

    function addAnswer(i) {
        var answerOfQuestion = [...Questions];

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        console.log(answerOfQuestion)
        setQuestions(answerOfQuestion)
    }

    function doneAnswer(i) {
        var answerOfQuestion = [...Questions];

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

        setQuestions(answerOfQuestion)
        console.log(answerOfQuestion)
    }

    function questionsUI() {
        return Questions.map((ques, i) => (
            <div>
                <Accordion  expanded={Questions[i].open}
                    onChange={() => { handleExpand(i) }}

                    className={Questions[i].open ? 'add_border' : ""}   key={i}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        elevation={1} style={{ width: '100%' }}
                        key={i}
                    >
                        {!Questions[i].open ? (


                            <div className="saved_questions">


                                <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }} >{i + 1}.  {ques.questionText}</Typography>


                                {ques.options.map((op, j) => (

                                    <div key={j} >
                                        <div style={{ display: 'flex', }}>
                                            <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px', }} required={ques.type} />} label={
                                                <Typography style={{
                                                    fontFamily: ' Roboto,Arial,sans-serif',
                                                    fontSize: ' 13px',
                                                    fontWeight: '400',
                                                    letterSpacing: '.2px',
                                                    lineHeight: '20px',
                                                    color: '#202124'
                                                }}>
                                                    {ques.options[j].optionText}
                                                </Typography>
                                            } />
                                        </div>


                                    </div>



                                ))}
                            </div>
                        ) : ""}
                    </AccordionSummary>
                    <div className="question_boxes">
                        {!ques.answer ? (<AccordionDetails className="add_question" >

                            <div >
                                <div className="add_question_top">
                                    <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e) => { handleQuestionValue(e.target.value, i) }}></input>
                                    {/* onChange={(e) => { handleQuestionValue(e.target.value, i) }} */}
                                    <CropOriginalIcon style={{ color: "#5f6368" }} />

                                    <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }} >
                                        {/* <MenuItem value="radio" className="menuitem" >
                                     <ShortTextIcon style={{marginRight:"10px"}} /> <span style={{marginBottom:"10px"}}>Short Paragraph</span></MenuItem>
                                     */}
                                        <MenuItem id="text" value="Text" onClick={() => { addQuestionType(i, "text") }}> <SubjectIcon style={{ marginRight: "10px" }} 
                                          

                                        />  Paragraph</MenuItem>

                                        {/* <MenuItem id="checkbox"><RadioButtonCheckedIcon checked style={{marginRight:"10px", color:"#70757a"}}/> Multiple Choice</MenuItem> */}
                                        <MenuItem id="checkbox" value="Checkbox" onClick={() => { addQuestionType(i, "checkbox") }}><CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} checked 
                                          

                                        /> Checkboxes</MenuItem>
                                      
                                        <MenuItem id="radio" value="Radio" onClick={() => { addQuestionType(i, "radio") }}> <Radio style={{ marginRight: "10px", color: "#70757a" }} checked  
                                           

                                        /> Multiple Choice</MenuItem>
                                        {/* <MenuItem value="40"> <BackupIcon style={{marginRight:"10px"}} /> File Upload</MenuItem>
                                    <MenuItem value="50"> <LinearScaleIcon style={{marginRight:"10px"}} /> Linear Scale</MenuItem>
                                    <MenuItem value="60"> <AppsIcon style={{marginRight:"10px"}} /> Tick-box grid</MenuItem>
 */}

                                        {/* <MenuItem value="aate"  onClick= {(e)=>{setType(e.target.id)}}> <EventIcon style={{marginRight:"10px"}} /> Date</MenuItem>
                                    <MenuItem value="date"  onClick= {(e)=>{setType(e.target.id)}}> <ScheduleIcon style={{marginRight:"10px"}} /> Time</MenuItem>
 */}

                                    </Select>


                                </div>




                                {ques.options.map((op, j) => (
                                    <div className="add_question_body" key={j}>
                                        {/* <Checkbox  color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} disabled/> */}
                                        {
                                            (ques.questionType !== "text") ?
                                                <input type={ques.questionType} style={{ marginRight: "10px" }} /> :
                                                <ShortTextIcon style={{ marginRight: "10px" }} />

                                        }
                                        <div >
                                            <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} 
                                                onChange={(e) => { handleOptionValue(e.target.value, i, j) }}

                                            ></input>
                                        </div>

                                        <CropOriginalIcon style={{ color: "#5f6368" }} />

                                        <IconButton aria-label="delete" 
                                            onClick={() => { removeOption(i, j) }}

                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                ))}



                                {ques.options.length < 5 ? (
                                    <div className="add_question_body">
                                        <FormControlLabel disabled control={

                                            (ques.questionType !== "text") ?
                                                <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> :
                                                <ShortTextIcon style={{ marginRight: "10px" }} />

                                        } label={
                                            <div>
                                                <input type="text" className="text_input" style={{ fontSize: "13px", width: "60px" }} placeholder="Add other"></input>
                                                <Button size="small"  style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}
                                                    onClick={() => { addOption(i) }}

                                                >Add Option</Button>
                                            </div>
                                        } />
                                    </div>

                                ) : ""}
                                <div className="add_footer">
                                    <div className="add_question_bottom_left">

                                        <Button size="small"  style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}
                                            onClick={() => { addAnswer(i) }}

                                        >       <FcRightUp style={{ border: "2px solid #4285f4", padding: "2px", marginRight: "8px" }} /> Answer key</Button>

                                    </div>

                                    <div className="add_question_bottom">

                                        <IconButton aria-label="Copy" 
                                            onClick={() => { copyQuestion(i) }}

                                        >
                                            <FilterNoneIcon />
                                        </IconButton>

                                        <IconButton aria-label="delete" 
                                            onClick={() => { deleteQuestion(i) }}

                                        >
                                            <BsTrash />
                                        </IconButton>
                                        <span style={{ color: "#5f6368", fontSize: "13px" }}>Required </span> <Switch name="checkedA" color="primary" checked={ques.required}  
                                            onClick={() => { requiredQuestion(i) }}

                                        />
                                        <IconButton 

                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>

                        </AccordionDetails>) : (

                            <AccordionDetails className="add_question" >
                                <div className="top_header">
                                    Choose Correct Answer
                                </div>
                                <div >
                                    <div className="add_question_top">
                                        <input type="text" className="question " placeholder="Question" value={ques.questionText}  disabled />
                                            {/* onChange={(e) => { handleQuestionValue(e.target.value, i) }} */}
                                        <input type="number" className="points" min="0" step="1" placeholder="0"  
                                                onChange={(e) => { setOptionPoints(e.target.value, i) }}

                                        />


                                    </div>




                                    {ques.options.map((op, j) => (
                                        <div className="add_question_body" key={j} style={{ marginLeft: "8px", marginBottom: "10px", marginTop: "5px" }}>

                                            <div key={j}>
                                                <div style={{ display: 'flex' }} className="">
                                                    <div className="form-check">
                                                        <label style={{ fontSize: "13px" }} 
                                                            onClick={() => { setOptionAnswer(ques.options[j].optionText, i) }}

                                                        >

                                                            {(ques.questionType !== "text") ?
                                                                <input
                                                                    type={ques.questionType}
                                                                    name={ques.questionText}

                                                                    value="option3"
                                                                    className="form-check-input"
                                                                    required={ques.required}
                                                                    style={{ marginRight: "10px", marginBottom: "10px", marginTop: "5px" }}
                                                                /> :
                                                                <ShortTextIcon style={{ marginRight: "10px" }} />
                                                            }

                                                            {ques.options[j].optionText}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}



                                    <div className="add_question_body">


                                        <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}> <BsFileText style={{ fontSize: "20px", marginRight: "8px" }} />Add Answer Feedback</Button>


                                    </div>




                                    <div className="add_question_bottom">

                                        <Button variant="outlined" color="primary" style={{ textTransform: 'none', color: "#4285f4", fontSize: "12px", marginTop: "12px", fontWeight: "600" }} 
                                                onClick={() => { doneAnswer(i) }}

                                        >
                                            Done
                                        </Button>

                                    </div>
                                </div>

                            </AccordionDetails>



                        )}
                        {!ques.answer ? (<div className="question_edit">
                            <AddCircleOutlineIcon  className="edit" 
                                onClick={addMoreQuestionField}

                            />
                            <OndemandVideoIcon className="edit" />
                            <CropOriginalIcon className="edit" />
                            <TextFieldsIcon className="edit" />
                        </div>) : ""}
                    </div>

                </Accordion>

            </div>
        ))
    }

    return(
        <div >

            <div className="question_form">


                <br></br>
                <div className="section">

                    <div className="question_title_section">


                        <div className="question_form_top">
                            <input type="text" className="question_form_top_name" style={{ color: "black" }} placeholder={documentName} value={documentName} onChange={(e) => { setDocName(e.target.value) }}></input>
                            <input type="text" className="question_form_top_desc"  placeholder={documentDescription} value={documentDescription} onChange={(e) => { setDocDesc(e.target.value) }} ></input>

                        </div>
                    </div>

                    {/* <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {questionsUI()}

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext> */}

                    {questionsUI()}
                    <div className="save_form">
                        <Button variant="contained" color="primary" style={{ fontSize: "14px" }} 
                            onClick={commitToDB}

                        >Save</Button>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Question_form






