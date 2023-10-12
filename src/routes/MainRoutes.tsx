import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import PdfGenerator from "../components/PdfGenerator";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PdfGenerator />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
