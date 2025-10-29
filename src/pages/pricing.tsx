import { Player, BigPlayButton } from 'video-react';

export default (props: any) => {
  return (
    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" autoPlay={true}>
      <BigPlayButton position="center" />
    </Player>
  );
};
