import { useState } from "react";
import Button from "../components/ui/Button";
import ActionModal from "../components/modal/ActionModal";
import {useStore} from "../context/StoreContext";

const Store = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { storeList } = useStore()

    // Calculate pagination
    const totalPages = Math.ceil(storeList.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = storeList.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(storeList);


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
                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Address</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Latitude</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Longitude</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {currentItems.length > 0 ? (
                                    currentItems.map((store) => (
                                        <tr key={store.id} className="hover:bg-gray-50/80 transition-colors group">
                                            <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{store.title}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {store.address}, {store.city}, {store.state} {store.zip}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{store.country}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-mono">{store.latitude}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-mono">{store.longitude}</td>
                                            <td className="px-6 py-4 text-sm text-right">
                                                <div className="flex justify-end gap-3">
                                                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-semibold transition-colors">Edit</button>
                                                    <button className="text-red-600 hover:text-red-900 text-sm font-semibold transition-colors">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-12 text-center text-sm text-gray-500 italic">
                                            No stores found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-semibold">{indexOfFirstItem + 1}</span> to <span className="font-semibold">{Math.min(indexOfLastItem, storeList.length)}</span> of{' '}
                                        <span className="font-semibold">{storeList.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                onClick={() => paginate(i + 1)}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                    currentPage === i + 1
                                                        ? 'z-10 bg-teal-50 border-teal-500 text-teal-600'
                                                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
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