import {SubtitleTypography} from "./Subtitle.styled";

const Subtitle = ({ title }: { title: string }) => {
  return <SubtitleTypography>{title}</SubtitleTypography>;
};
export default Subtitle;