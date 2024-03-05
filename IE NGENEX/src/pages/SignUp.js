import React from 'react';
import '../style/App.css';
import * as Components from '../components/SinSupComp';
import { Descope } from '@descope/react-sdk'

function SignUp() {

  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Descope
            flowId="sign-up"
            onSuccess={(e) => console.log(e.detail.user)}
            onError={(e) => console.log('Could not log in!')}
          />
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Descope
            flowId="sign-up-or-in"
            onSuccess={(e) => console.log(e.detail.user)}
            onError={(e) => console.log('Could not log in!')}
          />
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Login</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello !</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  )
}

export default SignUp;
