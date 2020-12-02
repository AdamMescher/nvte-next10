import client from '../client';
import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';

const Index = ({ photos, videos }) => {
  return (
    <div>
      <h1>hello</h1>
      <PhotoGallery photos={photos} />
      <VideoGallery videos={videos} />
    </div>
  );
};

Index.getInitialProps = async () => ({
  photos: await client.fetch(`*[_type == "photo"]`),
  videos: await client.fetch(`*[_type == "video"]`),
});

export default Index;
