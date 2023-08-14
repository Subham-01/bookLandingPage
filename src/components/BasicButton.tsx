import React from 'react';

const BasicButton = ({ title, width }: { title: string, width?: string }) => {
    return (
        <button className={`${width ? `w-${width}` : 'w-auto'}  px-5 py-3 bg-primary text-gray-300 `}>
            {title}
        </button>
    );
};

export default BasicButton;