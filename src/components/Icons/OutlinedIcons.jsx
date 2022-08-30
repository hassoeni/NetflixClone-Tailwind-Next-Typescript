import * as OIcons from '@heroicons/react/outline';
import React from 'react'

function OutlinedIcons(props) {
    const { ...icons } = OIcons
    const TheIcon = icons[props.icon]

    return (
        <TheIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
    )
}

export default OutlinedIcons