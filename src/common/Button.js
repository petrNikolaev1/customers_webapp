import React, {Component} from 'react'
import {Add} from '@material-ui/icons';

import '@/assets/styles/Button.scss'

export default class Button extends Component {
    render() {
        const {onClick, label} = this.props;
        return (
            <div className="button-container" onClick={onClick}>
                <Add className='button-icon'/>
                <span className='button-label'>{label}</span>
            </div>
        )
    }
}
