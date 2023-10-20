/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type DrawerVariant = {
  placement: "left" | "right"
}

type DrawerVariantMap = {
  [key in keyof DrawerVariant]: Array<DrawerVariant[key]>
}

export type DrawerVariantProps = {
  [key in keyof DrawerVariant]?: ConditionalValue<DrawerVariant[key]>
}

interface DrawerRecipe {
  __type: DrawerVariantProps
  (props?: DrawerVariantProps): Pretty<Record<"trigger" | "backdrop" | "container" | "content" | "title" | "description" | "closeTrigger", string>>
  raw: (props?: DrawerVariantProps) => DrawerVariantProps
  variantMap: DrawerVariantMap
  variantKeys: Array<keyof DrawerVariant>
  splitVariantProps<Props extends DrawerVariantProps>(props: Props): [DrawerVariantProps, Pretty<DistributiveOmit<Props, keyof DrawerVariantProps>>]
}


export declare const drawer: DrawerRecipe