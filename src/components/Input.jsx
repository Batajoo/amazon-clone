import React,{useId, forwardRef} from 'react'

const Input = forwardRef(function Input({
    label,
    type="text",
    placeholder="",
    classname="",
    elementMargin="mb-2",
    ...props
}, ref){
    const id = useId();

    return (
        <div className={`w-full ${elementMargin}`}>
            {label && <label
                className='mb-1 font-medium'
                htmlFor={id}
            >{label}</label>}

            <input
                type={type}
                ref={ref}
                id={id}
                placeholder={placeholder}
                className='w-full border-1 rounded-sm py-1 px-2 focus:outline-blue-700'
                {...props}
            />
        
        </div>
    )
})

export default Input
