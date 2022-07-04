let state = 0;

const updateState = (state, { type, payload }) => {
  if (type === "INC") {
    return {
      count: state.count + payload,
    };
  } else if (type === "DEC") {
    return { count: state.count - payload };
  } else {
    return state;
  }
};

class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callbacks = [];
  }

  getState = () => this._state;
  dispatch = (action) => {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach((cb) => cb());
  };
  subscribe = (callback) => {
    this._callbacks.push(callback);
  };
}

const initialState = {
  count: 0,
};
const store = new Store(updateState, initialState);
store.subscribe(() => console.log("---subscribe 1", store.getState().count));
store.subscribe(() => console.log("---subscribe 2", store.getState()));

const incAction = (amount) => ({ type: "INC", payload: amount });
const decAction = (amount) => ({ type: "DEC", payload: amount });

store.dispatch(incAction(5));
store.dispatch(decAction(24));
store.dispatch(incAction(10));
store.dispatch(decAction(15));
store.dispatch(incAction(2));
store.dispatch(decAction(6));
// console.log("store.getState() : ", store.getState());

// state = updateState(state, incAction(2));
// console.log("state : ", state);
// state = updateState(state, decAction(5));
// console.log("state : ", state);
// state = updateState(state, decAction(7));
// console.log("state : ", state);
// state = updateState(state, {});
// console.log("state : ", state);
