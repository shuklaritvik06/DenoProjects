import { IS_BROWSER } from "https://deno.land/x/fresh@1.0.2/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
};
if (IS_BROWSER) setup(config);
