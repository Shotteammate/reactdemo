import React, { useState } from 'react';
import './PlanDetails.css'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const PlanDetails = ({data}) => {
    const [selectedPlan, setSelectedPlan] = useState("standard_plan")
    const plans = [
        {id: "standard_plan", name:"Standard Plan", price: 0},
        {id: "premium_plan", name:"Premium Plan", price: 388}
    ]

    const handleChoosePlan = (e) => {
        setSelectedPlan(e.target.value)
    }

    return (
        <div className="details-container">
            <h4 className="heading">Choose Plan</h4>
            {data.length > 0 && <table className="plan-table">
                <tbody>
                    <tr>
                        <td colSpan={2}></td>
                        {plans.map((plan) => (
                            <td key={plan.id} colSpan={1}>
                                <div className="plan-name">{plan.name}</div>
                            </td>
                        ))}
                    </tr>
                    {
                        data.map((service) => (
                            <tr key={service.id} className="service-row">
                                <td colSpan={2} className="service-name">{service.name}</td>
                                <td colSpan={1}>{service.standard_plan? <CheckIcon/> : <ClearIcon/>}</td>
                                <td colSpan={1}>{service.premium_plan? <CheckIcon/> : <ClearIcon/>}</td>
                            </tr>
                        ))
                    }
                    <tr onChange={handleChoosePlan}>
                        <td colSpan={2}></td>
                        {plans.map((plan) => (
                            <td>
                                <input
                                    key={plan.id}
                                    type="radio"
                                    value={plan.id}
                                    name={plan.id}
                                    checked={selectedPlan === plan.id}
                                /> 
                                HK${plan.price}/month
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}

export default PlanDetails;