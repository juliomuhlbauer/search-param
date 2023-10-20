/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type ArticleVariant = {
  size: "sm" | "md" | "lg"
}

type ArticleVariantMap = {
  [key in keyof ArticleVariant]: Array<ArticleVariant[key]>
}

export type ArticleVariantProps = {
  [key in keyof ArticleVariant]?: ConditionalValue<ArticleVariant[key]>
}

interface ArticleRecipe {
  __type: ArticleVariantProps
  (props?: ArticleVariantProps): string
  raw: (props?: ArticleVariantProps) => ArticleVariantProps
  variantMap: ArticleVariantMap
  variantKeys: Array<keyof ArticleVariant>
  splitVariantProps<Props extends ArticleVariantProps>(props: Props): [ArticleVariantProps, Pretty<DistributiveOmit<Props, keyof ArticleVariantProps>>]
}


export declare const article: ArticleRecipe