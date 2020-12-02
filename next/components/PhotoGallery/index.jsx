import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import urlFor from '../../utils/urlFor';
import Photo from '../Photo';

const PhotoGallery = ({ photos }) => {
  const [keywords, setKeywords] = React.useState([]);
  return (
    <>
      {photos.map((photo) => {
        photo.keywords.map((keyword) => {
          if (!keywords.includes(keyword)) {
            setKeywords(keywords.concat(keyword));
          }
        });
        return (
          <Photo
            key={uuidv4()}
            src={`${'' || urlFor(photo.image)}`}
            alt={photo.altText}
            width={500}
            height={500}
          />
        );
      })}
    </>
  );
};

export default PhotoGallery;
