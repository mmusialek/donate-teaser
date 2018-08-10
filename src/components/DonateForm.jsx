import PropTypes from "prop-types";
import React from "react";
import {ProgressBarElement} from "../elements/ProgressBarElement";
import {DonateService} from "../services/DonateService";

export class DonateForm extends React.Component {

    initialState = {
        isWhyGiveDonationOpen: false
    };

    constructor() {
        super();
        this.state = this.initialState;
    }

    componentDidMount() {

        const donation = DonateService.loadDonation();
        let state = {
            daysLeft: donation.daysLeft,
            donors: donation.donors,
            currentAmount: donation.currentAmount,
            goal: donation.goal,
            isWhyGiveDonationOpen: false,
            justDonated: false
        };

        this.setState(state);
    }

    whyDonate = () => {
        this.setState((prevState) => {
            return {isWhyGiveDonationOpen: !prevState.isWhyGiveDonationOpen}
        });
    };

    giveNow = () => {
        this.setState({justDonated: true}
        );
        this.props.giveNow(this.props.amount);
    };

    render() {
        const enabledButtonStyle = 'donate-form-container__body__donate-form__item button-element button-element--primary';
        const disabledButtonStyle = 'button-element--disabled ' + enabledButtonStyle;

        return (
            <div className="donate-form-container">
                <div className="donate-form-container__body">
                    <div>
                        <p className="donate-form-container__body__bottom-margin
                                          donate-form-container__body__bottom-margin--big">
                            <span className="text-highlight">Only {this.state.daysLeft} days left</span> to fund this project.
                        </p>
                        <p className="donate-form-container__body__bottom-margin">
                            Join the other <span className="text-bold">{this.props.donors}</span> donors who have already supported this project. Every dollar helps.
                        </p>
                    </div>

                    {this.props.amount <= 0 && <span className="text-error">Min amount is $1.</span>}

                    {this.state.justDonated && <span className="text-thank-you">Thank you for donating us!</span>}
                    <div className="donate-form-container__body__donate-form
                                        donate-form-container__body__bottom-margin
                                        donate-form-container__body__bottom-margin--small">

                        <input className="input__number donate-form-container__body__donate-form__item"
                               value={this.props.amount}
                               onChange={($event) => this.props.onValueChange($event)}
                               type="number" min="1" max="9999" step="1"/>
                        <a className={this.props.amount <= 0 ? disabledButtonStyle : enabledButtonStyle} onClick={this.giveNow}>Give Now</a>
                    </div>

                    <div className="donate-form-container__body__bottom-margin">
                        <a className="button-element button-element donate-form-container__body__why-give-donation" onClick={this.whyDonate}>Why give $50?</a>

                        {this.state.isWhyGiveDonationOpen &&
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur atque deserunt distinctio facilis, impedit in incidunt
                            ipsa labore, laudantium molestiae neque, non odio perspiciatis placeat rem repellendus sequi sunt!
                            <a className="donate-form-container__body__why-give-donation" onClick={this.whyDonate}>close</a>
                        </p>
                        }

                    </div>
                </div>
            </div>
        );
    }
}


DonateForm.propTypes = {
    daysLeft: PropTypes.number,
    donors: PropTypes.number,
    amount: PropTypes.number,
    giveNow: PropTypes.func,
    onValueChange: PropTypes.func,
};
