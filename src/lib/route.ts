import { getTranslatedkey } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export const navigation = [
  { label: "nav.home", href: "" },
  {
    label: "nav.categories",
    children: [
      { label: "nav.phones", href: `/phones` },
      { label: "nav.computers", href: `/computers` },
      { label: "nav.accessories", href: `/accessories` },
    ],
  },
  {
    label: "nav.cart",
    href: "/cart",
  },
  {
    label: "nav.about",
    children: [
      { label: "nav.about_us", href: `/about/about-us` },
      { label: "nav.shipping_info", href: `/about/shipping` },
      { label: "nav.returns", href: `/about/returns` },
    ],
  },
  { href: `/contact/`, label: "nav.contact" },
];

interface RouteType {
  href?: string;
  label: string;
  children?: RouteType[];
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string
): RouteType[] {
  return paths.map((path) => {
    if (path.href || path.href === "") {
      return {
        label: getTranslatedkey(path.label, locale),
        href: getRelativeLocaleUrl(locale, path.href),
      };
    }

    if (path.children) {
      return {
        label: getTranslatedkey(path.label, locale),
        children: getLocalizedRoutes(path.children, locale),
      };
    }

    return path;
  });
}
