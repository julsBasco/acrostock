const initialState = {
  test: true,
  returnState: 1,
  thisNull: null,
};

const dashboardReducer = (state = 1, action) => {
  switch (action.type) {
    case "WHAT_IS_TEST":
      return state + 1;
    default:
      return state;
  }
};

export default dashboardReducer;
