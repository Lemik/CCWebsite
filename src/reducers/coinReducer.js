 export default function coinReducer(state = [], action){
   switch(action.type){
     case 'ADD_COIN':
      return [...state,
        Object.assign({},action.coin)
      ];

      default:
        return state;
   }
 }
