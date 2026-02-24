import SettingsIcon from "../../icons/SettingsIcon";
import StoreIcon from "../../icons/StoreIcon";
import IntegrationIcon from "../../icons/IntegrationIcon";
import { useStore } from "../../context/StoreContext";

const tabs = [
    { id: "store",        label: "Store",        icon: <StoreIcon /> },
    { id: "settings",     label: "Settings",     icon: <SettingsIcon /> },
    { id: "integrations", label: "Integrations", icon: <IntegrationIcon /> },
];

const Tabs = ({ className = '' }) => {
    const { activeTab, setActiveTab } = useStore();

    return (
        <div className={`flex items-center gap-6 ${className}`}>
            {tabs.map(({ id, label, icon }) => (
                <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex gap-2 items-center text-base font-manrope p-3 border-b-2 transition-colors
                        ${activeTab === id
                            ? "border-teal-600 text-teal-600 font-semibold"
                            : "border-transparent text-gray-600 hover:text-teal-600 font-medium "
                        }`}
                >
                    <span>{icon}</span>
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;