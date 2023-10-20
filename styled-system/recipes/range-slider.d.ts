/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type RangeSliderVariant = {
  size: "md"
}

type RangeSliderVariantMap = {
  [key in keyof RangeSliderVariant]: Array<RangeSliderVariant[key]>
}

export type RangeSliderVariantProps = {
  [key in keyof RangeSliderVariant]?: ConditionalValue<RangeSliderVariant[key]>
}

interface RangeSliderRecipe {
  __type: RangeSliderVariantProps
  (props?: RangeSliderVariantProps): Pretty<Record<"root" | "label" | "thumb" | "output" | "track" | "range" | "control" | "markerGroup" | "marker", string>>
  raw: (props?: RangeSliderVariantProps) => RangeSliderVariantProps
  variantMap: RangeSliderVariantMap
  variantKeys: Array<keyof RangeSliderVariant>
  splitVariantProps<Props extends RangeSliderVariantProps>(props: Props): [RangeSliderVariantProps, Pretty<DistributiveOmit<Props, keyof RangeSliderVariantProps>>]
}


export declare const rangeSlider: RangeSliderRecipe