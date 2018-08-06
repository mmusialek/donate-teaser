import React from "react";
import {HeaderElement} from "../elements/HeaderElement";
import {ProgressBarElement} from "../elements/ProgressBarElement";

export class DonateComponent extends React.Component {


    saveForLaterClick = () => {
        alert('save for later');
    };

    tellYourFriendsClick = () => {
        alert('tell your friends');
    };

    giveNowClick = () => {
        alert('give now');
    };

    whyDonate = () => {
        alert('why give $50?');
    };

    render() {
        return (
            <div className="donate-container">
                <div className="donate-container__header">
                    <HeaderElement/>
                </div>

                <div>
                    <ProgressBarElement/>
                </div>

                <div className="donate-container__body">


                    <div>
                        <div>
                            <p className="donate-container__body__bottom-margin
                                          donate-container__body__bottom-margin--big">
                                Only 3 days left to fund this project.
                            </p>
                            <p className="donate-container__body__bottom-margin">
                                Join the other 42 donors who have already supported this project. Every dollar helps.
                            </p>
                        </div>

                        <div className="donate-container__body__bottom-margin donate-container__body__bottom-margin--small">
                            <input type="number"/>
                            <a className="button-element" onClick={this.giveNowClick}>Give Now</a>
                        </div>

                        <div className="donate-container__body__bottom-margin">
                            <a className="button-element donate-container__body__why-give-donation" onClick={this.whyDonate}>Why give $50?</a>
                        </div>
                    </div>
                </div>

                <div className="donate-container__footer">
                    <a className="button-element" onClick={this.saveForLaterClick}>Save for later</a>
                    <a className="button-element" onClick={this.tellYourFriendsClick}>Tell your friends</a>
                </div>
            </div>
        );
    }
}
