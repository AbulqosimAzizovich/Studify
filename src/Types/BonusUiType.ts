export interface BasicTimelineType {
    class: string;
    date: string;
    time: string;
    title: string;
    text: string;
}

export interface HoverMeetupType {
    id: number;
    image: string;
    name: string;
    number: string;
  }
  
  interface TimelineItem {
    id: number;
    colClass: string;
    color: string;
    date: string;
    header: string;
    paragraph: string;
    verticalLine1?: string;
    verticalLine2?: string;
  }
  
export interface HorizontalTimelineType {
    id: number;
    mainClass: string;
    child: TimelineItem[];
  }

export interface CarouselTimelineType {
    id: number;
    image: string;
}
export interface PaginationType {
    id: string
    text: string | JSX.Element;
}

export interface DefaultPaginationListProp {
    pageClass?: string
}

export interface OwlCarouselItem {
  id: number;
  image: string;
  captionHeader?: string;
  captionText?: string;
  interval?: string;
}

export interface RibbonType {
  classMain: string;
  ribbonClass: string;
  ribbonText: string | JSX.Element;
  subText: string | JSX.Element;
}

export interface CarouselItemData extends OwlCarouselItem {
  'data-interval': number;
}

export interface GoToIndexProp {
  (newIndex: number): void;
}

export interface TourDataType {
    link: string
    icon: string
}

export interface ProfileLikeType {
    class: string;
    icon: string;
    text: string;
}

export interface CommonProfileHeadProps {
    month: string;
    time: string;
    activeTime: string
}

export interface SocialMediaProp {
    className?: string;
}

export interface RatingChangeType {
    newRating: number
}

export interface BadgeScrollType {
  text: string;
  class: string;
  badge: string;
}

export interface ProfileListType {
  image: string;
  text: string;
}

export interface ToastType {
  id: number;
  iconColor: string;
  header: string;
  time: string;
  timeColor?: string;
  text: string;
}

export interface ToastPlacementType {
  value: string;
  label: string;
};

export interface UniqueToastContentProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export interface ToastPlacementContentProp {
  selectedPosition: string;
}

export interface ArrowIconProps {
  isOpen: boolean;
  className?: string
}

export interface CheckBoxIconProps {
  variant: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}
