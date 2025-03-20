import { greenwoodPluginRendererLit } from '@greenwood/plugin-renderer-lit'

/** @type {import('@greenwood/cli').Config} */
export default {
  prerender: true,
  plugins: [
    greenwoodPluginRendererLit()
  ],
}