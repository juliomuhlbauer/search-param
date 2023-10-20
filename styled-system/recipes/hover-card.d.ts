/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type HoverCardVariant = {
  
}

type HoverCardVariantMap = {
  [key in keyof HoverCardVariant]: Array<HoverCardVariant[key]>
}

export type HoverCardVariantProps = {
  [key in keyof HoverCardVariant]?: ConditionalValue<HoverCardVariant[key]>
}

interface HoverCardRecipe {
  __type: HoverCardVariantProps
  (props?: HoverCardVariantProps): Pretty<Record<"arrow" | "arrowTip" | "trigger" | "positioner" | "content", string>>
  raw: (props?: HoverCardVariantProps) => HoverCardVariantProps
  variantMap: HoverCardVariantMap
  variantKeys: Array<keyof HoverCardVariant>
  splitVariantProps<Props extends HoverCardVariantProps>(props: Props): [HoverCardVariantProps, Pretty<DistributiveOmit<Props, keyof HoverCardVariantProps>>]
}


export declare const hoverCard: HoverCardRecipe