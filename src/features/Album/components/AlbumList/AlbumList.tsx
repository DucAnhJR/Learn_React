import React from 'react';
import AlbumItem from '../AlbumItem/AlbumItem';
import './styles.css';

interface AlbumListProps {
    albumList: {id: number, name: string, thumbnailUrl: string}[]
}

function AlbumList(props: AlbumListProps) {
    const albumList = props.albumList || []

    return (
        <div className="album-list">
            {albumList.map(album => (
                <AlbumItem key={album.id} name={album.name} thumbnailUrl={album.thumbnailUrl} />
            ))}
        </div>
    );
}

export default AlbumList;