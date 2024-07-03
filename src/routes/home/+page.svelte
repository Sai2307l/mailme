<script lang="ts">

  import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
  import CircleUser from "lucide-svelte/icons/circle-user";
  import Menu from "lucide-svelte/icons/menu";
  import Search from "lucide-svelte/icons/search";


  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import * as Table from "$lib/components/ui/table/index.js";

  import logo from "$lib/images/joe-woods-4Zaq5xY5M_c-unsplash(1).jpg"
</script>

<div class="flex min-h-screen w-full flex-col">
  <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <a href="/about" class="flex items-center text-lg font-semibold md:text-base">
        <span class="font-dosis text-2xl text-red-700">M</span>AIL.<span class="font-dosis text-2xl text-red-700">M</span>E
      </a>
      <a href="/home" class="text-foreground transition-colors hover:text-foreground">
        Dashboard
      </a>
      <a href="/mailer" class="text-muted-foreground transition-colors hover:text-foreground">
       Mailer
      </a>
      <a href="/logs" class="text-muted-foreground transition-colors hover:text-foreground">
        Logs
      </a>
      <a href="/settings" class="text-muted-foreground transition-colors hover:text-foreground">
        Settings
      </a>
      <a href="/about" class="text-muted-foreground transition-colors hover:text-foreground">
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
      <Sheet.Content side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="/about" class="flex items-center  text-lg font-semibold">
            <span class="font-dosis text-2xl text-red-700">M</span>AIL.<span class="font-dosis text-2xl text-red-700">M</span>E
          </a>
          <a href="/home" class="hover:text-foreground"> Dashboard </a>
          <a href="/mailer" class="text-muted-foreground hover:text-foreground"> Mailer </a>
          <a href="/logs" class="text-muted-foreground hover:text-foreground"> Logs </a>
          <a href="/settings" class="text-muted-foreground hover:text-foreground"> Settings </a>
          <a href="/about" class="text-muted-foreground hover:text-foreground"> About Us </a>
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
  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card.Root class="xl:col-span-2">
        <Card.Header class="flex flex-row items-center">
          <div class="grid gap-2">
            <Card.Title>Mail Logs</Card.Title>
            <Card.Description>Recent Mails Sent By You</Card.Description>
          </div>
          <Button href="/logs" size="sm" class="ml-auto gap-1">
            View All
            <ArrowUpRight class="h-4 w-4" />
          </Button>
        </Card.Header>
        <Card.Content>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Customer</Table.Head>
                <Table.Head class="xl:table.-column ">Type</Table.Head>
                <Table.Head class="xl:table.-column ">Status</Table.Head>
                <Table.Head class="xl:table.-column ">Date</Table.Head>
                <Table.Head class="text-right">Mails</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <div class="font-medium">Liam Johnson</div>
                  <div class=" text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </Table.Cell>
                <Table.Cell class="xl:table.-column ">Sale</Table.Cell>
                <Table.Cell class="xl:table.-column ">
                  <Badge class="text-xs" variant="outline">Approved</Badge>
                </Table.Cell>
                <Table.Cell
                  class="md:table.-cell xl:table.-column"
                >
                  2023-06-23
                </Table.Cell>
                <Table.Cell class="text-right">$250.00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div class="font-medium">Olivia Smith</div>
                  <div class=" text-sm text-muted-foreground md:inline">
                    olivia@example.com
                  </div>
                </Table.Cell>
                <Table.Cell class="xl:table.-column ">Refund</Table.Cell>
                <Table.Cell class="xl:table.-column ">
                  <Badge class="text-xs" variant="outline">Declined</Badge>
                </Table.Cell>
                <Table.Cell
                  class="md:table.-cell xl:table.-column  "
                >
                  2023-06-24
                </Table.Cell>
                <Table.Cell class="text-right">$150.00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div class="font-medium">Noah Williams</div>
                  <div class=" text-sm text-muted-foreground md:inline">
                    noah@example.com
                  </div>
                </Table.Cell>
                <Table.Cell class="xl:table.-column ">
                  Subscription
                </Table.Cell>
                <Table.Cell class="xl:table.-column ">
                  <Badge class="text-xs" variant="outline">Approved</Badge>
                </Table.Cell>
                <Table.Cell
                  class="md:table.-cell xl:table.-column  "
                >
                  2023-06-25
                </Table.Cell>
                <Table.Cell class="text-right">$350.00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div class="font-medium">Emma Brown</div>
                  <div class=" text-sm text-muted-foreground md:inline">
                    emma@example.com
                  </div>
                </Table.Cell>
                <Table.Cell class="xl:table.-column ">Sale</Table.Cell>
                <Table.Cell class="xl:table.-column ">
                  <Badge class="text-xs" variant="outline">Approved</Badge>
                </Table.Cell>
                <Table.Cell
                  class="md:table.-cell xl:table.-column  "
                >
                  2023-06-26
                </Table.Cell>
                <Table.Cell class="text-right">$450.00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <div class="font-medium">Liam Johnson</div>
                  <div class=" text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </Table.Cell>
                <Table.Cell class="xl:table.-column ">Sale</Table.Cell>
                <Table.Cell class="xl:table.-column ">
                  <Badge class="text-xs" variant="outline">Approved</Badge>
                </Table.Cell>
                <Table.Cell
                  class="md:table.-cell xl:table.-column  "
                >
                  2023-06-27
                </Table.Cell>
                <Table.Cell class="text-right">$550.00</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card.Content>
      </Card.Root>
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
