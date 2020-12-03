import Image from 'next/image';
import StyledPhoto from './styled';

const Photo = ({ src, alt }) => (
  <StyledPhoto>
    <Image src={src} alt={alt} layout="fill" />
  </StyledPhoto>
);

export default Photo;
