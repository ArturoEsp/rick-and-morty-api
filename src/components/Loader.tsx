import styled from "@emotion/styled";

const LoaderStyled = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  white-space: pre;
  font-size: 30px;
  opacity: 0.6;
  color: #fff;
  &:before {
    content: "Loading...";
    animation: l34 1s infinite alternate;
  }

  @keyframes l34 {
    0%,
    15%,
    75%,
    100% {
      content: "Loading...";
    }
    20% {
      content: "Loading...";
    }
    25% {
      content: "Lo ding...";
    }
    30% {
      content: "Load ng...";
    }
    35% {
      content: " oading...";
    }
    40% {
      content: "L ading...";
    }
    45% {
      content: "Loadin ...";
    }
    50% {
      content: "Loa ing...";
    }
    55% {
      content: "Loading  .";
    }
    60% {
      content: " oa ing...";
    }
    65% {
      content: "L ading...";
    }
    70% {
      content: "Load n ...";
    }
  }
`;

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="loader"></div>
    </LoaderStyled>
  );
};

export default Loader;
