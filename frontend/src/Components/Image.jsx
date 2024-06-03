import { useState } from "react";
import LoadingImage from "./LoadingImage";

export default function Image({ url, size, className, text }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      {!imageLoaded && <LoadingImage size={size} text={text} />}
      <img
        src={url}
        className={className}
        style={{ display: !imageLoaded && 'hidden' }}
        onLoad={() => setImageLoaded(true)}
        alt={'Photo of the destination'}
      />
    </>
  )
}
