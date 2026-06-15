import { useId } from "react";
import { forwardRef } from "react";


const Input=forwardRef(function Input({   //// forwardRef is a rarely used hook but is actually very usefull when making these kind of reusable components
    label,                                //// search the exact usage of this hook ???
    type="text",
    className="",
    ...props
},ref){
    const id=useId()
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1" 
            htmlFor={id}>
                {label}
            </label>}
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input
 