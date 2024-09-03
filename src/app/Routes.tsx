import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import PluginContainer from "../components/PluginList";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/:tabId" element={<PluginContainer />} />
      <Route path="/" element={<Navigate to="/tab1" />} />
    </RouterRoutes>
  );
};

export default Routes;
