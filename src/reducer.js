export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item:null,
    // token:null,
    token:'BQAbeytQiXkqJsqngtZNOcg9zRvOyxmwCgvQNC1bi0N7sAAIU849-Mnbo469i_lcMfSA609ZKqp6MMCAagIgYlaFqxDxXWqkP3RySkSczTqlbuRzTC4tEtbNu1A4Ru3E18Yc_qjyL0zusVth6VTWYqW2l6_td9LRnzNBupRW83wI9Q9_',
}

const reducer = (state,action) =>{
console.log(action);
//Action -> type,[paload]
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists
        }
        
    default:
        return state;
}
}
export default reducer;