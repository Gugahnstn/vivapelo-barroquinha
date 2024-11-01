import * as S from './style'

const Text = ({textone, texttwo}) => {
  return(
    <>
      <S.Title>{textone}</S.Title>
      <S.Phrase>{texttwo}</S.Phrase>
    </>
  )
}

export default Text;