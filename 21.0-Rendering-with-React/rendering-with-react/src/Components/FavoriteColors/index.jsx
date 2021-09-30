import React from 'react'

const FavoriteColors = ({colors}) => {
    return (
        <div>
            {
                colors.map((color, index) => (
                    <p key={index}>I love {color}</p>
                ))
            }
        </div>
    )
}

export default FavoriteColors
