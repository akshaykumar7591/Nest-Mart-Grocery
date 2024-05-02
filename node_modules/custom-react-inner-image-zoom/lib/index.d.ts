import { ImgHTMLAttributes, Component, ElementType } from 'react';

export interface InnerImageZoomProps {
  moveType?: 'pan' | 'drag' | undefined;
  zoomType?: 'click' | 'hover' | undefined;
  src: string;
  sources?:
    | Array<{ srcSet?: string | undefined; media?: string | undefined }>
    | undefined;
  width?: number | undefined;
  height?: number | undefined;
  hasSpacer?: boolean | undefined;
  imgAttributes?: ImgHTMLAttributes<HTMLImageElement> & {priority?: boolean, quality?: number} | undefined;
  zoomSrc?: string | undefined;
  zoomScale?: number | undefined;
  zoomPreload?: boolean | undefined;
  fadeDuration?: number | undefined;
  fullscreenOnMobile?: boolean | undefined;
  mobileBreakpoint?: number | undefined;
  hideCloseButton?: boolean | undefined;
  hideHint?: boolean | undefined;
  className?: string | undefined;
  afterZoomIn?: (() => void) | undefined;
  afterZoomOut?: (() => void) | undefined;
  imgComponent?: ElementType,
  zoomImgComponent?: ElementType,
}

export class InnerImageZoom extends Component<InnerImageZoomProps> {
}

export default InnerImageZoom;
