import Nav from "./Nav";
import Pages from "../../pages/Pages";
const Dashboard = ({className = ''}) => {
    return (
        <div className={className}>
            <Nav className="bg-white py-3 px-6 mb-6"/>
            <Pages />
        </div>
    )
}

export default Dashboard;