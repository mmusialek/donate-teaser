import PropTypes from "prop-types";
import React from "react";
import {ProgressBarElement} from "./ProgressBarElement";

export class HeaderElement extends React.Component {



    render() {
        let customProgressStyle = {'--custom-marker-position': this.props.progress + '%'};

        const donationText = `$${this.props.amount} still needed for this project.`;
        const stillNeedDonationText = "We still need donation.";

        return (
            <div className="header-container">
                <div className="header-container__wrapper">
                    <div className="header-container__wrapper__text">
                        {
                            this.props.amount === 0 ? stillNeedDonationText : donationText

                        }

                    </div>
                </div>
                <div className="header-container__marker" style={customProgressStyle}/>
            </div>
        );
    }
}

HeaderElement.propTypes = {
    amount: PropTypes.number,
    progress: PropTypes.number,
};
