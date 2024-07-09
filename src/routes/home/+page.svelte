<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import * as Card from "$lib/components/ui/card/index.js";

  import logo from "$lib/images/joe-woods-4Zaq5xY5M_c-unsplash(1).jpg"
  
  import {Navbar ,Dlogs } from "$lib/navbar/navbar";

</script>

<div class="flex min-h-screen w-full flex-col">
  <Navbar nav_status="Dashboard"/> 
  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Dlogs/>
      <Card.Root>
        <Card.Header class="mb-5">
          <Card.Title class="text-center">User</Card.Title>
        </Card.Header>
        <Card.Content class="grid gap-8">
          <div class=" flex flex-col items-center gap-4">
            <Avatar.Root class="hidden h-[30vh] w-[30vh] sm:flex">
              <Avatar.Image src={logo} alt="Avatar" />
              <Avatar.Fallback class='text-6xl'>SD</Avatar.Fallback>
            </Avatar.Root>
            <div class="grid gap-3 mt-5 ">
              <p class="text-2xl font-medium leading-none ">Sofia Davis</p>
              <p class="text-2xl text-muted-foreground">sofia.davis@email.com</p>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </main>
</div>
