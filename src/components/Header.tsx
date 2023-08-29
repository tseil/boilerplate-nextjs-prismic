import * as prismic from "@prismicio/client";
import * as S from "./Header.styles";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { linkResolver } from "@/lib/linkResolver";

const localeLabels = {
  "en-us": "EN",
  "fr-fr": "FR",
};

export function Header({ locales = [], navigation, settings }) {
  return (
    <Bounded as="header">
      <S.Container>
        <PrismicNextLink href="/">
          {prismic.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )}
        </PrismicNextLink>
        <S.Navigation>
          <S.ListContainer>
            {navigation.data?.links.map((item) => (
              <S.ListItem key={prismic.asText(item.label)}>
                <S.Link field={item.link} linkResolver={linkResolver}>
                  <PrismicText field={item.label} />
                </S.Link>
              </S.ListItem>
            ))}
          </S.ListContainer>
          <S.LocaleContainer>
            <span aria-hidden={true}>🌐</span>
            <S.ListContainer>
              {locales.map((locale) => (
                <S.ListItem key={locale.lang}>
                  <S.Link
                    href={`/${locale.lang.substr(0, 2)}/${locale.uid}`}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {localeLabels[locale.lang] || locale.lang}
                  </S.Link>
                </S.ListItem>
              ))}
            </S.ListContainer>
          </S.LocaleContainer>
        </S.Navigation>
      </S.Container>
    </Bounded>
  );
}
