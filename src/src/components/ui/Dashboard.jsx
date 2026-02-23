import Nav from "./Nav";
import {useStore} from "../../context/StoreContext";
import Store from "../../pages/Store";
import Settings from "../../pages/Settings";
import Integrations from "../../pages/Integrations";

const Dashboard = ({className = ''}) => {
    const {activeTab} = useStore();

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
        <div className={className}>
            <Nav className="bg-white py-3 px-6 mb-8"/>
            <div className="max-w-screen-lg mx-auto py-5">
                {renderPage()}
            </div>
        </div>
    )
}

export default Dashboard;