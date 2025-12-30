import HomePage from "./pages/HomePage/HomePage";
import NewExperimentPage from "./pages/NewExperimentPage/NewExperimentPage";
import ExperimentResultsPage from "./pages/ExperimentResultsPage/ExperimentResultsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./consts/routes";
import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.NEW_EXPERIMENT} element={<NewExperimentPage />} />
        <Route path={ROUTES.RESULTS} element={<ExperimentResultsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
