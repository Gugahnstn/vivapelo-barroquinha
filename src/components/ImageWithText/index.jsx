import * as S from './style'

const ImageWithText = ({title, phrase, image}) => {
  return (
    <>
      <S.Image src={image}/>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Phrase>{phrase}</S.Phrase>
      </S.Info>
    </>
  );
};

export default ImageWithText;