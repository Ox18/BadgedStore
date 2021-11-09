import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainLayout } from "../components/layout/Main/MainLayout";

import {
  ClientesView,
  ConfiguracionView,
  CuentaView,
  DashboardView,
  EmpresaView,
  PresupuestoView,
  ProductosView,
} from "../views";

export const Routes = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/clientes" component={ClientesView} />
          <Route exact path="/configuracion" component={ConfiguracionView} />
          <Route exact path="/cuenta" component={CuentaView} />
          <Route exact path="/dashboard" component={DashboardView} />
          <Route exact path="/empresa" component={EmpresaView} />
          <Route exact path="/presupuesto" component={PresupuestoView} />
          <Route exact path="/productos" component={ProductosView} />
        </Switch>
      </MainLayout>
    </Router>
  );
};
