import Dashboard from "./components/ui/Dashboard";
import {StoreProvider} from "./context/StoreContext";

const App = () => {
    return (
        <StoreProvider>
            <Dashboard/>
        </StoreProvider>
    )
}

export default App