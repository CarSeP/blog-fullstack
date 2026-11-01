import { Route, Switch } from "wouter";
import HomePage from "./modules/home/HomePage";

function App() {
  return (
    <div className="bg-parchment-50 w-full h-dvh">
      <Switch>
      <Route path="/" component={HomePage} />
     </Switch>
    </div>
  );
}

export default App;
