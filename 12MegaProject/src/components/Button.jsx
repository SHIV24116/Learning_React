////Here we have designed a common button which we can use everywhere repetitively.....not necessary

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props        //these are default values these can be cxhanged in particular usage
}){
    return(
    <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
    )
}

export default Button

