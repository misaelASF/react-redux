const initState = {
    projects: [
        {id:1, title: 'bla bla bla', content: 'bla bla bla'},
        {id:2, title: 'bla bla bla', content: 'bla bla bla'},
        {id:3, title: 'bla bla bla', content: 'bla bla bla'}
    ]
}

const projectReducer = (state = initState, action) => {
     switch(action.type) {
         case 'CREATE_PROJECT':
           console.log('created project', action.project);
           return state;
         case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
         default:
            return state 
     }
}

export default projectReducer