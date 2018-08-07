import PropTypes from "prop-types";
import React from "react";
import {HeaderElement} from "../elements/HeaderElement";
import {ProgressBarElement} from "../elements/ProgressBarElement";
import {DonateService} from "../services/DonateService";
import {localStorageService} from "../services/LocalStorageService";
import {DonateForm} from "../components/DonateForm";

export class DonateComponent extends React.Component {
    initialState = {
        daysLeft: 0,
        donors: 0,
        currentAmount: 0,
        goal: 0,
        amount: 0,
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
            isWhyGiveDonationOpen: false
        };

        this.setState(state);

        const amount = localStorageService.load();
        if (amount) {
            this.setState({
                amount: amount || 1
            });
        }
    }

    saveForLaterClick = () => {
        localStorageService.store(this.state.amount);
    };

    giveNowClick = (amount) => {
        this.setState((prev) => {
            return {
                currentAmount: +prev.currentAmount + +amount,
                donors: +prev.donors + 1
            }
        })
    };


    getDonateLink = () => {
        const subject = 'Hi, please donate my project';
        const amount = this.state.amount;
        const body = `Donate my project with only ${amount} on my www.example.page. Every dollar counts!`;

        return `mailto:?subject=${subject}&body=${body}`;
    };


    onValueChange = (event) => {
        this.setState({amount: event.target.value});
    };


    render() {

        const progressValue = 100 * this.state.currentAmount / this.state.goal;
        const tmp = this.state.goal - this.state.currentAmount;
        const stillNeededValue = tmp < 0 ? 0 : this.state.goal - this.state.currentAmount;

        return (
            <div className="donate-container">
                <div className="donate-container__header">
                    <HeaderElement amount={stillNeededValue} progress={Math.floor(100 * this.state.goal / this.state.goal)}/>
                </div>

                <div>
                    <ProgressBarElement progress={Math.floor(progressValue)}/>
                </div>

                <div>
                    <DonateForm daysLeft={this.state.daysLeft} donors={this.state.donors} giveNow={this.giveNowClick} amount={this.state.amount}
                                onValueChange={this.onValueChange}/>
                </div>

                <div className="donate-container__footer">
                    <a className="button-element button-element--default button-element--w45" onClick={this.saveForLaterClick}>Save for later</a>
                    <a className="button-element button-element--default button-element--w45 no-link" href={this.getDonateLink()}>Tell your friends</a>
                </div>
            </div>
        );
    }
}
