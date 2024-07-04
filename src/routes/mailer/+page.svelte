<script lang="ts">
    import Activity from "lucide-svelte/icons/activity";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import CircleUser from "lucide-svelte/icons/circle-user";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import DollarSign from "lucide-svelte/icons/dollar-sign";
    import Menu from "lucide-svelte/icons/menu";
    import Package2 from "lucide-svelte/icons/package-2";
    import Search from "lucide-svelte/icons/search";
    import Users from "lucide-svelte/icons/users";
    import Settings from "lucide-svelte/icons/settings";
    import MoreMessage from "lucide-svelte/icons/message-circle-more";
    import ReplyMessage from "lucide-svelte/icons/message-circle-reply";
    import PlusMessage from "lucide-svelte/icons/message-circle-plus";
    import SquareMessage from "lucide-svelte/icons/message-square-code";
    import Share from "lucide-svelte/icons/share";
    import Paperclip from "lucide-svelte/icons/paperclip";
    import Mic from "lucide-svelte/icons/mic";
    import CornerDownLeft from "lucide-svelte/icons/corner-down-left";
  
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";

  </script>
  
  <div class="flex min-h-screen w-full flex-col">
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <a href="/about" class="flex items-center text-lg font-semibold md:text-base">
          <span class="font-dosis text-2xl text-red-700">M</span>AIL.<span class="font-dosis text-2xl text-red-700">M</span>E
        </a>
        <a href="/home" class="text-muted-foreground transition-colors hover:text-foreground">
          Dashboard
        </a>
        <a href="/mailer" class="text-foreground transition-colors hover:text-foreground">
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
            <a href="/home" class="text-muted-foreground hover:text-foreground"> Dashboard </a>
            <a href="/mailer" class=" hover:text-foreground"> Mailer </a>
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
      <div class="flex flex-col">
        <header
          class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4"
        >
          <h1 class="text-xl font-semibold">Mailer</h1>
          <Drawer.Root>
            <Drawer.Trigger asChild let:builder>
              <Button builders={[builder]} variant="ghost" size="icon" class="md:hidden">
                <Settings class="size-4" />
                <span class="sr-only">Main</span>
              </Button>
            </Drawer.Trigger>
            <Drawer.Content class="max-h-[80vh]">
              <Drawer.Header>
                <Drawer.Title>Configuration</Drawer.Title>
                <Drawer.Description>
                  Configure the settings for the model and messages.
                </Drawer.Description>
              </Drawer.Header>
              <form class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset class="grid gap-6 rounded-lg border p-4">
                  <legend class="-ml-1 px-1 text-sm font-medium"> Mailer </legend>
                  <div class="grid gap-3">
                    <Label for="model">Category</Label>
                    <Select.Root>
                      <Select.Trigger
                        id="model"
                        class="items-start [&_[data-description]]:hidden"
                      >
                        <Select.Value placeholder="Select a model" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value="genesis" label="Neural Genesis">
                          <div
                            class="flex items-start gap-3 text-muted-foreground"
                          >
                            <MoreMessage class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Business
                              </p>
                              <p class="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </Select.Item>
                        <Select.Item value="explorer" label="Neural Explorer">
                          <div
                            class="flex items-start gap-3 text-muted-foreground"
                          >
                            <SquareMessage class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Invitation
                              </p>
                              <p class="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </Select.Item>
                        <Select.Item value="quantum" label="Neural Quantum">
                          <div
                            class="flex items-start gap-3 text-muted-foreground"
                          >
                            <MoreMessage class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Promotion
                              </p>
                              <p class="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </Select.Item>
                        <Select.Item value="quantum" label="Neural Quantum">
                          <div
                            class="flex items-start gap-3 text-muted-foreground"
                          >
                            <PlusMessage class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Job application
                              </p>
                              <p class="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                  <div class="grid gap-3">
                    <Label for="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div class="grid gap-3">
                    <Label for="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div class="grid gap-3">
                    <Label for="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </fieldset>
                <fieldset class="grid gap-6 rounded-lg border p-4">
                  <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
                  <div class="grid gap-3">
                    <Label for="role">Role</Label>
                    <Select.Root selected={{ value: "system", label: "System" }}>
                      <Select.Trigger>
                        <Select.Value placeholder="Select a role" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value="system">System</Select.Item>
                        <Select.Item value="user">User</Select.Item>
                        <Select.Item value="assistant">Assistant</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </div>
                  <div class="grid gap-3">
                    <Label for="content">Content</Label>
                    <Textarea id="content" placeholder="You are a..." />
                  </div>
                </fieldset>
              </form>
            </Drawer.Content>
          </Drawer.Root>
          <Button variant="outline" size="sm" class="ml-auto gap-1.5 text-sm">
            <Share class="size-3.5" />
            Share
          </Button>
        </header>
        <main class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="relative hidden flex-col items-start gap-8 md:flex"
            data-x-chunk-name="dashboard-03-chunk-0"
            data-x-chunk-description="A settings form a configuring an AI model and messages."
          >
            <form class="grid w-full items-start gap-6">
              <fieldset class="grid gap-6 rounded-lg border p-4">
                <legend class="-ml-1 px-1 text-sm font-medium"> Settings </legend>
                <div class="grid gap-3">
                  <Label for="model">Model</Label>
                  <Select.Root>
                    <Select.Trigger
                      id="model"
                      class="items-start [&_[data-description]]:hidden"
                    >
                      <Select.Value placeholder="Select a model" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="genesis">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <SquareMessage class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Business
                            </p>
                            <p class="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </Select.Item>
                      <Select.Item value="explorer">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <PlusMessage class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Invitation
                            </p>
                            <p class="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </Select.Item>
                      <Select.Item value="quantum">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <ReplyMessage class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Promotion
                            </p>
                            <p class="text-xs" data-description>
                              The most powerful model for complex
                              computations.
                            </p>
                          </div>
                        </div>
                      </Select.Item>
                    </Select.Content>
                  </Select.Root>
                </div>
                <div class="grid gap-3">
                  <Label for="temperature">To</Label>
                  <Input id="temperature" type="text" placeholder="sai@mail.com" />
                </div>
               
                  <div class="grid gap-3">
                    <Label for="top-p">CC</Label>
                    <Input id="top-p" type="text" placeholder="others@gmail.com" />
                  </div>
              </fieldset>
              <fieldset class="grid gap-6 rounded-lg border p-4">
                <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
                <div class="grid gap-3">
                  <Label for="top-p">Header</Label>
                  <Textarea id="top-p" class='min-h-36 resize-none'   placeholder="others@gmail.com" />
                </div>
                <div class="grid gap-3">
                  <Label for="top-p">Footer</Label>
                  <Textarea id="top-p" class='min-h-36 resize-none'  placeholder="others@gmail.com" />
                </div>
              </fieldset>
            </form>
          </div>
          <div
            class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2"
          >
            <Badge variant="outline" class="absolute right-3 top-3 top">Output</Badge>
            <div class="flex-1" />
            <form
              class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              data-x-chunk-name="dashboard-03-chunk-1"
              data-x-chunk-description="A form for sending a message to an AI chatbot. The form has a textarea and buttons to upload files and record audio."
            >
              <Label for="message" class="sr-only">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div class="flex items-center p-3 pt-0">
                <Tooltip.Root>
                  <Tooltip.Trigger asChild let:builder>
                    <Button variant="ghost" size="icon" builders={[builder]}>
                      <Paperclip class="size-4" />
                      <span class="sr-only">Attach file</span>
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="top">Attach File</Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild let:builder>
                    <Button variant="ghost" size="icon" builders={[builder]}>
                      <Mic class="size-4" />
                      <span class="sr-only">Use Microphone</span>
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="top">Use Microphone</Tooltip.Content>
                </Tooltip.Root>
                <Button type="submit" size="sm" class="ml-auto gap-1.5">
                  Send Message
                  <CornerDownLeft class="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </main>
  </div>
  