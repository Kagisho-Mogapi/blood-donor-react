import api from "./api"


export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

export const fetchAll = () => dispatch =>{
    api.candidate().fetchAll()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type:ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(error => console.log(error))

}