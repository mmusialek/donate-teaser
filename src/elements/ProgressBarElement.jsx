import React from "react";
import PropTypes from 'prop-types';

export class ProgressBarElement extends React.Component {


    render() {
        let customProgressStyle = {'--custom-progress-width': this.props.progress + '%'};

        return (
            <div className="progress-bar-container" style={customProgressStyle}>
                <div className="progress-bar-container__progress">
                </div>
                <div className="progress-bar-container__marker">

                </div>
            </div>
        );
    }
}

ProgressBarElement.propTypes = {
    progress: PropTypes.number,
};
