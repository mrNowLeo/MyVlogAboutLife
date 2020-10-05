import React from 'react';
import './ShowArticle.css';
import axios from 'axios';

class ShowArticle extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            text: ''
        }
        const date = this.$_GET('date');
        axios.post('http://localhost:3001/getArticle', {
          date
        })
        .then((response) => {
            const slowData = response.data;
            if(slowData.answer === 'success') {
                this.setState({
                    title: slowData.article.title,
                    text: slowData.article.text
                })
            } else {
                this.setState({errorMessage: 'Не правильный логин или пароль'})
            }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    $_GET(key) {
        var p = window.location.search;
        p = p.match(new RegExp(key + '=([^&=]+)'));
        return p ? p[1] : false;
    }

    
    render() {
        return (
           <div>
                {this.state.title}<br></br>
                {this.state.text}
           </div>
        );
    }
}

export default ShowArticle;
