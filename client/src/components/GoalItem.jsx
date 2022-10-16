import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { BiX } from 'react-icons/bi'

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch()
  
  return (
    <div className="goal">
      <div className="date">
        {new Date(goal.createdAt).toLocaleDateString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}><BiX /></button>
    </div>
  )
}

export default GoalItem
