import * as S from "./Bounded.styles";

export function Bounded({ as: Comp = "div", collapsible = true, children }) {
  return (
    <S.Bounded as={Comp} data-collapsible={collapsible}>
      <S.Children>{children}</S.Children>
    </S.Bounded>
  );
}
