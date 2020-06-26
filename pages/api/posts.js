import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://nablaflow-ghost.herokuapp.com",
  key: "9d93bd28ffa365aa206748f057",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
