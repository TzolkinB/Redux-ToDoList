import { combineReducers } from 'redux'
import visibilityFilter    from './visibilityFilter'
import todos               from './todos'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp

// From "Getting Started with Redux" on egghead.io
// https://egghead.io/courses/getting-started-with-redux
// Video 15: Reducer Composition with combineReducers():
//
// using the combineReducers function that comes with Redux means that you can 
// write the 4 lines above (5-8) rather than manually writing:
//
// const todoApp = (state = {}, action) => {
//  return {
//    todos: todos(
//      state.todos,
//      action
//    ),
//    visibilityFilter: visibilityFilter(
//      state.visibilityFilter,
//      action
//    ),
//  }
// }
