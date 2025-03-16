import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages';

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter="1rem">
                {galleryImages.map((item, index) => (
                    <img
                        className="masonry__img"
                        src={item}
                        key={index}
                        alt=""
                        style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '10px',
                            objectFit: 'cover', // Ensures image fills the box without distortion
                            height: 'auto', // Maintain aspect ratio
                            flexShrink: 0, // Prevent shrinking issues
                        }}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery;
