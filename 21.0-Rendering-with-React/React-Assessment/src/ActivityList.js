import React from "react";
import "./ActivityList.css";
import Activity from './Activity'

function ActivityList({ dailyActivities }) {
  return (
    <div>
      {
        dailyActivities.map(({time, description}, index) => (
          <Activity 
          key={index}
          time={time}
          description={description}
          />
        ))
      }
    </div>
  )
}

export default ActivityList;
