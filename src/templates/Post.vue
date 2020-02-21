<template>
  <Layout>
    <div class="rich-text" v-html="$page.post.content" />
  </Layout>
</template>
<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image
  }
}
</page-query>
<script>
export default {}
</script>

<style></style>
