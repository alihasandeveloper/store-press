import { useState } from "react";
import Button from "../components/ui/Button";
import ActionModal from "../components/modal/ActionModal";

const Store = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="flex flex-col gap-2 max-w-lg">
                <h2 className="text-4xl text-gray-900 font-onest font-bold">Stores</h2>
                <p className="font-manrope text-base text-gray-500">
                    Global control allows users to easily enable or disable all available blocks together, simplifying block management.
                </p>
            </div>
            <div className="mt-6 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-3">
                    <h4 className="text-gray-900 font-onest font-medium text-lg">Store List</h4>
                    <Button size="small" onClick={openModal}>Add store</Button>
                </div>
                <div className="border border-gray-200 rounded-2xl bg-white p-6">
                    <button>Stores</button>
                    <button className="ml-4">Categories</button>
                </div>
            </div>

            {isModalOpen && (
                <ActionModal 
                    title="Add New Store" 
                    onClose={closeModal}
                >
                    <div className="flex flex-col gap-4">
                        <p>Store creation form will go here.</p>
                        <div className="flex justify-end gap-2 mt-4">
                            <Button variant="secondary" size="small" onClick={closeModal}>Cancel</Button>
                            <Button size="small" onClick={() => { console.log("Saving..."); closeModal(); }}>Save Store</Button>
                        </div>
                    </div>
                </ActionModal>
            )}
        </div>
    );
};

export default Store;