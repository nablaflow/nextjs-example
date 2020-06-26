import Head from "next/head";
import { getPosts, getSinglePost } from "./api/posts";

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  return { props: { post: post } };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((p) => {
    return {
      params: {
        slug: p.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default function PostPage(props) {
  // Render post title and content in the page from props
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
  );
}
