/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type IconVariant = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

type IconVariantMap = {
  [key in keyof IconVariant]: Array<IconVariant[key]>
}

export type IconVariantProps = {
  [key in keyof IconVariant]?: ConditionalValue<IconVariant[key]>
}

interface IconRecipe {
  __type: IconVariantProps
  (props?: IconVariantProps): string
  raw: (props?: IconVariantProps) => IconVariantProps
  variantMap: IconVariantMap
  variantKeys: Array<keyof IconVariant>
  splitVariantProps<Props extends IconVariantProps>(props: Props): [IconVariantProps, Pretty<DistributiveOmit<Props, keyof IconVariantProps>>]
}


export declare const icon: IconRecipe