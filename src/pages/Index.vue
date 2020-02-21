<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
      class="posts"
    >
      <g-link :to="edge.node.path">{{ edge.node.path }}</g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
