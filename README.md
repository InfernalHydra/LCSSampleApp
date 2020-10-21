# LCS Sample App
This is a very simple app that allows you to see the results of the Spring 2020 LCS Split, read in from a file.

## How do I run this app
1. Make sure you have React Native fully set up.  If this is not the case, please go [here](https://reactnative.dev/docs/environment-setup)!
    * Note: This tutorial does not use Expo, but rather the React Native CLI!  This is simply personal perference (I'm not a big fan of Expo's overhead, nor have I had good experiences with it...)
    * Many of the libraries that expo provides have native react-native implementations as well, you just might have to search a bit.
2. Install the required packages using your package manager of choice
    * npm: ```npm install```
    * yarn: ```yarn```
3. For iOS users only - run ```npx pod-install ios``` to complete the linking of the React Native Navigation Library
4. Run ```npx react-native start``` to start the Metro Server
    * If you get an error regarding the "number of watches being exceeded," please refer to [this](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers) GitHub issue.
5. Run ```npx react-native run-android``` or ```npx react-native run-ios``` to run this app on your target platform