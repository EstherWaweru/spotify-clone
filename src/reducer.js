export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item:null,
    // token:null,
    token:'BQAv5bpt-0-yNfXTlB3BP09qAAu4jGbVx_a0puJdOwGf_ZGzicyQT2Nb1rIx2cRVNNyT8IRbncJ1RrUxTKktahhHpZtpLGHVqXx8LBiBotIllIi6LRPxc2HTxMW6HKMhX_IrIygy2HoGFh1ZhuVzZuBuIjNEI6Ly6HBpLvp1OkfSZohh',
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