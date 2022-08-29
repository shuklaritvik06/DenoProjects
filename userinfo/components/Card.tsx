/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
function Card(props) {
  return (
    <div>
      <div class={tw`bg-white max-w-[600px] mx-auto mt-10 h-[300px] rounded-lg flex flex-col md:flex-row p-4 justify-center md:items-center`}>
        <div>
          <img
            src={props.avatar_url}
            alt="Card-img"
            class={tw`rounded-full h-36 mr-4`}
          />
        </div>
        <div>
            <h1 class={tw`text-2xl font-bold`}>{props.name}</h1>
            <h2 class={tw`text-xl`}>{props.company}</h2>
            <h3 class={tw`text-base`}>{props.location}</h3>
            <p class={tw`text-base`}>{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
