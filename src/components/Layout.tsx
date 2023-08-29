import { Header } from "./Header";

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div>
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
    </div>
  );
}
