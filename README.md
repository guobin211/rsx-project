# RSX-PROJECT

## The Rust SSR Web Framework

```sveltehtml
<script lang="rust">
use rsx::server::{ Request, Response, fetch };

pub async fn get_server_side_props(request: Request) -> Response {
  let id = request.query.get("id");
  let result = fetch({ url: '/api/find_by_id', body: { id } }).await?;
  Response::json({
    props: {
      name: result
    }
  })
}
</script>

<script lang="ts">
import { onMount } from 'rsx/runtime';

export let props: { book_name: string };
let book_content = '';

onMount(() => {
  fetch(`/api/${props.name}`)
    .then((res) => res.text())
    .then((data) => {
      book_content = data;
    });
});
</script>

<template>
  <div class="name">{{ props.book_name }}</div>
  <div class="name">{{ book_content }}</div>
</template>

<style>
.name {
  font-size: 18px;
}
</style>
```
