import styled from "@emotion/styled";

type Props = {
  image: string;
  name: string;
  type: string;
  location: string;
};

const CharacterCardStyled = styled.div`
  width: 280px;

  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 1fr;
  position: relative;
  & .info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    height: 100%;
    grid-row: 2;
    padding: 64px 32px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    & .name {
      font-size: 18px;
    }
    & .type {
      font-size: 12px;
    }
    & .location {
      font-size: 16px;
    }
  }
`;

const ImageCharacterStyled = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  border: 4px solid #fff;
  & img {
    width: 100%;
  }
`;

const CharacterCard = (props: Props) => {
  return (
    <CharacterCardStyled>
      <ImageCharacterStyled>
        <img src={props.image} alt="example" />
      </ImageCharacterStyled>
      <div className="info">
        <strong className="name">{props.name}</strong>
        <span className="type">{props.type}</span>
        <span className="location">{props.location}</span>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
