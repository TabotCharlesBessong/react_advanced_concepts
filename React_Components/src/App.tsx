// import React,{useRef} from 'react'

import { Button } from "./components/ui/Button"

const App = () => {
  // const ref = useRef<null | HTMLButtonElement>(null)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flex:1,
      }}
    >
      <h1 className="text-center text-3xl text-orange-600">Hello World</h1>
      <Button
        size="default"
        variant="destructive"
      >
        Hello my people
      </Button>
    </div>
  );
}

export default App
