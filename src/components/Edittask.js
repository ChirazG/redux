import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, edit, efface } from '../Actions/taskActions';
import { Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

const Edittask = ({ idel, desc }) => {
    const task = useSelector(state => state.taskReducer)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
   
    const handelShow = () => setShow(true);
    const handelchange = () => {
        dispatch(edit(idel, desc))
        
    }

    /*const handelsave = (e) => {
        console.log(e)
        
        if (e.key === "Enter") {
            setShow(true)
        }
        
        handelShow()
    }*/

    return (

        <div>
            <InputGroup>
                {show ?
                    <FormControl
                        style={{ width: "300px" }}
                        defaultValue={desc}
                        onChange={handelchange} onKeyPress={(e)=>{
                            if (e.key=== "Enter"){setShow(true); 
                                console.log(e.target); 
                               }}
                        } /> : <p style={{ width: "300px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflowWrap: "break-word" }}> {desc}</p>}
                <InputGroup.Append>
                <Button variant="outline-secondary" className="btn btn-info btn-lg" onClick={handelShow}><i class="bi bi-pencil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg></i>Edit</Button>
                        </InputGroup.Append>
      </InputGroup>  
          


</div >

    );
}

export default Edittask;