import React from 'react';
import DynamicText from '../DynamicText/DynamicText';

const Submit = () => {
    return (
        <div>
            <DynamicText
                headingText={'Your Form submitted Successfully'}
                paraText={'We will contact you as soon as possible'}
            >
            </DynamicText>
        </div>
    );
};

export default Submit;