import React from "react";

const VacancyStatus = (props) => {
    switch (props.statusCode) {
        case 0:
            return (
                <div>
                    Inactive
                </div>
            );
        case 1:
            return (
                <div>
                    Active
                </div>
            );
        default:
            return;
    }
};

export default VacancyStatus