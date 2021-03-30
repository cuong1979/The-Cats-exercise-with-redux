
let initialState = 'what the color is cat'

export const catReducer = ( state = initialState, action ) => {

    const randomNum = Math.floor(Math.random()*2)
    
        

    switch (action.type[randomNum]) {
        case  'yellow':
            return state = 'yellow'
        case  'blue':
                return state = 'blue'
            
        default:
            return state;
           
    }
}