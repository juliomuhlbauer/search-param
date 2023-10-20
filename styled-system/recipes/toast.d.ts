/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type ToastVariant = {
  
}

type ToastVariantMap = {
  [key in keyof ToastVariant]: Array<ToastVariant[key]>
}

export type ToastVariantProps = {
  [key in keyof ToastVariant]?: ConditionalValue<ToastVariant[key]>
}

interface ToastRecipe {
  __type: ToastVariantProps
  (props?: ToastVariantProps): Pretty<Record<"group" | "root" | "title" | "description" | "closeTrigger", string>>
  raw: (props?: ToastVariantProps) => ToastVariantProps
  variantMap: ToastVariantMap
  variantKeys: Array<keyof ToastVariant>
  splitVariantProps<Props extends ToastVariantProps>(props: Props): [ToastVariantProps, Pretty<DistributiveOmit<Props, keyof ToastVariantProps>>]
}


export declare const toast: ToastRecipe