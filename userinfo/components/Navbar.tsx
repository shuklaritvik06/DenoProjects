/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import  Button from "./Button.tsx";
function Navbar() {
  return (
    <div>
        <nav class={tw`flex justify-between p-3 rounded-md bg-white max-w-7xl mx-auto`}>
            <ul class={tw`flex items-center`}>
                <li class={tw`mr-5`}><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <Button title="Check" />
        </nav>
    </div>
  )
}

export default Navbar