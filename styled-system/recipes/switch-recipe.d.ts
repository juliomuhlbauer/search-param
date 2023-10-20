/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type SwitchRecipeVariant = {
  size: "sm" | "md" | "lg"
}

type SwitchRecipeVariantMap = {
  [key in keyof SwitchRecipeVariant]: Array<SwitchRecipeVariant[key]>
}

export type SwitchRecipeVariantProps = {
  [key in keyof SwitchRecipeVariant]?: ConditionalValue<SwitchRecipeVariant[key]>
}

interface SwitchRecipeRecipe {
  __type: SwitchRecipeVariantProps
  (props?: SwitchRecipeVariantProps): Pretty<Record<"root" | "label" | "control" | "thumb", string>>
  raw: (props?: SwitchRecipeVariantProps) => SwitchRecipeVariantProps
  variantMap: SwitchRecipeVariantMap
  variantKeys: Array<keyof SwitchRecipeVariant>
  splitVariantProps<Props extends SwitchRecipeVariantProps>(props: Props): [SwitchRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchRecipeVariantProps>>]
}


export declare const switchRecipe: SwitchRecipeRecipe