import React, { createContext, useEffect, useState } from "react";
import axios from "axios";



const context = createContext()

const ContextProvider = (props) =>{
    const [uglyData, setUglyData] = useState([])
    const [formData, setFormData] = useState({title: "", imgUrl: "", description: ""})


    const get = () =>{
        axios
            .get('https://api.vschool.io/tylerferre/thing')
            .then(res => setUglyData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(()=> {
        get()
    }, [])


    const handleChange = (e) =>{
        const {value, name} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

           axios
            .post(`https://api.vschool.io/tylerferre/thing/`, formData)
            .then(res => setUglyData(prevState =>[...prevState, formData]))
            .then(() => get())
            .catch(err => console.log(err)) 

    setFormData({title: '', imgUrl: '', description: ''})
    }

    

        return(
            <context.Provider
            value={{
                handleChange: handleChange,
                handleSubmit: handleSubmit,
                get: get,
                setUglyData: setUglyData,
                formData: formData,
                uglyData: uglyData
            }}
            >
                {props.children}
            </context.Provider>
        )
}

export {context, ContextProvider}