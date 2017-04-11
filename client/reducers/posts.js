// reducers take two things:
// 1. the action (what happened)
// 2. copy of current state

const posts = (state = [], action) => {
  console.log("post changed");
  console.log(state, action);
  return state;
}

export default posts;
