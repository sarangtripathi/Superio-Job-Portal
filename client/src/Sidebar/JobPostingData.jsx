import React from 'react'
import InputField from '../components/InputField';

const JobPostingData = ({handleChange}) => {
    const now = new Date()
    console.log(now);
    const twentyFourHoursAgo = new Date(now - 24 *60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 *60* 1000);
    const thirtyDaysAgo = new Date(now - 30*24 *60* 60 * 1000);

    // converting to string in similar format as backend
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoAgoDate = sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10);
    console.log(twentyFourHoursAgoDate);
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  )
}

export default JobPostingData