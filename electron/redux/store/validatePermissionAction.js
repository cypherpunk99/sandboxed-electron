// validate permissions for actions

const { SWITCH_DAPP } = require('../actions/client');
const { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../actions/counter');
 
const validatePermissionAction = () => next => (action) => {


  if (action.payload.status === 'dapp') {
    switch (action.type) {
      case INCREMENT_COUNTER: 
        console.log(action);
        return next(action);
      case DECREMENT_COUNTER:
        console.log(action);
        return next(action);
      default:
        console.log("Cancelled for dapp");
    }
  } else if (action.payload.status == 'client') {
    switch (action.type) {
      case INCREMENT_COUNTER: 
        console.log(action);
        return next(action);
      case DECREMENT_COUNTER:
        console.log(action);
        return next(action);
      case SWITCH_DAPP:
        console.log(action);
        return next(action);
      default:
        console.log("Cancelled for client");
    }
  }
  
};

module.exports = validatePermissionAction;
