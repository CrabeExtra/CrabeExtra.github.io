import React from 'react';

const Alert = (props: any) => {
  return (
    <div className="absolute top-20 left-0 right-0 flex justify-center items-center">
        <div 
            className={`${props.type === 'danger' ? 'bg-red-500' : `bg-blue-800`} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
            role="alert"
        >
            <p className={`${props.type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} flex rounded-full uppercase px-2 py-1 font-semibold text-xs`}>
                {props.type === 'danger' ? 'Failed' : 'Success!'}
            </p>
            <p className="text-left font-semibold text-xs uppercase py-1 px-2" >
                {props.text}
            </p>
        </div>

    </div>
  )
}

export default Alert