import React from "react";
import Container from "./containers";
import { AuthProvider } from '@descope/react-sdk'
import { useSearchParams } from "react-router-dom";

const AppRoot = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project") || localStorage.getItem('projectId');
  const flowId = searchParams.get("flow") || localStorage.getItem('flowId');
  
  if (projectId !== localStorage.getItem('projectId')) {
    localStorage.removeItem("DSR")
    localStorage.removeItem("DS")
    localStorage.setItem('projectId', projectId);
  }
  window.analytics.page({projectId: projectId});
  if (flowId !== localStorage.getItem('flowId')) {
    localStorage.removeItem("DSR")
    localStorage.removeItem("DS")
    localStorage.setItem('flowId', flowId);
  }
  return (
      <AuthProvider
          projectId='P2dH2yoxQqbZQbZFu7L4iApWHeXu'
      >
       <App />
      </AuthProvider>
  )
}

const App = () => {
  return (
    <div style={{height: '100%'}}>
      <Container/>
    </div>
  );
}

export default AppRoot;
