<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    
  const data = [{name:"Business",disc:"Our fastest model for general use cases."},
                {name:"Invitation",disc:"Performance and speed for efficiency."},
                {name:"Job application",disc:"The most powerful model for complex computations"}
  ]
  const data1=[
        {name:"t1",subject:"business invitation",header:"some header",footer:"some footer"},
        {name:"t2",subject:"not business invitation",header:"some header",footer:"some footer"},
        {name:"t3",subject:"business",header:"some header",footer:"some footer"}
    ];
  let header = $state('');
  let footer = $state('');
  let message = $state('');
</script>

          <div
            class="relative hidden flex-col items-start gap-8 md:flex"
            data-x-chunk-name="dashboard-03-chunk-0"
            data-x-chunk-description="A settings form a configuring an AI model and messages."
          >
          <Tabs.Root value="BS" class="w-[400px]">
            <Tabs.List class="grid w-full grid-cols-2">
              <Tabs.Trigger value="BS">Basic Settings</Tabs.Trigger>
              <Tabs.Trigger value="data">Data</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="BS" class="gap-4">
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
                    {#each data as {name,disc} }
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
                    
                    </Select.Content>
                </Select.Root>
              </div>
              <div class="grid gap-3">
                <Label for="model">Layout</Label>
                <Select.Root>
                  <Select.Trigger
                    id="model"
                    class="items-start [&_[data-description]]:hidden"
                  >
                    <Select.Value placeholder="Select a layout" />
                  </Select.Trigger>
                  <Select.Content>
                    {#each data1 as {name} }
                    <Select.Item value="genesis">
                      <div class="flex items-start gap-3 text-muted-foreground">
                        <div class="grid gap-0.5">
                          <p>
                            {name}
                          </p>
                        </div>
                      </div>
                    </Select.Item>
                    {/each}
                  </Select.Content>
                </Select.Root>
              </div>
            </fieldset> 
            <fieldset class="grid gap-6 rounded-lg border p-4">
              <legend class="-ml-1 px-1 text-sm font-medium"> New Layout </legend>
              <div class="grid gap-3">
                <Label for="top-p">Create New Layout</Label>
                <Input type="text" placeholder="name of the layout" />
                <Button type="submit">Create layout</Button>
              </div>
            </fieldset>  
            </Tabs.Content>
            <Tabs.Content value="data">
              <fieldset class="grid gap-6 rounded-lg border p-4">
                <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
                <div class="grid gap-3">
                  <Label for="top-p">Header</Label>
                  <Textarea id="top-p" class='min-h-20 resize-none'   placeholder="others@gmail.com" bind:value={header}/>
                </div>
                <div class="grid gap-3">
                  <Label for="top-p">Footer</Label>
                  <Textarea id="top-p" class='min-h-20 resize-none'  placeholder="others@gmail.com" bind:value={footer}/>
                </div>
                <div class="grid gap-3">
                  <Label for="top-p">Message</Label>
                  <Textarea id="top-p" class='min-h-20 resize-none'  placeholder="others@gmail.com" bind:value={message}/>
                </div>
              </fieldset>
            </Tabs.Content>
          </Tabs.Root>
          
          </div>