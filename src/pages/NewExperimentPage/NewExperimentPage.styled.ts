import {styled} from "@mui/material/styles";

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
    width: 70%;
    margin-top: 1rem;
`;

export const FormContainer = styled("form")`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
`;