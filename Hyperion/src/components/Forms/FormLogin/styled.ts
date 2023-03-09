import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("http://127.0.0.1:5500/src/assets/img/Background-loginpage.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;

  .imageLogin {
    display: none;
  }

  span {
    color: var(--grey-0);
    font-size: var(--Titles);
    font-weight: 700;
  }

  form {
    background-color: var(--grey-4);

    width: 90%;

    padding: 30px 10px 30px 10px;

    border-radius: var(--border-secondary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;
  }

  h1 {
    color: var(--grey-0);

    padding-bottom: 20px;

    font-size: var(--Titles);
    font-weight: 700;
  }

  button {
    width: 100%;
    height: 38.73px;

    background-color: var(--primary-color);
    color: var(--grey-0);

    border-radius: var(--default-border);
  }

  @media (min-width: 1000px) {
    .imageLogin {
      display: block;
      width: 60%;
    }

    form {
      width: 40%;
      padding: 50px;
      gap: 26px;
    }
  }
`;

export const StyledDivLoginPage = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--grey-4);
  border-radius: var(--border-secondary);

  @media (min-width: 1000px) {
    width: 90%;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
