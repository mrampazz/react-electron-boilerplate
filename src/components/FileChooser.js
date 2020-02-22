import React from 'react';
import './FileChooser.css';
import Chooser from './Chooser';
// ipcRenderer => comunica con ipcMain in main.js
const { ipcRenderer } = window.require('electron'); 

// Il primo form serve a copiare il file originale json in una directory
// pensavo di copiare il file in modo da non lavorare sul file originale 
// per evitare possibili errori/corruzione dei dati
export default class FileChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileArray: []
        }
    }


    sendInfo = e => {
        e.preventDefault();
        console.log(this.state.fileArray)
        // ipcRenderer.send('async-msg', fileInfo);
    }

    getFileInfo = file => {
        return {
            name: file.name,
            path: file.path,
            type: file.type
        }
    }

    onChangeType = e => {
        const files = this.state.fileArray; 
        if (files) {
            files.push( this.getFileInfo(e.target.files[0]) );
            files.length = Math.min(files.length, 2);
        }
        this.setState({
            fileArray: files
        })
    }

    render() {
        return (
            <div className="fileChooserContainer">
                <form className="fileChooserForm bg-red" onSubmit={this.sendInfo}>

                    <Chooser
                        type="json"
                        onChange={this.onChangeType}
                    />
                    
                    <Chooser
                        type="csv"
                        onChange={this.onChangeType}
                    />
                    
                    <button className="customButton" type="submit">Inizia Addestramento</button>
                </form>
            </div>
        );
    }
}