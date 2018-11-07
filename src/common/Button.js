import React, {Component} from 'react'
import {Add, Autorenew, LocationOn} from '@material-ui/icons';
import classNames from 'classnames'

import '@/assets/styles/Button.scss'

export default class Button extends Component {
    renderIcon = type => {
        switch (type) {
            case 'add':
                return <Add/>;
            case 'update':
                return <Autorenew/>;
            case 'location':
                return <LocationOn/>;
            default:
                return null
        }
    };

    render() {
        const {onClick, label, type, buttonClass} = this.props;
        return (
            <div className={classNames("button-default", buttonClass)} onClick={onClick}>
                {this.renderIcon(type)}
                <span className='button-default-label'>{label}</span>
            </div>
        )
    }
}
