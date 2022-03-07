// Deno allows top level await

// Read from file

// As we know deno is secure so it will not read the file till we give --allow-read flag to the command

const decoder  = new TextDecoder('utf-8');
const data = await Deno.readFile('./file.txt');
console.log(decoder.decode(data));

// OR Use Deno.readTextFile()

// Write to file

// As we know deno is secure so it will not read the file till we give --allow-write flag to the command

const encoder = new TextEncoder();
const text = encoder.encode('Hello world!');
await Deno.writeFile('file.txt',text);

// OR Use Deno.writeTextFile()

// Rename and Remove files

await Deno.rename('fileName1','finalName');
await Deno.remove('fileName');

// Delete directory

await Deno.remove('Directory', { recursive: true });   // If not empty
await Deno.remove('Directory');

// Fetch Api  

// In Deno whenever we need to access a net we have to give --allow-net flag

const res = await fetch('https://pokeapi.co/api/v2/');
const json = await res.json();
console.log(json);


// Tried modules like http, uuid,dotenv and more

import {readJson,writeJson} from "https://deno.land/std@0.128.0/fs/mod.ts";
const data = await readJson('jsonfile');
console.log(data);   // have to pass --unstable in the command
