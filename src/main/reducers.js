import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
    list: [{
      _id: 1,
      description: 'Estudar react',
      done: false
    }, {
      _id: 2,
      description: 'Tomar café da manhã',
      done: true
    }]
  })
})

export default rootReducer