import React, { use } from 'react';
import Card from '../../ui/Card';

const Models = ({modelPromise}) => {
    const models = use(modelPromise);
    return (
        <div className='py-10 '>
            <div className="text-center">
                <h2 className='text-5xl font-bold'>Chose Your AI Model</h2>
                <p>One Subscription gives you Access to all frontier Al models</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {
                  models.map(model => ( <Card key={model.id} model={model}></Card>
                  ))
                }
            </div>
        </div>
    );
};

export default Models;