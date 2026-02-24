import Tabs from "./Tabs";

const Nav = ({className = ''}) => {
    return (
        <div className={`flex gap-3 justify-between items-center ${className}`}>
            <div>
                <h1 className="text-4xl font-onest font-medium">Store<span
                    className="text-teal-600">Press</span></h1>
            </div>

            <Tabs/>

            <div className="">
                <p className="text-base text-gray-500 font-manrope">Version: 1.0.0</p>
            </div>
        </div>
    )
}

export default Nav;