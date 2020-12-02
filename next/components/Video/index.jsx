import ReactPlayer from 'react-player';

const Video = ({ url, width, height }) => (
  <ReactPlayer url={url} width={width} height={height} controls />
);

export default Video;
