import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Post from "./paginas/Post"
import Rodape from "./componentes/rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import NotFound from "paginas/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
         
        </Route>
        <Route path="Posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
