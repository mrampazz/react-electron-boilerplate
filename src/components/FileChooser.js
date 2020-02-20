import React from 'react';
import axios from 'axios';

export default class FileChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }

    formSubmit = e => {
        e.preventDefault();
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        })
    }

    onChange = e => {
        this.setState({
            file: e.target.files[0]
        })
    }

    fileUpload = file => {
        const url="http://localhost:3001/jsonFiles";
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            'content-type': 'multipart/form-data'
        }

        return axios.post(url, formData, {})
            .then(res => {
                console.log(res.statusText);
            })
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input type="file" name="file" onChange={this.onChange} />
                <button type="submit">Upload JSON</button>
            </form>
        );
    }
}