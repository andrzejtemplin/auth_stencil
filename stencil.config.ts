import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "mycomponent",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      baseUrl: "http://localhost:3000/",
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  copy: [
    { src: 'global' }
  ]
};
