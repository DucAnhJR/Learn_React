import React from 'react';

interface AlbumItemProps {
    name: string, 
    thumbnailUrl: string
}

function AlbumItem(props: AlbumItemProps) {
    const { name, thumbnailUrl} = props || {}

    return (
        <div className="album-item">
            <img src={thumbnailUrl} alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export default AlbumItem;