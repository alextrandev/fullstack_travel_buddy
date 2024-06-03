import { useState } from "react";
import LoadingImage from "./LoadingImage";

export default function Image({ url, size }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      {!imageLoaded && <LoadingImage size={size} />}
      <img
        src={url}
        style={{ display: !imageLoaded && 'hidden' }}
        onLoad={() => setImageLoaded(true)}
        alt={'Photo of the destination'}
      />
    </>
  )
}
