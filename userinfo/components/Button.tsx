/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Button(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class={tw`px-5 py-2 text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 rounded-md`}
    >{props.title}</button>
  );
}
