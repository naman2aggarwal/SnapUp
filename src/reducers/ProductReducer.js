const QuantityReducer = (state = 1, action) => {
    switch (action.type) {
        case "INC_QUANTITY":
            return state + 1;

        case "DEC_QUANTITY":
            if (state === 1) {
                return state;
            };
            return state - 1;
        default:
            return state;
    };
};

export default QuantityReducer;