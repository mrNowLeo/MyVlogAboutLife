import React from 'react';
import './TextEditor.css';
import axios from 'axios';

class TextEditor extends React.Component {
    constructor() {
        super();
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.postArticles = this.postArticles.bind(this);
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }
      handleTextChange(e) {
        this.setState({text: e.target.value})
    }

    postArticles(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/postarticles', {
          title: this.state.title,
          text: this.state.text
        })
        .then((response) => {
          if(response.data === 'success') {
            alert('Fuck!, it works')
          } else {
            alert('Fuck! it not works')
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
    
    render() {
        return (
            <div>
                <form className="TextEditor_form title-text">
                    <input onChange={this.handleTitleChange} className="TextEditor_title middle-margin" type="text" name="title" placeholder="Enter title of the article"></input>
                    <textarea onChange={this.handleTextChange} className="TextEditor_textarea middle-margin" rows="15" name="text" placeholder="Enter text"></textarea>
                    <div className="TextEditor_bottom-panel middle-margin">
                        <div className="TextEditor_file-group middle-margin">
                            <input className="TextEditor_file middle-margin" type="file" name="file" id="file"/>
                            <label htmlFor="file" className="TextEditor_file-label">
                                <img className="TextEditor_file-icon"/>
                                <span className="TextEditor_file-name">Add file</span>
                            </label>
                        </div>
                        <button onClick={this.postArticles} className="TextEditor_button title-text middle-margin" type="submit">Publish</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextEditor;
