import React,{useId, forwardRef} from 'react'

const Input = forwardRef(function Input({
    label,
    type="text",
    placeholder="",
    classname="",
    ...props
}, ref){
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label
                className='mb-1'
                htmlFor={id}
            >{label}</label>}

            <input
                type={type}
                ref={ref}
                id={id}
                placeholder={placeholder}
                className=''
                {...props}
            />
        
        </div>
    )
})

export default Input
