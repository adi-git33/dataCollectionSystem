import {PageTitleTypography} from "./PageTitle.styled";

const PageTitle = ({ title }: { title: string }) => {
  return <PageTitleTypography>{title}</PageTitleTypography>;
};
export default PageTitle;
