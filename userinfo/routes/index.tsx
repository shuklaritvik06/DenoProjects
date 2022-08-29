/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navbar from "../components/Navbar.tsx";
import SearchBar from "../islands/SearchUser.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 bg-[#333] h-[100vh] w-[100vw]`}>
      <Navbar />
      <SearchBar />
    </div>
  );
}
