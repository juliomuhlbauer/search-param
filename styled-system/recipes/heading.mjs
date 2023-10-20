import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const headingFn = createRecipe('heading', {}, [])

const headingVariantMap = {}
const headingVariantKeys = Object.keys(headingVariantMap)
export const heading = Object.assign(headingFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: headingVariantKeys,
  variantMap: headingVariantMap,
  splitVariantProps(props) {
    return splitProps(props, headingVariantKeys)
  },
})