import React from 'react'

const List = ({ legend = null, lists, listStyle, gap = 0 }) => {

    return (
        <>
            {listStyle !== 'row' ? (
                <ul className='*:cursor-pointer'>
                    {legend ?? <li className='text-lg font-bold'>{legend}</li>}
                    {lists.map((list, i) => (
                        <li key={i}>{list}</li>
                    ))}
                </ul>
            ) : (
                <ul className={`*:cursor-pointer flex items-center`}
                    style={{ gap: `${gap}px` }}>
                    {legend ?? <li className='text-lg font-bold'>{legend}</li>}
                    {lists.map((list, i) => (
                        <li className='hover:border-b border-b-transparent hover:border-b-blue-300 hover:scale-95'
                            key={i}>{list}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default List