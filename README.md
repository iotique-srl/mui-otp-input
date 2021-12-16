<p align="center">
  <img src="https://static.igloo.ooo/logo-192.png" alt="Igloo logo" width="128"/>
</p>

<h1 align="center">MUI OTP Input</h1>

A customizable input for numeric one-time passwords based on [MUI](https://mui.com/).

<p align="center">
  <img src="https://user-images.githubusercontent.com/23523551/144852579-c97643e5-bc97-48a6-9602-a59bedd75998.png" alt="Component screenshot" width="960"/>
</p>

# Installation

Just download the library from [npm](https://www.npmjs.com/package/@igloo_cloud/mui-otp-input).

**Using npm**

```bash
npm install @igloo_cloud/mui-otp-input --save
```

**Using Yarn**

```bash
yarn add @igloo_cloud/mui-otp-input
```

# Usage

This library exports an `OtpInput` component as default. Once added to your app the component will accept the following props:

| Name             | Type     | Default    | Description                                                                             |
| ---------------- | -------- | ---------- | --------------------------------------------------------------------------------------- |
| characters       | `number` | `4`        | Number of character fields to display.                                                  |
| onChange         | `func`   | `() => {}` | Callback function that is called when the value of one of the character fields changes. |
| value            | `array`  | `[]`       | An array on numbers corresponding to each of the character fields.                      |
| leadingCharacter | `string` | `null`     | An optional character to display before the input.                                      |

In addition to these props, the component will also accept all the props supported by [MUI Textfields](https://mui.com/api/text-field/).

# Try it out

Just clone this repository and run the following commands to open a live demo:

**Using npm**

```bash
cd example
npm start
```

**Using Yarn**

```bash
cd example
yarn start
```
