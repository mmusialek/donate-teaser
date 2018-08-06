import React from "react";


export function CenterContainerWrapper(WrappedComponent) {
    return (
        <div className="center-container-wrapper-container">
            <WrappedComponent {...this.props}/>
        </div>
    );

}
