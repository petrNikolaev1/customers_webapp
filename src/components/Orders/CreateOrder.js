import React, {Component, Fragment} from 'react'
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import classNames from 'classnames'

import '@/assets/styles/CreateOrder.scss'
import showBeforeHOC from "@/hocs/showBeforeHOC";
import Form from "@/forms/Form";
import constants from '@/constants'
import Notification from '@/common/Notification'
import Footer from "@/common/Footer";
import {hideCreateOrder} from '@/actions/viewActions'
import connect from "react-redux/es/connect/connect";
import {apiReq} from '@/actions/serverActions';
import translate from '@/hocs/Translate';
import Header from "../../common/Header";


@translate('CreateOrder')
@connect(
    store => ({}), {hideCreateOrder, apiReq}
)
@showBeforeHOC('order-creation')
export default class CreateOrder extends Component {
    constructor(props) {
        super(props);
        const {strings} = props;
        this.pages = [
            {title: strings.INFO, forms: ['description', 'weight', 'worth']},
            {title: strings.FROM, forms: ['origin']},
            {title: strings.TO, forms: ['destination']},
            {title: strings.TIME, forms: ['dueDate']},
        ];
        this.state = {
            forms: {
                description: {
                    data: {label: strings.DESCRIPTION},
                    type: constants.STRING_INPUT,
                    notification: strings.WRONG_DESCRIPTION
                },
                worth: {
                    data: {label: strings.VALUE},
                    type: constants.AMOUNT_INPUT,
                    notification: strings.WRONG_VALUE
                },
                weight: {
                    data: {label: strings.WEIGHT},
                    type: constants.WEIGHT_INPUT,
                    notification: strings.WRONG_WEIGHT
                },
                origin: {
                    data: {label: strings.FROM},
                    type: constants.SELECT_LOCATION,
                    notification: strings.WRONG_FROM,
                    big: true
                },
                destination: {
                    data: {label: strings.TO},
                    type: constants.SELECT_LOCATION,
                    notification: strings.WRONG_TO,
                    big: true
                },
                dueDate: {
                    data: {label: strings.DATE},
                    type: constants.DATETIME,
                    notification: strings.WRONG_DATE,
                    labelClass: 'react-datetime-label-create-order'
                },
            },
            currentPage: 1,
            footerMounted: true,
        };
    };
    mountFooter = () => {
        this.setState({footerMounted: true})
    };

    unmountFooter = () => {
        this.setState({footerMounted: false})
    };

    componentDidUpdate(prevProps, prevState) {
        const {footerMounted} = this.state;

        if (!footerMounted) {
            this.mountFooter();
        }
    }

    handleForm = key => value => {
        this.setState(prevState => ({
            forms: {
                ...prevState.forms,
                [key]: {
                    ...prevState.forms[key],
                    ...value
                }
            }
        }))
    };

    renderForms = (forms) => {
        return Object.keys(forms).map((key, index) => {
            const {notification, notificationShown, big, special} = forms[key];
            return (
                <Fragment key={index}>
                    {!special ? !big ?
                        <div className='order-creation-container-body-table-row'>
                            <div
                                className='order-creation-container-body-table-row-item order-creation-container-body-table-row-form'
                            >
                                <Form
                                    {...forms[key]}
                                    key={key}
                                    handleChange={this.handleForm(key)}
                                    mounted={true}
                                />
                            </div>
                            <div
                                className='order-creation-container-body-table-row-item order-creation-container-body-table-row-notification'
                            >
                                {<Notification
                                    mounted={notificationShown}
                                    text={notification}
                                    notificationClass="order-creation-notification"
                                />}
                            </div>
                        </div>
                        :
                        <div className='order-creation-container-body-table-full'>
                            <Form
                                {...forms[key]}
                                key={key}
                                handleChange={this.handleForm(key)}
                                mounted={true}
                            />
                        </div>
                        :
                        <div className={`order-creation-container-body-table-${special}`}>
                            <Form
                                {...forms[key]}
                                key={key}
                                handleChange={this.handleForm(key)}
                                mounted={true}
                            />
                        </div>
                    }
                </Fragment>
            )
        })
    };

    getCurrentPageForms = () => {
        const {currentPage, forms} = this.state;
        const currentFormsKeys = this.pages[currentPage - 1].forms;
        return currentFormsKeys.reduce((res, cur) => (res[cur] = forms[cur], res), {})
    };

