# Assignment

## Prerequisites

- Setup react-native. See [Environment Setup](https://reactnative.dev/docs/environment-setup)
  for more details

- Server running at port 8080

## Android

- Attach an emulator or a device using Android Studio

- Forward port 8080

```sh
adb reverse tcp:8080 tcp:8080
```

- Start app in debug mode

```sh
yarn react-native run-android
```

## IOS

- Attach an emulator or a device using XCode

- Start app in debug mode

```sh
yarn react-native run-ios
```

## Android Build

```sh
yarn build:android:debug
```

## TO DO

- [ ] strings to be added in locale files
- [ ] theme setup
- [ ] Wrapper for UI Components
- [ ] config environment
