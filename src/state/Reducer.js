

export const initialState = {

    basket: [],
    user: ""
    


}
 
export const getBasketTotal = (basket)=>{
   
    return(
        basket?.reduce((amount, item)=> item.price + amount, 0)
    )
   
}


const reducer = (state, action) =>{
    //console.log(`This is the basket-> ${action}` )
    switch(action.type) {


        case "SET_USER":
            return{
                ...state,
                user: action.user
            }

            default:
                return state;
    
    }

}

export default reducer