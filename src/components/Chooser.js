import React from 'react';
import './FileChooser.css';

export default class Chooser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <input className="fileChooserInput" id="fileChooser" type="file" name="file" accept={"."+this.props.type} onChange={this.props.onChange} />
                <label for="fileChooser" className="btn-3"><div>Seleziona un file {this.props.type} </div></label>
            </>
        );
    }
}