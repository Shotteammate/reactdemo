import React, { useState } from 'react';
import './SubscriptionPlan.css'
import JsonInputField from './JsonInputField'
import PlanDetails from './PlanDetails'

const SubscriptionPlan = () => {
    const [data, setData] = useState([])
    const updateData = (payload) => {
        setData(payload);
        console.log('parent payload: ', payload)
        console.log('parent data: ', data)
    }

    return (
        <div className='container'>
            <JsonInputField updateData={updateData} />
            <PlanDetails data={data} />
        </div>
    )
}

export default SubscriptionPlan;