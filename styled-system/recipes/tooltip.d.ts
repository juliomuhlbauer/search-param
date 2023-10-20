/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type TooltipVariant = {
  
}

type TooltipVariantMap = {
  [key in keyof TooltipVariant]: Array<TooltipVariant[key]>
}

export type TooltipVariantProps = {
  [key in keyof TooltipVariant]?: ConditionalValue<TooltipVariant[key]>
}

interface TooltipRecipe {
  __type: TooltipVariantProps
  (props?: TooltipVariantProps): Pretty<Record<"trigger" | "arrow" | "arrowTip" | "positioner" | "content", string>>
  raw: (props?: TooltipVariantProps) => TooltipVariantProps
  variantMap: TooltipVariantMap
  variantKeys: Array<keyof TooltipVariant>
  splitVariantProps<Props extends TooltipVariantProps>(props: Props): [TooltipVariantProps, Pretty<DistributiveOmit<Props, keyof TooltipVariantProps>>]
}


export declare const tooltip: TooltipRecipe