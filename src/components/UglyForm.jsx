import React, { useContext } from "react";
import { context } from "../ContextProvider";

const UglyForm = () =>{

    const contextData = useContext(context)

    return(
        <form className="form">
            <h1>Ugly Things</h1>
            <input 
            className="input"
            type="text" 
            value={contextData.formData.title}
            name="title"
            onChange={contextData.handleChange}
            placeholder="Title"
            />
            <input 
            className="input"
            type="text" 
            value={contextData.formData.description}
            name="description"
            onChange={contextData.handleChange}
            placeholder="Description"
            />
            <input 
            className="input"
            type="text" 
            value={contextData.formData.imgUrl}
            name="imgUrl"
            onChange={contextData.handleChange}
            placeholder="Image Url"
            />
            <button onClick={contextData.handleSubmit} className="button">Submit</button>
        </form>
    )
}

export default UglyForm