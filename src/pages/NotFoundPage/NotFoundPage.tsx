// Router
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../consts/routes';
// Styled & Components
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import Header from '../../components/Header/Header';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { NotFoundContainer, ErrorCode, ErrorMessage } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainWrapper>
        <NotFoundContainer>
          <ErrorCode>
            404
          </ErrorCode>
          <ErrorMessage >
            Oops! The page you're looking for doesn't exist.
          </ErrorMessage>
          <ButtonComponent
            label="Go Back Home"
            onClickHandler={() => navigate(ROUTES.HOME)}
            />
        </NotFoundContainer>
      </MainWrapper>
    </>
  );
};

export default NotFoundPage;
