import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Jamstack Example</title>
      <h1>Jamstack Example</h1>
      <p>
        This page is just a companion to a blog post about{" "}
        <a href="https://andri.dk/blog/2021/deploy-static-websites-anywhere">
          deploying your static site anywhere
        </a>
      </p>
      <section>
        <ul>
          <li>
            <a
              href="http://jamstack-example.andri.dk"
              target="_blank"
              rel="noreferrer"
            >
              AWS S3
            </a>{" "}
            ✔️
          </li>

          <li>
            <a
              href="https://andrioid.github.io/jamstack-example/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            ✔️
          </li>
          <li>
            <a
              href="https://jamstack-example.neocities.org/"
              target="_blank"
              rel="noreferrer"
            >
              Neocities
            </a>{" "}
            ✔️
          </li>
          <li>
            <a
              href="https://jamstack-example-andri.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
            ✔️
          </li>
        </ul>
      </section>
    </main>
  );
};

export default IndexPage;
