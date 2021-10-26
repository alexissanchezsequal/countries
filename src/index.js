import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import "./sass/index.scss"
// ** Lazy load app
const LazyApp = lazy(() => import("./App"))
// ** React Query
import { QueryClient, QueryClientProvider } from "react-query"
import reportWebVitals from "./reportWebVitals"
import WebFont from "webfontloader"
WebFont.load({
  google: {
    families: ["Nunito:300,400,700", "sans-serif"]
  }
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"Loading..."}>
        <LazyApp />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
