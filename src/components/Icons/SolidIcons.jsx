import * as SIcons from '@heroicons/react/solid';
import React from 'react'

function SolidIcons(props) {
    const { ...icons } = SIcons
    const TheIcon = icons[props.icon]

    return (
        <TheIcon className={`h-6 w-6 ${props.color} ${props.hovercolor} transition ease-in-out hover:scale-110 cursor-pointer delay-150`} aria-hidden="true" />
    )
}

export default SolidIcons