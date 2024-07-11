<script lang="ts">
    
    import {Navbar , Input , Preview , Template } from "$lib/navbar/navbar";
  
  </script>
  
  <div class="flex min-h-screen w-full flex-col">
    <Navbar nav_status="Dashboard"/> 
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <Template />
        <Input/>
        <Preview/>
      </div>
    </main>
  </div>
  