import OtpInput from "@igloo_cloud/mui-otp-input"
import { Component } from "react"

export default class App extends Component {
  state = {
    code: [],
  }

  render() {
    const { code } = this.state

    return (
      <div style={{ maxWidth: "512px", margin: "128px auto" }}>
        <OtpInput
          characters={6}
          onChange={(code) => this.setState({ code })}
          value={code}
        />
      </div>
    )
  }
}
