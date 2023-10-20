/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type DialogVariant = {
  
}

type DialogVariantMap = {
  [key in keyof DialogVariant]: Array<DialogVariant[key]>
}

export type DialogVariantProps = {
  [key in keyof DialogVariant]?: ConditionalValue<DialogVariant[key]>
}

interface DialogRecipe {
  __type: DialogVariantProps
  (props?: DialogVariantProps): Pretty<Record<"trigger" | "backdrop" | "container" | "content" | "title" | "description" | "closeTrigger", string>>
  raw: (props?: DialogVariantProps) => DialogVariantProps
  variantMap: DialogVariantMap
  variantKeys: Array<keyof DialogVariant>
  splitVariantProps<Props extends DialogVariantProps>(props: Props): [DialogVariantProps, Pretty<DistributiveOmit<Props, keyof DialogVariantProps>>]
}


export declare const dialog: DialogRecipe