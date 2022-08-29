/**@jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import { tw } from "@twind";
import Card from "../components/Card.tsx";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  return (
    <div>
      <form action="/api" class={tw`flex justify-center mt-6`}>
        <div class={tw`w-[500px] bg-white p-3 rounded-lg mr-5`}>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={search}
            class={tw`w-full outline-none`}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button
          title="Search"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            fetch(`/api/${search}`, { method: "POST" })
              .then((res) => res.json())
              .then((data) => {
                setResults(data);
                setSearch("");
              });
          }}
        />
      </form>
      {        
         results.name!==undefined && (
        <Card
            avatar_url={results.avatar_url}
            name={results.name}
            company={results.company}
            location={results.location}
            bio={results.bio}
            public_repos={results.public_repos}
            followers={results.followers}
            following={results.following}
        />
         )
      }
    </div>
  );
}
