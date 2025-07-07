import React from 'react'

export default function CategoryDisplay({ catedta }) {
    return (
        <div className='pl-5'>
            {
                catedta.map((item, index) => {
                    return (
                        <div key={index}>
                            <input type="checkbox" name={item.slug} id={item.slug} />
                            &nbsp;&nbsp;
                            <label htmlFor={item.slug} className='cursor-pointer'>
                                {item.name}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}