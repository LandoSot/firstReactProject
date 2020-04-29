# Learning React Native

React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.


## About this project
This is a simple project to create a ToDo mobile app, to learn **React Native**.
The app is very simple about functions, but with a gentle interface to any user, it's open-source and free to be used for anyone.

You can download and edit the code as you want, or use the app in your smartphone for your activities.

---

## Getting Started

### Nodejs
***Nodejs*** is the base of the programing with **React Native**, the installation is simple, you can download it from his official page with [this link](https://nodejs.org/es/ "Nodejs Official Page") or follow the instructions below to install it from the terminal (in linux).

Change the number in setup_12.x to the last version (you can check the last versión in their [official page](https://nodejs.org/es/ "Nodejs Official Page")):

```
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

To check the version:

```
node -v
```

And to install development tools to build native addons:

```
sudo apt-get install gcc g++ make
```

### Yarn
***Yarn*** is a package manager that doubles down as a project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

Follow the instructions below to set it up.

```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
### Expo
***Expo*** is a kind of manager to create and export your project and test it in real-time in your mobile device. Follow the instructions below to install it.

```
sudo npm install -g expo-cli
```

You can use `expo register` to create a new account, or `expo login` to sign in, the account is required only if you want to synchronize your projects in expo, with your expo app in your smartphone. Also, you can check the logged user with `expo whoami`.

The **Expo IDE** has been replacement for the [Expo DevTools](https://expo.io/tools "Expo Tools").

### Material-iu
***Material-iu*** are some complements to give a better style to the app.

You can install them with the next command: `sudo npm install @material-iu/core`.

Or include them in the project directly with this line: 
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

Finally, if you don't have any problem, you only need to add expo with yarn to be sure to use the correct versions of everything.

* In the terminal, go to the project folder
* Once there, execute the next command: `yarn add expo`

## Executing the app

To run the app in your mobile device, you only need to execute the command `expo start` in your terminal, and it will run the local server and open a window in your web explorer.

In your smartphone, download the expo app and scan the QR code.

You should see the app now.
