import React from "react"
import ReactDOM from "react-dom"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { ApolloProvider } from "@apollo/react-hooks"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const httpLink = createHttpLink({
  uri: "https://sexypoolz.com:2083/graphql",
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  name: "web-app",
  version: "v1.0",
})

const renderApp = (rootElement) => {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    React.createElement(
      ApolloProvider,
      { client },
      React.createElement(App, null),
    ),
  )
}

const rootElement = document.getElementById("root")
if (rootElement) {
  renderApp(rootElement)
} else {
  console.error("Root element not found.")
}

reportWebVitals(console.log)
