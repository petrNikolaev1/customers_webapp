import React, {Component, Fragment} from 'react';
import Datetime from 'react-datetime'
import moment from 'moment'
import 'moment/locale/ru'
import 'moment/locale/en-gb'
import 'moment/locale/it'
import 'moment/locale/kk'

import '@/assets/styles/DateTime.scss'
import classNames from "classnames";
import connect from "react-redux/es/connect/connect";
import {momentLocale} from "@/util/units";

@connect(
    store => ({
        language: store.stringReducer.language
    }), {}
)
export default class MainSettings extends Component {
    componentDidMount() {
        const {empty, valid, value} = this.props;
        this.props.handleChange({
            value: valid ? value : null,
            valid: valid,
            empty: empty !== undefined ? empty : true
        });
    }

    onChange = value => {
        const valid = value.isAfter(moment().add(4, 'hours'));

        clearTimeout(this.notificationsResetTimeout);
        if (!valid) {
            this.notificationsResetTimeout = setTimeout(() => {
                this.props.handleChange({notificationShown: false})
            }, 5000)
        }
        this.props.handleChange({value: value, empty: false, valid, notificationShown: !valid})
    };

    render() {
        const {value, data, style, transitionEnd, labelClass, inputContainerClass, warning, inputClass, language} = this.props;

        return (
            <Fragment>
                {!!data.label && <label style={style} onTransitionEnd={transitionEnd}
                                        className={classNames('react-datetime-label-default', `${labelClass}`)}
                >
                    {data.label}
                </label>}
                <div
                    style={style} onTransitionEnd={transitionEnd}
                    className={classNames('react-datetime-container-container-default')}
                >

                    <Datetime
                        className={classNames('react-datetime-container-default', `${inputContainerClass}`, {'warning': warning})}
                        value={value}
                        onChange={this.onChange}
                        timeFormat="HH:mm:ss"
                        dateFormat="DD/MM/YYYY"
                        inputProps={{
                            readOnly: true,
                            className: classNames('react-datetime-input-default', `${inputClass}`)
                        }}
                        locale={momentLocale(language)}
                    />
                </div>
            </Fragment>
        )
    }
}
