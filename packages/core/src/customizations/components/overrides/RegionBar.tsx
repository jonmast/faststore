// This is an example of how it can be used on the starter.

import { SectionOverride } from 'src/typings/overrides'

const SECTION = 'RegionBar' as const

const override: SectionOverride = {
  name: SECTION,
}

export { override }