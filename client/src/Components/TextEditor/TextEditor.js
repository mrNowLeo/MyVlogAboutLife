import React from 'react';
import './TextEditor.css';

class TextEditor extends React.Component {
    constructor() {
        super();
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onSubmitHandle(per) {
        per.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form className="TextEditor_form title-text" onSubmit={this.onSubmitHandle} >
                    <input className="TextEditor_title middle-margin" type="text" name="title" placeholder="Enter title of the article"></input>
                    <textarea className="TextEditor_textarea middle-margin" rows="15" name="text" placeholder="Enter text"></textarea>
                    <div className="TextEditor_bottom-panel middle-margin">
                        <div className="TextEditor_file-group middle-margin">
                            <input className="TextEditor_file middle-margin" type="file" name="file" id="file"/>
                            <label htmlFor="file" className="TextEditor_file-label">
                                <img className="TextEditor_file-icon"/>
                                <span className="TextEditor_file-name">Add file</span>
                            </label>
                        </div>
                        <button className="TextEditor_button title-text middle-margin" type="submit">Publish</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextEditor;
