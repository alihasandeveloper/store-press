
import Store from "./Store";
import Settings from "./Settings";
import Integrations from "./Integrations";
import {useStore} from "../context/StoreContext";
const Pages = (props) => {

    const {activeTab} = useStore()

    const renderPage = () => {
        switch (activeTab) {
            case 'store':
                return <Store/>;
            case 'settings':
                return <Settings/>;
            case 'integrations':
                return <Integrations/>;
            default:
                return <Store/>;
        }
    }
    return (
        <div className="max-w-screen-lg mx-auto px-5">
            {renderPage()}
        </div>
    )
}

export default Pages;