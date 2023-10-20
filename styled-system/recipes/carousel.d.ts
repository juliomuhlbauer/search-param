/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type CarouselVariant = {
  size: "sm" | "md"
}

type CarouselVariantMap = {
  [key in keyof CarouselVariant]: Array<CarouselVariant[key]>
}

export type CarouselVariantProps = {
  [key in keyof CarouselVariant]?: ConditionalValue<CarouselVariant[key]>
}

interface CarouselRecipe {
  __type: CarouselVariantProps
  (props?: CarouselVariantProps): Pretty<Record<"root" | "viewport" | "slideGroup" | "slide" | "nextSlideTrigger" | "prevSlideTrigger" | "indicatorGroup" | "indicator" | "control", string>>
  raw: (props?: CarouselVariantProps) => CarouselVariantProps
  variantMap: CarouselVariantMap
  variantKeys: Array<keyof CarouselVariant>
  splitVariantProps<Props extends CarouselVariantProps>(props: Props): [CarouselVariantProps, Pretty<DistributiveOmit<Props, keyof CarouselVariantProps>>]
}


export declare const carousel: CarouselRecipe