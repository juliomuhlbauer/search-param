/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type ToggleGroupVariant = {
  variant: "outline" | "ghost"
size: "sm" | "md" | "lg"
}

type ToggleGroupVariantMap = {
  [key in keyof ToggleGroupVariant]: Array<ToggleGroupVariant[key]>
}

export type ToggleGroupVariantProps = {
  [key in keyof ToggleGroupVariant]?: ConditionalValue<ToggleGroupVariant[key]>
}

interface ToggleGroupRecipe {
  __type: ToggleGroupVariantProps
  (props?: ToggleGroupVariantProps): Pretty<Record<"root" | "toggle", string>>
  raw: (props?: ToggleGroupVariantProps) => ToggleGroupVariantProps
  variantMap: ToggleGroupVariantMap
  variantKeys: Array<keyof ToggleGroupVariant>
  splitVariantProps<Props extends ToggleGroupVariantProps>(props: Props): [ToggleGroupVariantProps, Pretty<DistributiveOmit<Props, keyof ToggleGroupVariantProps>>]
}


export declare const toggleGroup: ToggleGroupRecipe