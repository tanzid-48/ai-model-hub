import React from 'react';

const Tab = ({ setIsActive ,cards}) => {
    return (
        <div className=''>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models"
                    onClick={() => setIsActive("Models")}
                    defaultChecked />

                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Card (${cards.length})`}
                onClick={() => setIsActive("Card")} 
                />

            </div>

        </div>
    );
};

export default Tab;