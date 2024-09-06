import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { JornadaCCUNA } from "../pages/centro_cirurgico/jornada_cirurgica_una"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" />
                <Route path ="/jornadaccuna" element={<JornadaCCUNA />}/>
            </Switch>
        </BrowserRouter>
    )
} 