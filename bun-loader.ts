import { plugin } from "bun";
import tsc from 'typescript';

plugin({
  name: "custom greenwood loader",
  setup(build) {
    const filter = /simple-greeting\.ts$/

    build.onLoad({ filter }, async (args) => {
      console.log('onLoad', { args });
      const file = Bun.file(args.path);
      const text = await file.text();
      const contents = tsc.transpileModule(text, {}).outputText

      return {
        contents,
        loader: "js",
      };
    });
  },
});