import React, { useContext } from 'react';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import moment from 'moment';

const TrackForm = () => {

  const {
    state: { name, recording, locations, timeStampz},
    //How we turn it into a controlled input...gotta have that current state above to change the value
    startRecording,
    stopRecording,
    changeName,
    changeStamp
    
    
    

  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();


//changeTimeStamp === timeStampz
// //changeTimeStampz = moment().format('MMMM Do YYYY, h:mm a')
console.log("Timestampz", timeStampz)
console.log("ChangeStamp", changeStamp)
// //timeStampz === changeStamp
// let date = moment().format('MMMM Do YYYY, h:mm a')
// console.log("date", date)
let changeStamp= date.parse(Date.now());
//const date= moment().format('MMMM Do YYYY, h:mm a')



  //EZ form component , reveals the stop button if start is in use

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
          {/* <Input
          // value={timeStampz}
          // onChangeText={ moment(changeStamp).format('MMMM Do YYYY, h:mm a')}
          // type="hidden"


          
        /> */}
       <Text>{}</Text> 
      </Spacer>
      <Spacer>
          {/* IF RECORDING  */}
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      {/* ONCE STOPPED, BUTTON APPEARS TO SAVE YOUR TRACK....*if location stops increasing */}
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
