/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type RatingGroupVariant = {
  size: "sm" | "md" | "lg"
}

type RatingGroupVariantMap = {
  [key in keyof RatingGroupVariant]: Array<RatingGroupVariant[key]>
}

export type RatingGroupVariantProps = {
  [key in keyof RatingGroupVariant]?: ConditionalValue<RatingGroupVariant[key]>
}

interface RatingGroupRecipe {
  __type: RatingGroupVariantProps
  (props?: RatingGroupVariantProps): Pretty<Record<"root" | "label" | "rating" | "control", string>>
  raw: (props?: RatingGroupVariantProps) => RatingGroupVariantProps
  variantMap: RatingGroupVariantMap
  variantKeys: Array<keyof RatingGroupVariant>
  splitVariantProps<Props extends RatingGroupVariantProps>(props: Props): [RatingGroupVariantProps, Pretty<DistributiveOmit<Props, keyof RatingGroupVariantProps>>]
}


export declare const ratingGroup: RatingGroupRecipe