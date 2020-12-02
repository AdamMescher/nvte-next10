import { v4 as uuidv4 } from 'uuid';
import Video from '../Video';

const VideoGallery = ({ videos }) => (
  <>
    {videos.map((video) => {
      return <Video key={uuidv4()} url={video.videoURL} />;
    })}
  </>
);

export default VideoGallery;
