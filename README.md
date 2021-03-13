
<br/>
<p align="center">
    <a >
        <img width="65%" height="500px" src="https://res.cloudinary.com/triggsumms/image/upload/v1612896622/i9osrafyi67tbbdfb8q8.png"  alt="TRACKER logo">
    </a>
</p>

<br/>




# ...The Capture The Distance Application
    *This is an application  worked via Stephen Grider's React Native Course [2021]
    * The application works to catalog and store a users tracks via GPS services. Using android or IOS, a user can signIn/signup and record their physical routes via (AppleMaps/GoogleMaps) as well as....visually trace out the routes. When the user finishes they also have the option to look at their personal collection of recordings.
    
> ## Understand React Native v0.62.2 ...
    >> Concepts learned in Detail via Expo Testing:
    
    *Custom Express API and MongoDB setup with Ngrok/Axios/AsyncStorage
        *In app authentication signIn/SignOut CRUD features
    *React Navigation, Context, Hooks, reusable comps
    *React Native Elements 
    *React Native Maps/ Location Context/ mock Location (testing)
     *...
 


<br/>
<p align="center">
    <a >
        <img width="25%" src="https://res.cloudinary.com/triggsumms/image/upload/v1607483390/tqndto6li4tncninnczt.png"  alt="TRACKER logo">
    </a>
</p>

<br/>

## :raising_hand: Currently working on Heroku Deployment...

#### :hammer: Build it yourself

Run the following commands:

```bash
# Clone this repo
git clone https://github.com/TriggSumms/CaptureTheDistance-ReactNativeApp.git && cd CaptureTheDistance
# Install dependencies
npm install

# Now Start up the server via your local machine...
cd ..
cd CaptureTheDistance-server
FIRST BASH WINDOW: "npm run dev"

...& start an instance of your ngrok connection; currently will only receive a 2.0 hour instance
...through bash, open a seperate tab
cd ..
cd CaptureTheDistance
SECOND BASH WINDOW: "ngrok http 3000" ...& then grab/insert new ngrok url inside your project files api/tracker.js



# Run the app with Expo
...cd into CaptureTheDistance
THIRD BASH WINDOW: "npm start"
```

The [Expo](https://expo.io) packager will show, and you can either:

-   install the Expo app, scan the displayed QR code, and run the app on your mobile phone directly.
-   open the Android simulator.
-   open the iOS simulator.

