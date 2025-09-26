import React from 'react';

const StatCard = ({ title, value, valueClassName }) => {

    const finalClassName = `text-3xl font-bold text-text-light mt-2 ${valueClassName || ''}`;

    return (
        <div className="bg-component-dark p-6 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-text-muted">{title}</p>
            <p className={finalClassName}>{value}</p>
        </div>
    );
};

export default StatCard;