/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type RadioButtonGroupVariant = {
  variant: "solid" | "outline"
size: "sm" | "md" | "lg" | "xl"
}

type RadioButtonGroupVariantMap = {
  [key in keyof RadioButtonGroupVariant]: Array<RadioButtonGroupVariant[key]>
}

export type RadioButtonGroupVariantProps = {
  [key in keyof RadioButtonGroupVariant]?: ConditionalValue<RadioButtonGroupVariant[key]>
}

interface RadioButtonGroupRecipe {
  __type: RadioButtonGroupVariantProps
  (props?: RadioButtonGroupVariantProps): Pretty<Record<"root" | "label" | "radio" | "radioLabel" | "radioControl" | "indicator", string>>
  raw: (props?: RadioButtonGroupVariantProps) => RadioButtonGroupVariantProps
  variantMap: RadioButtonGroupVariantMap
  variantKeys: Array<keyof RadioButtonGroupVariant>
  splitVariantProps<Props extends RadioButtonGroupVariantProps>(props: Props): [RadioButtonGroupVariantProps, Pretty<DistributiveOmit<Props, keyof RadioButtonGroupVariantProps>>]
}


export declare const radioButtonGroup: RadioButtonGroupRecipe