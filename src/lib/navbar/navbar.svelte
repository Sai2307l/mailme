<script lang="ts">
    import CircleUser from "lucide-svelte/icons/circle-user";
    import Menu from "lucide-svelte/icons/menu";
    import Search from "lucide-svelte/icons/search";
  
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import { cn } from "$lib/utils"

   let {nav_status = "Dashboard"} = $props();
</script>
<!-- "transition-colors hover:text-foreground" + nav_status==="Dashboard"?"text-foreground":"text-muted-foreground" -->
<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <a href="/about" class="flex items-center text-lg font-semibold md:text-base">
        <span class="font-dosis text-2xl text-red-700">M</span>AIL.<span class="font-dosis text-2xl text-red-700">M</span>E
      </a>
      <a href="/home" class={cn("transition-colors hover:text-foreground",nav_status==="Dashboard"?"text-foreground":"text-muted-foreground")} >
        Dashboard
      </a>
      <a href="/mailer" class={cn("transition-colors hover:text-foreground",nav_status==="Mailer"?"text-foreground":"text-muted-foreground")} >
       Mailer
      </a>
      <a href="/layouts" class={cn("transition-colors hover:text-foreground",nav_status==="Layouts"?"text-foreground":"text-muted-foreground")}>
        Layouts
      </a>
      <a href="/logs" class={cn("transition-colors hover:text-foreground",nav_status==="Logs"?"text-foreground":"text-muted-foreground")}>
        Logs
      </a>
      <a href="/settings" class={cn("transition-colors hover:text-foreground",nav_status==="Settings"?"text-foreground":"text-muted-foreground")} >
        Settings
      </a>
      <a href="/about" class={cn("transition-colors hover:text-foreground",nav_status==="About"?"text-foreground":"text-muted-foreground")} >
        About
      </a>
    </nav>
    <Sheet.Root>
      <Sheet.Trigger asChild let:builder>
        <Button
          variant="outline"
          size="icon"
          class="shrink-0 md:hidden"
          builders={[builder]}
        >
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </Sheet.Trigger>
      <!-- "hover:text-foreground" + nav_status==="Dashboard"?"":"text-muted-foreground" -->
      <Sheet.Content side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="/about" class="flex items-center  text-lg font-semibold">
            <span class="font-dosis text-2xl text-red-700">M</span>AIL.<span class="font-dosis text-2xl text-red-700">M</span>E
          </a>
          <a href="/home" class={cn("hover:text-foreground",nav_status==="Dashboard"?"":"text-muted-foreground")} > Dashboard </a>
          <a href="/mailer" class={cn("hover:text-foreground",nav_status==="Mailer"?"":"text-muted-foreground")} > Mailer </a>
          <a href="/layouts" class={cn("hover:text-foreground",nav_status==="Layouts"?"":"text-muted-foreground")} > Layouts </a>
          <a href="/logs" class={cn("hover:text-foreground",nav_status==="Logs"?"":"text-muted-foreground")} > Logs </a>
          <a href="/settings" class={cn("hover:text-foreground",nav_status==="Settings"?"":"text-muted-foreground")} > Settings </a>
          <a href="/about" class={cn("hover:text-foreground",nav_status==="About"?"":"text-muted-foreground")}> About</a>
        </nav>
      </Sheet.Content>
    </Sheet.Root>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form class="ml-auto flex-1 sm:flex-initial">
        <div class="relative">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </form>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="secondary"
            size="icon"
            class="rounded-full"
          >
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  </header>