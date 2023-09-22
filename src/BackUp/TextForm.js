// rfc  shortcut for react form 
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUPClick = () => {
        console.log("Upper Case Was Click" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    const handleOnchange = (event) => {
        console.log("handleOnchange ");
        setText(event.target.value)

    }

    const [text, setText] = useState('Enter Text Here');

    return (
        <>
            <div className='container'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleUPClick}>Convert To UpperCase</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>
            </div>

            <div className="container my-3" >
              <h1> Your Text Summary</h1>
               <p> <b>{text.split(" ").length}</b> Words And <b>{text.length}</b> Characters</p>
            </div>
        </>

    )
}
