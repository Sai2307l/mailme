<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    
    import {Navbar,Logs} from "$lib/navbar/navbar";
  </script>
  
  <div class="flex min-h-screen w-full flex-col">
    <Navbar nav_status="Logs"/>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:gap-16 lg:grid-cols-20 xl:grid-cols-25">
        <Logs/>
      </div>
    </main>
  </div>
  