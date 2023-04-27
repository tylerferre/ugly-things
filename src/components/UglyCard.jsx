import React, { useContext, useEffect, useState } from "react";
import { context } from "../ContextProvider";
import axios from "axios";

const UglyCard = (props) =>{

    const contextData = useContext(context)
    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState({title: '', description: '', imgUrl: ''})


    const toggle = () =>{
        setEdit(prevState => !prevState)
    }
    const deleteRequest = () =>{
        axios.delete(`https://api.vschool.io/tylerferre/thing/${props.id}`)
        .then(res => contextData.get())
        .catch(err => console.log(err))
    }

    const putRequest = () => {
        axios.put(`https://api.vschool.io/tylerferre/thing/${props.id}`, editData)
        .then(contextData.setUglyData(prevState => prevState.map(item => item._id === props.id ? {...item, title: editData.title, description: editData.description, imgUrl: editData.imgUrl} : item)))
        .catch(err => console.log(err))

        setEditData({title: '', description: '', imgUrl: ''})
        toggle()
    }

    const handleEditChange = (e) =>{
        const {name, value} = e.target
        setEditData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div className="card">
            <button onClick={deleteRequest} className="delete">X</button>
            <button onClick={toggle} className="edit" ><span className="material-symbols-outlined">edit</span></button>
           {!edit && <div className="uglyCard">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <img className="img" src={props.imgUrl} />
            </div>}
            {edit &&<div className="editDiv">
                <input 
                type="text"
                placeholder="Title"
                name='title'
                value={editData.title}
                onChange={handleEditChange}
                />
                <input
                type="text"
                placeholder="Description"
                name='description'
                value={editData.description}
                onChange={handleEditChange}
                />
                <input 
                type="text" 
                placeholder="Imgae Url"
                name='imgUrl'
                value={editData.imgUrl}
                onChange={handleEditChange}
                />
                <button onClick={putRequest}>Submit</button>
                </div>}
        </div>
    )
}

export default UglyCard