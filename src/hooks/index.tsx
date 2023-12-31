import { useEffect, useState } from "react";

export const useImageSetting = (imageUrl: string) => {
  const [isImage, setIsImage] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      if (((1188 * 875) / 1205) * aspectRatio > 660) {
        setHeight(1188);
        setWidth(((1188 * 875) / 1205) * aspectRatio);
        setTop(669);
        setRight(0);
      } else {
        setHeight(1655);
        setWidth(((1655 * 875) / 1205) * aspectRatio);
        setTop(730);
        setRight(-225);
      }
      setIsImage(true);
    };

    if (!imageUrl) {
      setIsImage(false);
    }
  }, [imageUrl]);

  return {
    isImage,
    top,
    right,
    width,
    height,
  };
};
