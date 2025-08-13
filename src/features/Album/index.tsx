import React from 'react';
import AlbumList from './components/AlbumList/AlbumList';

function AlbumFeature() {
    const albumList = [
        {id: 1, name: 'Album 1', thumbnailUrl: 'https://via.placeholder.com/150'},
        {id: 2, name: 'Album 2', thumbnailUrl: 'https://via.placeholder.com/150'},
        {id: 3, name: 'Album 3', thumbnailUrl: 'https://via.placeholder.com/150'}
    ]

    return (
        <>
            <AlbumList albumList={albumList} />
        </>
    );
}

export default AlbumFeature;