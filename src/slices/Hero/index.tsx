import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import * as S from "./Hero.styles";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const Hero = ({ slice }) => {
  return (
    <Bounded as="section" collapsible={false}>
      <S.Container>
        <S.TextContainer>
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => <Heading>{children}</Heading>,
              paragraph: ({ children }) => <p>{children}</p>,
            }}
          />

          {prismic.isFilled.link(slice.primary.buttonLink) &&
            prismic.isFilled.keyText(slice.primary.buttonText) && (
              <PrismicNextLink field={slice.primary.buttonLink}>
                {slice.primary.buttonText}
              </PrismicNextLink>
            )}
        </S.TextContainer>
        {prismic.isFilled.image(slice.primary.image) && (
          <S.ImageContainer>
            <PrismicNextImage field={slice.primary.image} sizes="10w" />
          </S.ImageContainer>
        )}
      </S.Container>
    </Bounded>
  );
};

export default Hero;
