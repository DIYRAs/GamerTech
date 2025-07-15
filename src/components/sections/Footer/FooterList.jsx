import React from 'react'

const FooterList = ({ legend, lists }) => {
    return (
        <ul className='*:cursor-pointer'>
            <li className='text-lg font-bold'>{legend}</li>
            {lists.map((list) => (
                <li>{list}</li>
            ))}
        </ul>
    )
}

export default FooterList