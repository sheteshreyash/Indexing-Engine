// import React from 'react';
import '../style/App.css';
import * as Components from '../components/SinSupComp';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import React, { useState } from "react";


function SignUp() {

  const connector = new AppSearchAPIConnector({
   searchKey: "search-ifhw5bki8ym3sj1dscewmwjz",
   engineName: "users",
   endpointBase: "http://localhost:3002",
  });
  
  const [name, setName] = useState("Enter your name");
  const [email, setEmail] = useState("Enter your email");
  const [password, setPassword] = useState("Enter Password");
  const [signIn, toggle] = React.useState(true);

  const querySignIn = () => {

    const config = {
      apiConnector: connector,
      searchQuery: {
        search_fields: {
          email: {},
          password: {},
        },
        result_fields: {
          name: { snippet: { size: 100, fallback: true } },
          email: { raw: {} },
          password: { raw: {} },
        },
        filters: [
          {
            field: "email",
            values: [email], // Replace with the email you are searching for
            type: "all",
          },
          {
            field: "password",
            values: ["password123"], // Replace with the password you are searching for
            type: "all",
          },
        ],
      },
      initialState: {
        resultsPerPage: 10,
      },
    };
  }


  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Welcome Back</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Sign In</Components.Title>
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
  );
}

export default SignUp;
