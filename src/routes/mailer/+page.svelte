<script lang="ts">

    import Settings from "lucide-svelte/icons/settings";
    import MoreMessage from "lucide-svelte/icons/message-circle-more";
    import ReplyMessage from "lucide-svelte/icons/message-circle-reply";
    import PlusMessage from "lucide-svelte/icons/message-circle-plus";
    import SquareMessage from "lucide-svelte/icons/message-square-code";
    import Share from "lucide-svelte/icons/share";
    import Paperclip from "lucide-svelte/icons/paperclip";
    import Mic from "lucide-svelte/icons/mic";
    import CornerDownLeft from "lucide-svelte/icons/corner-down-left";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js"; 
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { Navbar } from "$lib/navbar/navbar";

    const data = [{name:"Business",disc:"Our fastest model for general use cases.",imag:MoreMessage},
                  {name:"Invitation",disc:"Performance and speed for efficiency.",imag:SquareMessage},
                  {name:"Job application",disc:"The most powerful model for complex computations",imag:PlusMessage}
    ]
    let to = $state('');
    let cc = $state('');
    let header = $state('');
    let footer = $state('');
    let message = $state('');
  </script>
  
  <div class="flex min-h-screen w-full flex-col">
    <Navbar nav_status="Mailer"/>
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
                    <Label for="model">Model</Label>
                    <Select.Root>
                      <Select.Trigger
                        id="model"
                        class="items-start [&_[data-description]]:hidden"
                      >
                        <Select.Value placeholder="Select a model" />
                      </Select.Trigger>
                      <Select.Content>
                        {#each data as {name,disc,imag} }
                        <Select.Item value="genesis" label="Neural Genesis">
                          <div
                            class="flex items-start gap-3 text-muted-foreground"
                          >
                            <!-- <imag class='size-5' /> -->
                            <div class="grid gap-0.5">
                              <p>
                                {name}
                              </p>
                              <p class="text-xs" data-description>
                                {disc}
                              </p>
                            </div>
                          </div>
                        </Select.Item>
                        {/each}
                        <!-- <Select.Item value="explorer" label="Neural Explorer">
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
                        </Select.Item>   -->
                      </Select.Content>
                    </Select.Root>
                  </div>
                  <div class="grid gap-3">
                    <Label for="temperature">To</Label>
                    <Input id="temperature" type="email" placeholder="sai@gmail.com" bind:value={to} />
                  </div>
                  <div class="grid gap-3">
                    <Label for="top-p">CC</Label>
                    <Input id="top-p" type="email" placeholder="u.gmail.com" bind:value={cc}/>
                  </div>
                </fieldset>
                <fieldset class="grid gap-6 rounded-lg border p-4">
                  <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
                  <div class="grid gap-3">
                    <Label for="content">Header</Label>
                    <Textarea id="content" placeholder="Header is..." bind:value={header} />
                  </div>
                  <div class="grid gap-3">
                    <Label for="content">Footer</Label>
                    <Textarea id="content" placeholder="Footer is..." bind:value={footer}/>
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
                      {#each data as {name,disc,imag} }
                      <Select.Item value="genesis">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <!-- <{imag} class="size-5" /> -->
                          <div class="grid gap-0.5">
                            <p>
                              {name}
                            </p>
                            <p class="text-xs" data-description>
                              {disc}
                            </p>
                          </div>
                        </div>
                      </Select.Item>
                      {/each}
                      <!-- <Select.Item value="explorer">
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
                      </Select.Item> -->
                    </Select.Content>
                  </Select.Root>
                </div>
                <div class="grid gap-3">
                  <Label for="temperature">To</Label>
                  <Input id="temperature" type="text" placeholder="sai@mail.com" bind:value={to} />
                </div>
               
                  <div class="grid gap-3">
                    <Label for="top-p">CC</Label>
                    <Input id="top-p" type="text" placeholder="others@gmail.com"bind:value={cc} />
                  </div>
              </fieldset>
              <fieldset class="grid gap-6 rounded-lg border p-4">
                <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
                <div class="grid gap-3">
                  <Label for="top-p">Header</Label>
                  <Textarea id="top-p" class='min-h-36 resize-none'   placeholder="others@gmail.com" bind:value={header}/>
                </div>
                <div class="grid gap-3">
                  <Label for="top-p">Footer</Label>
                  <Textarea id="top-p" class='min-h-36 resize-none'  placeholder="others@gmail.com" bind:value={footer}/>
                </div>
              </fieldset>
            </form>
          </div>
          <div
            class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2"
          >
            <Badge variant="outline" class="absolute right-3 top-3 top">Output</Badge>
            <div class="flex-1 font-dosis space-y-3" >
             <h3 class="font-bold">TO:{to}</h3>
             <h3 class="font-bold">CC:{cc}</h3>
             <h2>{header}</h2>
             <h2>{message}</h2>
             <h2>{footer}</h2>
            </div>
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
                bind:value={message}
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
  