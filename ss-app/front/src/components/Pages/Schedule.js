import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Table_M from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Form, Col, Card, Button, Container, Row , Table} from 'react-bootstrap';
import './basic.css';

const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];
const daysShort = ["M", "T", "W", "R", "F"]


const times = [
    "7:25 AM - 8:15 AM", "8:30 AM - 9:20 AM", "9:35 AM - 10:25 AM",
    "10:40 AM - 11:30 AM", "11:45 AM - 12:35 PM", "12:50 PM - 1:40 PM",
    "1:55 PM - 2:45 PM", "3:00 PM - 3:50 PM", "4:05 PM - 4:55 PM",
    "5:10 PM - 6:00 PM", "6:15 PM - 7:05 PM", "7:20 PM - 8:10 PM",
    "8:20 PM - 9:10 PM", "9:20 PM - 10:10 PM"];

// maybe have a 2D array that will contain the in-class potential schedules 
// first, fill it with empty space
var TestSchdule = Array(14).fill(0).map(row => new Array(6).fill(" "))

const Schedule = props => {

  //internal change functions
  const SemInt = event => {
    console.log('SemIntTriggered');

    //change by calling App external function
    props.SemUpdate(event.target.value);

    //log
    console.log('SemInt: ', event.target.value);
  };

  const CourseNumInt1 = event => {
    console.log('CourseNumInt1 Triggered');

    //change by calling App external function
    props.C_NumUpdate1(event.target.value);

    //log
    console.log('C_Num1: ', event.target.value);
  };

  const CourseNumInt2 = event => {
    console.log('CourseNumInt2 Triggered');

    //change by calling App external function
    props.C_NumUpdate2(event.target.value);

    //log
    console.log('C_Num2: ', event.target.value);
  };

  const CourseNumInt3 = event => {
    console.log('CourseNumInt3 Triggered');

    //change by calling App external function
    props.C_NumUpdate3(event.target.value);

    //log
    console.log('C_Num3: ', event.target.value);
  };

  const CourseNumInt4 = event => {
    console.log('CourseNumInt4 Triggered');

    //change by calling App external function
    props.C_NumUpdate4(event.target.value);

    //log
    console.log('C_Num4: ', event.target.value);
  };

  const ClassNumInt1 = event => {
    //change by calling App external function
    props.CL_NumUpdate1(event.target.value);
    console.log('ClassNumInt1: ', event.target.value);
    };

  const ClassNumInt2 = event => {
    //change by calling App external function
    props.CL_NumUpdate2(event.target.value);
    console.log('ClassNumInt2: ', event.target.value);
    };

  const ClassNumInt3 = event => {
    //change by calling App external function
    props.CL_NumUpdate3(event.target.value);
    console.log('ClassNumInt3: ', event.target.value);
    };

  const ClassNumInt4 = event => {
    //change by calling App external function
    props.CL_NumUpdate4(event.target.value);
    console.log('ClassNumInt4: ', event.target.value);
    };

  const check_cell_val = row => {
    console.log("WOWWOW", row)
  
  };
    
  //create a number of schedules based on the number submitted
  // Future: will return multiple schedules to map through
  const scheduleGrids = props.test_sc.map(curr_schedule => {
      console.log("curr_schedule: ", curr_schedule)

      let temp_r1;

      // iterate through each schedule to look for cells with values
      curr_schedule.slice(0, curr_schedule.length).map((row, col) => {
        // Each item corresponds to a "row" of the table
        //console.log("row ", row)
        //console.log("col ", col)

        // Can access 0-5 indices within rows
        //console.log("row[1] ", row[1])

        // To iterate through all 6 days in a school week (row)
        for (let i = 0; i < curr_schedule.length; i++) {
          if (row[i] === ""){
            temp_r1 = (<td>{row[i]}</td>)
          }
          else{
            temp_r1 = (<td class="color_table_bd_cell">{row[i]}</td>)
          }

        }

      })

      //console.log("temp_r1", temp_r1)

  


      return (

        <div>
            <table class="table table-bordered" >
                <thead>
                  <tr class="color_table_hd_row">
                    <th scope="col">Period</th>
                    <th scope="col">Time</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                {curr_schedule.slice(0, curr_schedule.length).map((row, index) => {
                      return (
                        <tr key={index} >
                          <td>{periods[index]}</td>
                          <td>{times[index]}</td>
                          
                          
                          
                          {() => check_cell_val( row[0] )}

                          <td>{row[0]}</td>


                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                          <td>{row[3]}</td>
                          <td>{row[4]}</td>
                          <td>{row[5]}</td>
                        </tr>
                      );
                    })}
                </tbody>
            </table>     

        </div>
      );
    });



/*
  function generateSchedule() {
    let checkArray = [1] 
    let oldSchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
    let newSchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
    oldSchedule = TestSchdule;
    /*
    console.log('Before: ', TestSchdule)
    console.log('oldSchedule is : ', oldSchedule)
    console.log('newSchedule is : ', newSchedule)
    
    //console.log(checkArray.length)
    let day_index = 0;
    let period_index1 = 0;
    let period_index2 = 0;
    if (Array.isArray(props.responseData) && checkArray.length && props.responseData[0]) {
      //console.log("Wow, something's here")
      //console.log('ResponseData (from schedule.js) is: ', props.responseData)
      let responseDataLength = [];
      responseDataLength = props.responseData
      //console.log('length of resposneData is: ', responseDataLength.length)
      for (let k = 0; k < responseDataLength.length; k++) {
        let sectionsArray = props.responseData[k].sections
        console.log('sectionsArray is: ', sectionsArray)
        let meetTArray = sectionsArray[0].meetTimes
        console.log('meetTArray is: ', meetTArray)
        for (let j = 0; j < meetTArray.length; j++) {
          //console.log('meetTDay is: ', meetTArray[j].meetDays[0])
          //console.log(meetTArray[j].meetPeriodBegin)
          //console.log(meetTArray[j].meetPeriodEnd)
          day_index = daysShort.indexOf(meetTArray[j].meetDays[0])
          console.log('day_index is: ', day_index)
          period_index1 = periods.indexOf(meetTArray[j].meetPeriodBegin)
          console.log('period_index1 is: ', period_index1)
          period_index2 = periods.indexOf(meetTArray[j].meetPeriodEnd)
          console.log('period_index2 is: ', period_index2)
          if (period_index1 === period_index2)
            TestSchdule[period_index1][day_index] = props.responseData[k].code
          else {
            TestSchdule[period_index1][day_index] = props.responseData[k].code
            TestSchdule[period_index2][day_index] = props.responseData[k].code
            }
          }
        }
      }
    else {
      console.log("I guess there's nothing here")
      console.log(props.responseData)
      //console.log('Is there really nothing here?...', props.responseData[0].code)
    }
    console.log('After: ', TestSchdule)
    }
   */


    
  return (
    <div className='App'>

<div class="row">
      
  <div class="col-med-6">
      <div className='sticky-menu'>

            <Card body>

            <div className='col-sm'>
                <Form onSubmit={props.check}>
                  <h2>Add Courses</h2>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label><b>Semester</b></Form.Label>
                      <select className="form-control" name="Semester" onChange={SemInt} required="true">
                          <option selected>Semester - Required</option>
                          <option value="fall2021">Fall 2021</option>
                          <option value="spring2021">Spring 2021</option>
                          <option value="fall2020">Fall 2020</option>
                      </select>
                    </Form.Row>
                  </div>
            
                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label><b>Course Number 1</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum1'
                        onChange={CourseNumInt1}
                      />
                      
                    </Form.Row>
                  </div>

                  <div className='h_cl_num'>
                  <Form.Row>
                      <Form.Label>Class Number</Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum1'
                        onChange={ClassNumInt1}
                      />
                    </Form.Row>
                  </div>


                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label><b>Course Number 2</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum2'
                        onChange={CourseNumInt2}
                      />
                    </Form.Row>
                  </div>

                  <div className='h_cl_num'>
                  <Form.Row>
                      <Form.Label>Class Number</Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum2'
                        onChange={ClassNumInt2}
                      />
                    </Form.Row>
                  </div>


                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label><b>Course Number 3</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum3'
                        onChange={CourseNumInt3}
                      />
                    </Form.Row>
                  </div>

                  <div className='h_cl_num'>
                  <Form.Row>
                      <Form.Label>Class Number</Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum3'
                        onChange={ClassNumInt3}
                      />
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label><b>Course Number 4</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum4'
                        onChange={CourseNumInt4}
                      />
                    </Form.Row>
                  </div>

                  <div className='h_cl_num'>
                  <Form.Row>
                      <Form.Label>Class Number</Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum4'
                        onChange={ClassNumInt4}
                      />
                    </Form.Row>
                  </div>


                  <div className='h1_p'>
                    <Button variant='primary' type='submit'  > {/* onClick={generateSchedule} */}
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>

            
          </Card>
          
          </div>
          </div>

        
        <div class="col-lg-8">
          <Card body>
              <h2>Possible Schedules</h2>
              {/* {scheduleGrids}*/}
              {scheduleGrids}

          </Card>
        </div>


        </div>            
    
    </div>
  );
};

export default Schedule;