    checkEmpty = () => {
        const emptyForms = Object.keys(this.getCurrentPageForms()).filter(key => this.state.forms[key].empty || this.state.forms[key].empty === undefined);

        this.setState(prevState => {
            const formsWithWarnings = Object.keys(prevState.forms)
                .reduce((res, key) => (emptyForms.includes(key) ? res[key] = {
                    ...prevState.forms[key],
                    warning: true
                } : res[key] = prevState.forms[key], res), {});

            return ({
                forms: formsWithWarnings
            })
        });

        clearTimeout(this.warningsResetTimeout);
        this.warningsResetTimeout = setTimeout(() => {
            this.setState(prevState => {
                return ({
                    forms: Object.keys(prevState.forms)
                        .reduce((res, key) => (emptyForms.includes(key) ? res[key] = {
                            ...prevState.forms[key],
                            warning: false
                        } : res[key] = prevState.forms[key], res), {})
                })
            })
        }, 500);

        return !!emptyForms.length
    };

    checkValid = () => {
        const invalidForms = Object.keys(this.getCurrentPageForms()).filter(key => !this.state.forms[key].valid);

        this.setState(prevState => {
            const formsWithWarnings = Object.keys(prevState.forms)
                .reduce((res, key) => (invalidForms.includes(key) ? res[key] = {
                    ...prevState.forms[key],
                    notificationShown: true
                } : res[key] = prevState.forms[key], res), {});

            return ({
                forms: formsWithWarnings
            })
        });

        clearTimeout(this.notificationsResetTimeout);
        this.notificationsResetTimeout = setTimeout(() => {
            this.setState(prevState => {
                return ({
                    forms: Object.keys(prevState.forms)
                        .reduce((res, key) => (invalidForms.includes(key) ? res[key] = {
                            ...prevState.forms[key],
                            notificationShown: false
                        } : res[key] = prevState.forms[key], res), {})
                })
            })
        }, 2000);

        return !!invalidForms.length
    };

    handleNextPage = () => {
        if (this.checkEmpty() || this.checkValid()) return;
        const {currentPage} = this.state;
        if (currentPage > this.pages.length - 1) return;
        this.setState({currentPage: currentPage + 1})
    };

    handlePrevPage = () => {
        const {currentPage} = this.state;
        if (currentPage < 2) return;
        this.setState({currentPage: currentPage - 1})
    };

    footerEnabled = () => Object.values(this.state.forms).every(form => form.valid);

    onFooter = () => {
        if (!this.footerEnabled()) return;
        const {forms} = this.state;
        this.props.apiReq(
            'order',
            {
                description: forms.description.value,
                worth: Number(forms.worth.value),
                weight: Number(forms.weight.value),

                origin_full_address: forms.origin.stringValue,
                origin_lat: forms.origin.coordinatesValue.lat(),
                origin_long: forms.origin.coordinatesValue.lng(),
                origin_short_address: forms.origin.shortAddress,

                destination_full_address: forms.destination.stringValue,
                destination_lat: forms.destination.coordinatesValue.lat(),
                destination_long: forms.destination.coordinatesValue.lng(),
                destination_short_address: forms.destination.shortAddress,

                dueDate: forms.dueDate.value.valueOf()
            },
            this.props
        );
        this.props.hideCreateOrder()
    };

    render() {
        const {hideCreateOrder, showBeforeClass, strings} = this.props;
        const {currentPage, footerMounted} = this.state;

        const forms = this.getCurrentPageForms();
        const firstForm = Object.values(forms)[0];
        // console.log('RENDER', firstForm)

        return (
            <div className={classNames("order-creation-container", showBeforeClass)}>
                <Header label={strings.FORMING} onClose={hideCreateOrder}/>

                <div className='order-creation-container-page-header'>
                    <div className="order-creation-container-page-header-label">
                        {this.pages[currentPage - 1].title}
                    </div>
                    {firstForm.big &&
                    <Notification
                        text={firstForm.notification}
                        mounted={firstForm.notificationShown}
                        notificationClass="order-creation-notification-big"
                    />}
                </div>
                <div className='order-creation-container-body'>
                    <div className='order-creation-container-body-table'>
                        {this.renderForms(forms)}
                    </div>
                </div>
                <div className='order-creation-container-nav-container'>
                    <div className='order-creation-container-nav-left'/>
                    <div className='order-creation-container-nav'>
                        <div className='order-creation-container-nav-arrow' onClick={this.handlePrevPage}>
                            {currentPage > 1 && <ChevronLeft className='arrow-icon'/>}
                        </div>
                        <div className='order-creation-container-nav-label'>
                            {`${currentPage}/${this.pages.length}`}
                        </div>
                        <div className='order-creation-container-nav-arrow' onClick={this.handleNextPage}>
                            {currentPage < this.pages.length && <ChevronRight className='arrow-icon'/>}
                        </div>
                    </div>
                    <div className='order-creation-container-nav-right'/>
                </div>
                {footerMounted &&
                <Footer
                    mounted={this.footerEnabled()}
                    unmount={this.unmountFooter}
                    handleClick={this.onFooter}
                    text={strings.FORM_ORDER}
                />}
            </div>

        )
    }
}
