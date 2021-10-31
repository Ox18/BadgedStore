import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainLayout } from "../components/layout/Main/MainLayout";
import { HomeView } from "../views/Home/HomeView";

export const Routes = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" component={HomeView} />
        </Switch>
      </MainLayout>
    </Router>
  );
};
