import React from 'react';
import './FileChooser.css';
// ipcRenderer => comunica con ipcMain in main.js
const { ipcRenderer } = window.require('electron'); 

// Il primo form serve a copiare il file originale json in una directory
// pensavo di copiare il file in modo da non lavorare sul file originale 
// per evitare possibili errori/corruzione dei dati
export default class FileChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }

    formSubmit = e => {
        e.preventDefault();
        console.log(this.state.file);
        let fileInfo = {
            name: this.state.file.name,
            path: this.state.file.path
        }
        ipcRenderer.send('async-msg', fileInfo);
    }

    onChange = e => {
        this.setState({
            file: e.target.files[0]
        })
    }

    render() {
        return (
            <div className="fileChooserContainer">
                <div className="bg-red">
                    <span> File selezionato:
                            { 
                                this.state.file ?
                                    this.state.file.name :
                                    "Nessun file selezionato"
                            } 
                    </span>
                </div>
                
                <form className="fileChooserForm bg-red" onSubmit={this.formSubmit}>
                    <input className="fileChooserInput" id="fileChooser" type="file" name="file" accept=".json, .JSON" onChange={this.onChange} />
                    <label for="fileChooser" className="fileChooserLabel btn-3"><div>Seleziona un file JSON</div></label>
                    <button className="customButton" type="submit">Inizia Addestramento</button>
                </form>
            </div>
        );
    }
}