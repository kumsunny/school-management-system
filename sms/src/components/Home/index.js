/*
 *===================================================================
 *
 * Licensed Materials - Property of IBM
 * IBM Cloud Pak System
 * Copyright IBM Corporation, 2020. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 *===================================================================
 */
import React, {useState} from 'react';
import {
    Row,
    Column,
    Grid,
    Button,
    TextInput,
    Dropdown,
    Form,
    FormGroup,
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell
} from "carbon-components-react";
import './home.scss';

function Home(){
    const props = {
        input : (label,placeholder,text,defaultValue)=>({
            labelText: label,
            placeholder: placeholder,
            invalidText: text,
            defaultValue: defaultValue
        })
    }
    const items = [
        {
            id: 'male',
            text: 'Male',
          },
          {
            id: 'female',
            text: 'Female',
          }
    ]
    const [name, setName] = useState("")
    const [classnum, setClass] = useState("")
    const [roll, setRoll] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("Select")
    const [nameError, setNameError] = useState("")
    const [classError, setClassError] = useState("")
    const [rollError, setRollError] = useState("")
    const [ageError, setAgeError] = useState("")
    const [data, setData] = useState([])
    const headers = [
        {
          key: 'name',
          header: 'Name',
        },
        {
          key: 'class',
          header: 'Class',
        },
        {
            key: 'roll',
            header: 'Roll',
          },
          {
            key: 'age',
            header: 'Age',
          },
          {
            key: 'gender',
            header: 'Gender',
          },
      ];

    const changeVal = (val,type) =>{
        if(type === "name"){
            if(val !== ""){
                setName(val)
            }else{
                setNameError(true)
            }
        }else if(type === "class"){
            if(val !== ""){
                setClass(val)
            }else{
                setClassError(true)
            }
        }else if(type === "roll"){
            if(val !== ""){
                setRoll(val)
            }else{
                setRollError(true)
            }
        }else if(type === "age"){
            if(val !== ""){
                setAge(val)
            }else{
                setAgeError(true)
            }
        }
        
    }
    const selectGender = (e) =>{
        console.log(e)
        setGender(e.selectedItem.text)
    }
    
    const saveData = () =>{
        let obj = {}
        obj["id"] = roll+"0"
        obj["name"] = name
        obj["class"] = classnum
        obj["roll"] = roll
        obj["age"] = age
        obj["gender"] = gender
        let arr = []
        arr.push(obj)
        setData(arr)
        setName("")
        setRoll("")
        setAge("")
        setClass("")
        setGender("")
    }
    return (
    <>
        <Grid>
            <Row className="mg-top">
                <Column sm={4} md={8} lg={8}>
                    <Form>
                        <FormGroup><TextInput id="name" onChange={(e)=>changeVal(e.target.value,"name")} invalid={nameError} {...props.input("Name","Enter name","Field is required",name)}></TextInput></FormGroup>
                        <FormGroup><TextInput id="class"onChange={(e)=>changeVal(e.target.value,"class")} invalid={classError} {...props.input("Class","Enter class","Field is required",classnum)}></TextInput></FormGroup>
                        <FormGroup><TextInput id="roll" onChange={(e)=>changeVal(e.target.value,"roll")} invalid={rollError} {...props.input("Roll number","Enter roll number","Field is required",roll)}></TextInput></FormGroup>
                        <FormGroup><TextInput id="age"  onChange={(e)=>changeVal(e.target.value,"age")} invalid={ageError} {...props.input("Age","Enter age","Field is required",age)}></TextInput></FormGroup>
                        <FormGroup>
                            <Dropdown id="gender"
                                titleText="Gender"
                                label={gender}
                                items={items}
                                itemToString={(item) => (item ? item.text : '')}
                                onChange={(e)=>selectGender(e)}>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup><Button onClick={e=>saveData(e)}>Add student</Button></FormGroup>
                </Form>
            </Column>
            { data && data.length > 0 ?
            <Column>
                <DataTable rows={data} headers={headers} >
                {({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getTableProps,
                getTableContainerProps,
                }) => (
                    <TableContainer
                        title="Students Table"
                        {...getTableContainerProps()}>
                        <Table {...getTableProps()} isSortable>
                        <TableHead>
                            <TableRow>
                            {headers.map((header) => (
                                <TableHeader
                                key={header.key}
                                {...getHeaderProps({ header })}
                                isSortable>
                                {header.header}
                                </TableHeader>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow key={row.id} {...getRowProps({ row })}>
                                {row.cells.map((cell) => (
                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    )}
                </DataTable>
            </Column>:null}
            </Row>
        </Grid>
        
    </>
    )
}

  export default Home;