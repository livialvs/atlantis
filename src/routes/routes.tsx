import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import CadastroTitular from "../pages/cadastro/cadastroTitular";
import CadastroDependente from "../pages/cadastro/cadastroDependente";
import VisualizacaoClientes from "../pages/visualizacao/visualizacaoClientes";
import VisualizacaoReservas from "../pages/visualizacao/visualizacaoReservas";

const Routes = () => {
    return (
        <BrowserRouter>

                <Switch>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/cadastro/titular" element={<CadastroTitular/>}/>
                    <Route path="/cadastro/dependente" element={<CadastroDependente/>}/>
                    <Route path="/clientes" element={<VisualizacaoClientes/>}/>
                    <Route path="/reservas" element={<VisualizacaoReservas/>}/>

                </Switch>

        </BrowserRouter>
    )
}

export default Routes