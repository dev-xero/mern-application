import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

const GoalForm = () => {
  const [goalText, setGoalText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = ev => {
    ev.preventDefault()
    if (goalText.trim() && goalText !== '') {
      dispatch(createGoal({ text: goalText }))
    }
    setGoalText('')
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="goal">Goal:</label>
          <input
            type="text"
            name="goal"
            id="goal"
            autoComplete="off"
            autoCorrect="off"
            placeholder="your goal here"
            value={goalText}
            onChange={ev => setGoalText(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Create Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
