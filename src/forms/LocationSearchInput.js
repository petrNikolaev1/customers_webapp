import React from 'react';
import {Close} from '@material-ui/icons';
import PlacesAutocomplete, {geocodeByAddress,} from 'react-places-autocomplete';
import classNames from 'classnames'
import '@/assets/styles/LocationInputSearch.scss'
import {getGoogleMaps, validateAddress, getCountryCity} from "@/util/googleMaps";

export default class LocationSearchInput extends React.Component {
    componentDidMount() {
        const {googleCallbackName} = this.props;

        getGoogleMaps().then(() => {
            !!window[googleCallbackName] && window[googleCallbackName]()
        });

        this.initForm()
    }

    initForm = () => {
        const {stringValue, coordinatesValue, valid, empty, shortAddress} = this.props;

        this.props.handleChange({
            stringValue: valid ? stringValue : '',
            coordinatesValue: valid ? coordinatesValue : null,
            shortAddress: valid ? shortAddress : '',
            valid: valid,
            empty: empty !== undefined ? empty : true
        });
    };

    componentDidUpdate(nextProps, nextState) {
        const {key: keyNew} = nextProps;
        const {key: keyOld} = this.props;
        if (keyNew !== keyOld) {
            this.initForm()
        }
    }

    handleChange = stringValue => {
        this.props.handleChange({
            stringValue,
            valid: false,
            empty: !stringValue
        });
    };

    handleSelect = selected => {
        this.props.handleChange({stringValue: selected});

        geocodeByAddress(selected)
            .then(address => {
                this.props.handleChange({
                    coordinatesValue: address[0].geometry.location,
                    stringValue: address[0].formatted_address,
                    shortAddress: getCountryCity(address[0]),
                    valid: validateAddress(address[0])
                })
            })
            .catch(error => {
                console.log('Google Maps Error occurred while picking a place', error);
            });
    };

    handleCloseClick = () => {
        this.props.handleChange({
            stringValue: '',
            coordinatesValue: null,
            shortAddress: '',
            valid: false,
            empty: true
        });
    };

    handleError = (status, clearSuggestions) => {
        console.log('Location Search Input Error', status);
        this.setState({errorMessage: status}, () => {
            clearSuggestions();
        });
    };

    render() {
        const {googleCallbackName, containerClass, stringValue: stringValueProp, style, transitionEnd, warning} = this.props;
        const stringValue = stringValueProp || '';

        return (
            <PlacesAutocomplete
                onChange={this.handleChange}
                value={stringValue}
                onSelect={this.handleSelect}
                onError={this.handleError}
                shouldFetchSuggestions={stringValue.length > 2}
                highlightFirstSuggestion={true}
                googleCallbackName={googleCallbackName}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
                    return (
                        <div
                            style={style}
                            onTransitionEnd={transitionEnd}
                            className={classNames("location-search-input-container", `${containerClass}`)}
                        >
                            <div className={classNames("location-search-input-container-form", {'warning': warning})}>
                                <input
                                    {...getInputProps({
                                        placeholder: 'Введите адрес или выберите на карте',
                                        className: 'location-search-input-container-form-input',
                                    })}
                                />
                                {stringValue.length > 0 && (
                                    <Close
                                        className="location-search-input-container-form-close"
                                        onClick={this.handleCloseClick}
                                    />
                                )}
                            </div>
                            {suggestions.length > 0 && (
                                <div className='location-search-input-container-suggestions-container'>
                                    <div className="location-search-input-container-suggestions">
                                        {suggestions.map(suggestion => {
                                            const className = classNames('location-search-input-container-suggestions-item', {
                                                'location-search-input-container-suggestions-item-active': suggestion.active,
                                            });

                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {className})}
                                                >
                                                    <strong>
                                                        {suggestion.formattedSuggestion.mainText}
                                                    </strong>
                                                    {' '}
                                                    <small>
                                                        {suggestion.formattedSuggestion.secondaryText}
                                                    </small>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                }}
            </PlacesAutocomplete>
        );
    }
}
