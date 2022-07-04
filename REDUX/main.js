console.log("hello : ", "hello");

let state = 0;

const updateState = (state, { type, payload }) => {
  if (type === "INC") {
    return state + payload;
  } else if (type === "DEC") {
    return state - payload;
  } else {
    return state;
  }
};

const incAction = (amount) => ({ type: "INC", payload: amount });
const decAction = (amount) => ({ type: "DEC", payload: amount });

state = updateState(state, incAction(2));
console.log("state : ", state);
state = updateState(state, decAction(5));
console.log("state : ", state);
state = updateState(state, decAction(7));
console.log("state : ", state);
state = updateState(state, {});
console.log("state : ", state);
