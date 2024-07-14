import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchMorePhotos();
    }, []);

    const fetchMorePhotos = () => {
        setTimeout(() => {
            const newPhotos = Array.from({ length: 10 }, (_, i) => ({
                id: photos.length + i,
                src: `https://picsum.photos/300/200?random=${photos.length + i}`,
            }));
            setPhotos([...photos, ...newPhotos]);
            if (photos.length >= 50) {
                setHasMore(false);
            }
        }, 1500);
    };

    return (
        <InfiniteScroll
            dataLength={photos.length}
            next={fetchMorePhotos}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>You've reached the end!</p>}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <motion.div
                        key={photo.id}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img src={photo.src} alt={`Photo ${photo.id}`} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default Gallery;
