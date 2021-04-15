

export const handleChange = (e) => async (dispatch) => {
    await dispatch({
        type: 'handleChange',
        payload: e
    });
};

export const addProduct = (obj) => async (dispatch) => {
    await dispatch({
        type: "addProduct",
        payload: obj
    })
}

export const searchByName = (arr) => async (dispatch) => {
    await dispatch({
        type: "searchByName",
        payload: arr
    })
}

export const editProduct = (obj) => async (dispatch) => {
    await dispatch({
        type: "editProduct",
        payload: obj
    })
}


export const ProductToEdit = (arr) => async (dispatch) => {
    await dispatch({
        type: "ProductToEdit",
        payload: arr
    })
}

export const clearFields = () => async (dispatch) => {
    await dispatch({
        type: "clearFields"
    })
}


