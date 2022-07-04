const INC = "INC";
const DEC = "DEC";
const CHANGE_NAME = "CHANGE_NAME";

let state = 0;

const updateState = (state, { type, payload }) => {
  switch (type) {
    case "INC":
      return {
        ...state,
        count: state.count + payload,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - payload,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: payload,
      };
    default:
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
  name: "John Doe",
};
const store = new Store(updateState, initialState);
const { dispatch } = store;
store.subscribe(() => console.log("---subscribe 1", store.getState().count));
store.subscribe(() => console.log("---subscribe 2", store.getState().name));

const incAction = (amount) => ({ type: INC, payload: amount });
const decAction = (amount) => ({ type: DEC, payload: amount });
const changeNameAction = (name) => ({ type: CHANGE_NAME, payload: name });

dispatch(incAction(5));
dispatch(decAction(24));
dispatch(changeNameAction("Will Smith"));

// test in JSBIN
// function App() {
//   const state = store.getState();

//   const el = document.getElementById("name");
// const btn = document.getElementById("button");

// btn.addEventListener("click", () => {
//   dispatch(changeNameAction(Math.random().toString(36).slice(-8)));
// });
// store.subscribe(()=>{
//     el.innerText = store.getState().name
// })
//   el.innerText = state.name;
//   const handleClick = () => {
//     dispatch(changeNameAction("Will Smith"));
//   };
//   console.log("state.name : ", state.name);
// }
// console.log("store.getState() : ", store.getState());

// state = updateState(state, incAction(2));
// console.log("state : ", state);
// state = updateState(state, decAction(5));
// console.log("state : ", state);
// state = updateState(state, decAction(7));
// console.log("state : ", state);
// state = updateState(state, {});
// console.log("state : ", state);
