/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type EditableVariant = {
  
}

type EditableVariantMap = {
  [key in keyof EditableVariant]: Array<EditableVariant[key]>
}

export type EditableVariantProps = {
  [key in keyof EditableVariant]?: ConditionalValue<EditableVariant[key]>
}

interface EditableRecipe {
  __type: EditableVariantProps
  (props?: EditableVariantProps): Pretty<Record<"root" | "area" | "label" | "preview" | "input" | "editTrigger" | "submitTrigger" | "cancelTrigger" | "control", string>>
  raw: (props?: EditableVariantProps) => EditableVariantProps
  variantMap: EditableVariantMap
  variantKeys: Array<keyof EditableVariant>
  splitVariantProps<Props extends EditableVariantProps>(props: Props): [EditableVariantProps, Pretty<DistributiveOmit<Props, keyof EditableVariantProps>>]
}


export declare const editable: EditableRecipe