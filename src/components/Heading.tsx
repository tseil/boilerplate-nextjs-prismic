import * as S from "./Heading.styles";

export function Heading({ as: Comp = "h1", children }) {
  return <S.Comp as={Comp}>{children}</S.Comp>;
}
