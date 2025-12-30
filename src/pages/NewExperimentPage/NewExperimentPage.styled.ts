import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const ButtonsContainer = styled("div")`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const NextButtonContainer = styled("div")`
    display: flex;
    justify-content: flex-end;
    width: 55%;
    margin-top: 1rem;

    @media (max-width: 800px) {
        justify-content: center;
    }
`;

export const FormContainer = styled("form")`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
`;

export const StyledPaper = styled(Paper)`
    padding: 24px;
    background-color: #F2F7F8;
    border-radius: 12px;
    width: 100%;
    max-width: 650px;
`;