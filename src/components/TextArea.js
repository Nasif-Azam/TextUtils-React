import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('i am nasif azam');
    const [defaultContrast, newContrast] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const handleUpperCase = (() => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to upper case.", "success");
    });
    const handleLowerCase = (() => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to lower case.", "success");
    });
    const capitalized = (() => {
        text.split(" ").map(eachWord => eachWord[0].toUpperCase() + eachWord.slice(1)).join(" ");
        setText(text.split(" ").map(eachWord => eachWord[0].toUpperCase() + eachWord.slice(1)).join(" "));
        props.showAlert("Converted to capitalized.", "success");
        // text.join();
    });
    const clearText = (() => {
        let clearText = '';
        setText(clearText);
        props.showAlert("Text cleared!!", "danger");
    });
    const emailExtractor = (() => {
        console.log(text.match(/[\w]+@[\w\]+[\w]{2,}/g) + ".com");
        props.showAlert("Email extracted", "info");

        // console.log(text.match(/[\w]+@[\w\]+[\w]{2,}/g));
        // console.log((text.match(/[\w]+@[\w]{1,}/g + [\w] + c[\w]{ 1, } / c)));


    });
    const highContrast = (() => {
        if (defaultContrast.color === 'black') {
            newContrast({
                color: 'white',
                backgroundColor: 'black'
            });
        }
        else {
            newContrast({
                color: 'black',
                backgroundColor: 'white'
            });
        }
    });
    const copyText = (() => {
        let text = document.getElementById("textAreaBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    });
    const handleExtraSpace = (() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces.", "warning");
    });
    const handleOnChange = ((event) => {
        setText(event.target.value);
    });
    return (
        <div className='container my-3' style={{ color: props.mode === 'light' ? 'green' : 'red' }}>
            <h1>Enter Text Below</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textAreaBox" rows="1" style={defaultContrast}></textarea>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textAreaBox" rows="5" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
            </div>
            <div className="btn btn-primary" id='firstBtn' onClick={handleUpperCase}>Upper Case</div>
            <div className="btn btn-primary mx-3" onClick={handleLowerCase}>Lower Case</div>
            <div className="btn btn-primary mx-3" onClick={capitalized}>Capitalized Case</div>
            <div className="btn btn-primary" onClick={clearText}>Clear Text</div>
            <div className="btn btn-primary" onClick={emailExtractor}>Email Founder</div>
            <div className="btn btn-primary mx-3" onClick={highContrast}>High Contrast</div>
            <div className="btn btn-primary mx-3" onClick={copyText}>Copy Text</div>
            <div className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</div>
            <div className="btn btn-primary" onClick={highContrast}>Sentance Case</div>
            <div className="btn btn-primary mx-3" onClick={highContrast}>Title Case</div>
            <div className="btn btn-primary" onClick={highContrast}>Inverse Case</div>
            <h2 className='my-3'>Your Text Summary</h2>
            <p>Words= {text.split(' ').length} & Charecter= {text.length} </p>
            <p>Time to read = {0.008 * text.split(' ').length} Min </p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Enter Somthing to Preview'}</p>
        </div>
    )
}
