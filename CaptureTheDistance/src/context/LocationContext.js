import createDataContext from './createDataContext';

//LocationProvider (CRUD)---> creating a case based reducer to handle the recording of the users track (ALL locations)
//

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
      //recording is the bool notifier
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    case 'change_stamp':
      return { ...state, timeStampz: action.payload };
    case 'reset':
      return { ...state, name: '', timeStampz: '', locations: [] };
    default:
      return state;
  }
};


const changeName = dispatch => name => {
  dispatch({ type: 'change_name', payload: name });
};

const changeStamp = dispatch => timeStampz => {
  dispatch({ type: 'change_stamp', payload: timeStampz});
};


//where the provider really starts dispatch/action and type
const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: 'add_current_location', payload: location });
  //console.log("showTHElocationUpdate")
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};
//simply created an action that takes the state object and sets it back to an empty array with a blank string of a name
const reset = dispatch => () => {
  dispatch({ type: 'reset' });
};





export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, changeStamp, reset },
  //actions (first arugument functions) passed through context and the items we'd like to store as objects (RECORD)
  { name: '', timeStampz: '', recording: false, locations: [], currentLocation: null }
);