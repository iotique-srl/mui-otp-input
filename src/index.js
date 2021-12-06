import React, { Component } from "react"
import { TextField, Typography, FormHelperText } from "@mui/material"

const allowedValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
  "Tab",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
]

export default class OtpInput extends Component {
  render() {
    const {
      characters = 4,
      value,
      onChange,
      style,
      leadingCharacter,
      onKeyDown,
      ...otherProps
    } = this.props
    const inputRefs = []

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          {leadingCharacter && (
            <Typography
              style={{
                textAlign: "center",
                fontSize: "20px",
                padding: "14px",
                height: "28px",
              }}
            >
              {leadingCharacter}
            </Typography>
          )}
          {new Array(characters).fill().map((_, index) => (
            <TextField
              {...otherProps}
              key={"otp-input-" + index}
              variant="outlined"
              style={{
                maxWidth: "56px",
                ...style,
              }}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "20px",
                  padding: "14px",
                  height: "28px",
                },
              }}
              inputRef={(input) => (inputRefs[index] = input)}
              onChange={(event) => {
                if (event.target.value.length === 1) {
                  inputRefs[index + 1]?.focus()
                }

                if (onChange) {
                  let tempValue = value
                  tempValue[index] = event.target.value

                  onChange(tempValue)
                }
              }}
              onKeyDown={(event) => {
                if (!allowedValues.includes(event.key)) {
                  event.preventDefault()
                } else if (event.key === "Backspace" && !value[index]) {
                  inputRefs[index - 1]?.focus()
                }

                if (onKeyDown) {
                  onKeyDown(event)
                }
              }}
              value={value ? value[index] : undefined}
            />
          ))}
        </div>
      </div>
    )
  }
}
