import { Nunito_Sans } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";
import StyledComponentsRegistry from "@/lib/registry";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "900"],
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
