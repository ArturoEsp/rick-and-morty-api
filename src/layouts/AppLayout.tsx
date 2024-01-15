import styled from "@emotion/styled";
import FormLayout from "./FormLayout";

const AppLayoutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://w.forfun.com/fetch/03/03fdb791c0c8753db54348da091ba79b.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: var(--background-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  & .wrapper-form {
    display: grid;
    place-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AppLayout = () => {
  return (
    <AppLayoutStyled>
      <div className="wrapper-form">
        <FormLayout />
      </div>
    </AppLayoutStyled>
  );
};

export default AppLayout;
