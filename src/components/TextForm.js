import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const converToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const converToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase", "success");
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
    }

    const convertFirst = () => {
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText);
        props.showAlert("First letter of each word is converted to Uppercase", "success");
    }

    const removeExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Removed Extra Spaces", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "Light" ? 'black' : 'white' }}>
                <h1 className="my-2">{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="textArea" rows="10" style={{ color: props.mode === "Light" ? 'black' : 'white', backgroundColor: props.mode === "Light" ? 'white' : '#2C3639' }} ></textarea>
                </div>
                <div className="buttons container">
                    <button disabled={text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length===0} type="button" onClick={converToUpperCase} className="btn btn-primary mx-2 my-1">Convert to Uppercase</button>
                    <button disabled={text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length===0} type="button" onClick={converToLowerCase} className="btn btn-primary mx-2 my-1">Convert to Lowercase</button>
                    <button disabled={text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length===0} type="button" onClick={clearText} className="btn btn-primary mx-2 my-1">Clear Text</button>
                    <button disabled={text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length===0} type="button" onClick={copyText} className="btn btn-primary mx-2 my-1">Copy To Clipboard</button>
                    <button disabled={text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length===0} type="button" onClick={convertFirst} className="btn btn-primary mx-2 my-1">Convert First Letter of Each Word To Uppercase</button>
                    <button disabled={text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length===0} type="button" onClick={removeExtraSpaces} className="btn btn-primary mx-2 my-1">Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-2" style={{ color: props.mode === "Light" ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>Total Words: {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} <br></br>Total Characters: {text.replace(/\s/g, '').length}</p>
                <h2 className="my-1">Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
