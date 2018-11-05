import React, {Component} from 'react'
import Select, {components} from 'react-select';
import ReactCountryFlag from "react-country-flag";

import '@/assets/styles/Select.scss'

export default class SelectComponent extends Component {

    state = {
        isMenuOpen: false,
    };

    onOpen = () => {
        const {onOpen} = this.props;
        this.setState({
            isMenuOpen: true
        });
        if (onOpen) onOpen()
    };

    onClose = () => {
        this.setState({
            isMenuOpen: false
        })
    };

    option = (props) => {
        console.log(props)
        return (
            <components.Option {...props}>
                <ReactCountryFlag
                    styleProps={{
                        width: '1vw',
                        height: '1vw',
                        marginRight: '1vw'
                    }}
                    code={props.data.formalLabel}
                    svg
                />
                {props.label}
            </components.Option>
        );
    };

    singleValue = ({children, ...props}) => (
        <components.SingleValue {...props}>
            {children}
            <ReactCountryFlag
                styleProps={{
                    width: '1vw',
                    height: '1vw',
                    marginLeft: '1vw'
                }}
                code={props.data.formalLabel}
                svg
            />
        </components.SingleValue>
    );


    render() {
        const {
            noOptionsMessage, options, placeholder, isDisabled,
            isSearchable, onChange, selectedOption, formClassName
        } = this.props;

        const selectImgClass = `${formClassName}-container ${this.state.isMenuOpen ? 'open' : 'close'}`;

        return (
            <Select
                value={selectedOption}
                onChange={onChange}
                components={{Option: this.option, SingleValue: this.singleValue}}

                isSearchable={isSearchable}
                autoSize={false}
                onMenuOpen={this.onOpen}
                onMenuClose={this.onClose}

                noOptionsMessage={() => noOptionsMessage}

                placeholder={placeholder}

                classNamePrefix={formClassName}
                className={selectImgClass}

                options={options}
                isDisabled={isDisabled}
            />
        )
    }
}
