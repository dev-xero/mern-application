import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getGoals, reset } from '../features/goals/goalSlice'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    state => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    if (user) {
      dispatch(getGoals())
    }
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Dashboard</h1>
        <p>Create your goals</p>
      </section>
      <GoalForm />
      <section className="content goals-section">
        <h2 className="heading">Your Goals</h2>
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map(goal => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3 className="no-goals">
            You don't have any existing goals currently
          </h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
