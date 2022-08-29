import {Handlers} from "$fresh/server.ts"
export const handler: Handlers = {
    GET(): Response{
        const users = [{name: "John Doe"}, {name: "Jane Doe"}];
        return new Response(JSON.stringify(users));
    }
}