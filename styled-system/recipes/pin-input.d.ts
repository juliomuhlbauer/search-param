/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type PinInputVariant = {
  size: "sm" | "md" | "lg" | "xl"
}

type PinInputVariantMap = {
  [key in keyof PinInputVariant]: Array<PinInputVariant[key]>
}

export type PinInputVariantProps = {
  [key in keyof PinInputVariant]?: ConditionalValue<PinInputVariant[key]>
}

interface PinInputRecipe {
  __type: PinInputVariantProps
  (props?: PinInputVariantProps): Pretty<Record<"root" | "label" | "input" | "control", string>>
  raw: (props?: PinInputVariantProps) => PinInputVariantProps
  variantMap: PinInputVariantMap
  variantKeys: Array<keyof PinInputVariant>
  splitVariantProps<Props extends PinInputVariantProps>(props: Props): [PinInputVariantProps, Pretty<DistributiveOmit<Props, keyof PinInputVariantProps>>]
}


export declare const pinInput: PinInputRecipe