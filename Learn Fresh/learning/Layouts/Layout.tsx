/** @jsx h */
import {h} from "preact";

export default function Layout({children}) {
  return (
    <div>
        <nav>
            <a href="/">Home</a>
            <a href="/users">Users</a>
        </nav>
        {children}
    </div>
  );
}
