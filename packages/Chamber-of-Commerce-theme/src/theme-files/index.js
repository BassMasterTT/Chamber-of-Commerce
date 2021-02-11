import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
  return (
    <>
      <h1>Frontity Workshop</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/page/2">More Posts</Link>
        <Link href="/lorem-ipsum">Lorem Ipsum</Link>
      </nav>
      <hr />
      <main>
          {data.isArchive && <div>This is a list</div>}
          {data.isPost && <div>This is a post</div>}
          {data.isPage && <div>This is a page</div>}
      </main>
    </>
  );
};

export default connect(Root);
