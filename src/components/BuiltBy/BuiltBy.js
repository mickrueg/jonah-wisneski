import React from 'react';
import './BuiltBy.css'

const BuiltBy = () => {
    return (
        <span className="built-by">
            <span className='built-by-text'>
                built by&nbsp;
                <b>
                <a href="https://mikekrueger.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer">@mike
                </a></b>
            </span>
        </span>
    );
};

export default BuiltBy;