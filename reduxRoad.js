const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const roadReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
      };
    }
    case "travel": {
      if (state.supplies - 20 * action.payload <= 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies - 20 * action.payload,
        distance: state.distance + 10 * action.payload,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
      };
    }
    default:
      return state;
  }
};

let wagon = roadReducer(undefined, {});
wagon = roadReducer(wagon, { type: "travel", payload: 1 });
wagon = roadReducer(wagon, { type: "gather", payload: null });
wagon = roadReducer(wagon, { type: "tippedWagon", payload: null });
wagon = roadReducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
