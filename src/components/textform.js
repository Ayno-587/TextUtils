import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked." + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked." + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    } 

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    const handleClearTextClick = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success")
    }   

    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }
    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter Text Here');
    // text = "New Text" // Wrong Way
    // setText("New Text"); // Correct Way
    return(
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1 className='my-2 mb-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-2 my-1" id="mybox" onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}} rows="8" value={text}></textarea>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleLoClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearTextClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        
        </>
    )
}