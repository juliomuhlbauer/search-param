/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type TagsInputVariant = {
  size: "md"
}

type TagsInputVariantMap = {
  [key in keyof TagsInputVariant]: Array<TagsInputVariant[key]>
}

export type TagsInputVariantProps = {
  [key in keyof TagsInputVariant]?: ConditionalValue<TagsInputVariant[key]>
}

interface TagsInputRecipe {
  __type: TagsInputVariantProps
  (props?: TagsInputVariantProps): Pretty<Record<"root" | "label" | "control" | "input" | "clearTrigger" | "tag" | "tagInput" | "tagDeleteTrigger", string>>
  raw: (props?: TagsInputVariantProps) => TagsInputVariantProps
  variantMap: TagsInputVariantMap
  variantKeys: Array<keyof TagsInputVariant>
  splitVariantProps<Props extends TagsInputVariantProps>(props: Props): [TagsInputVariantProps, Pretty<DistributiveOmit<Props, keyof TagsInputVariantProps>>]
}


export declare const tagsInput: TagsInputRecipe