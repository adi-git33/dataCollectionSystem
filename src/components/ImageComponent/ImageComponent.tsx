import { ImageContainerStyle, ImageStyle } from "./ImageComponent.styled";

const ImageComponent = ({
  src,
  altText,
  maxHeight = "400px",
}: {
  src: string;
  altText: string;
  maxHeight?: string;
}) => {
  return (
    <ImageContainerStyle>
      <ImageStyle src={src} alt={altText} maxHeight={maxHeight} />
    </ImageContainerStyle>
  );
};
export default ImageComponent;
