export interface WeatherIconType {
  icon: JSX.Element;
}
export interface FlagIconType {
  abbreviation: string;
  name: string
}

export interface FontAwesomeType {
  title: string;
  data: string[];
}

export interface IconsBodyProps {
  title: string;
  iconType: string[];
  parentCallback: (tag: string) => void;
}

export interface IcoIconType {
  title: string;
  icons: string[];
}

interface IconItem {
  feathericon?: string;
  icon?: string;
}
export interface IconMarkUpProps {
  icon: IconItem;
  iconTag: { iconTag: string; };
  iconFClass: { iconFClass: string; };
}

export interface GetIconTagType {
  getIconTag: (tag: string) => void
}

export interface AbbreviationIconType {
  getIconTag: (tag: { abbreviation: string }) => void
}