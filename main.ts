import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://ib.anonymismus.tk/ps/irsm3p", // Replace this with your actual link
    },
  });
});
