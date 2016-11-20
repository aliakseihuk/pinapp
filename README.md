# Pinapp

A lightweight easy-to-use and elegant application for recalling and checking any of your passwords.

Gives an unlimited number of tries to verify that you are entering your password\pin properly.
This application does not store or show back your passwords directly and hence there is no chance for a hack of the whole bunch of your private data.

**Currently in development**

## Requirements

1. [React Native](http://facebook.github.io/react-native/docs/getting-started.html)
2. [CocoaPods](http://cocoapods.org) (needed for Auth0)
3. [MongoDB](https://www.mongodb.org/downloads)

## Setup

1. **Clone the repo**

  ```
  $ git clone https://github.com/aliakseihuk/pinapp
  $ cd pinapp
  ```

2. **Install dependencies**

  ```
  $ npm install
  $ cd ios
  $ pod install
  ```

3. **Run mongo**

  ```
  $ mongod
  ```

4. **Run server locally**
  
  ```
  $ cd server
  $ cd npm start
  ```

5. **Running client on iOS:**

  ```
  $ cd ../client/client_mobile/
  $ react-native run-ios
  ```
