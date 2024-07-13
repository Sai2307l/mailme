<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";

  type layoutType={
    name:string,
    subject:string,
    header:string,
    footer:string,
    message:string,
  }
  type modelType={
    name:string,
    disc:string
  }
    
    import {Navbar} from "$lib/navbar/navbar";

    
    let data1=$state([
        {name:"b1",subject:"business class",header:"some header",footer:"some footer",message:"hello"},
        {name:"b2",subject:"not business invitation",header:"some header",footer:"some footer",message:"hello"},
        {name:"b3",subject:"business",header:"some header",footer:"some footer",message:"hello"}
    ]);

    let data2=$state([
      {name:"i1",subject:" invitation",header:"some header",footer:"some footer",message:"hello"},
      {name:"i2",subject:"not  invitation",header:"some header",footer:"some footer",message:"hello"},
      {name:"i3",subject:"simple invitation",header:"some header",footer:"some footer",message:"hello"}
    ])

  let data3=$state([
  {name:"j1",subject:" Job application",header:"some header",footer:"some footer",message:"hello"},      
  {name:"j2",subject:"not Job application",header:"some header",footer:"some footer",message:"hello"},
  {name:"j3",subject:"simple Job application",header:'some header',footer:"some footer",message:"hello"}
  ]);


    let data = $state([
      {name:"Business",disc:"Our fastest model for general use cases.",value:data1},
      {name:"Invitation",disc:"Performance and speed for efficiency.",value:data2},
      {name:"Job application",disc:"The most powerful model for complex computations",value:data3}
    ]);

    let model=$state(0);
    let layout=$state(0);
    let nameofnew=$state('');

</script>
  
  <div class="flex min-h-screen w-full flex-col">
    <Navbar nav_status="Layouts"/> 
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        
        
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
                {#each data as {name,disc},i }
                <Select.Item value={i} onclick={()=>{
                  model=i;
                  console.log(i);
                  }}>
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
                {#each data[model].value as {name},i }
                <Select.Item value={i} onclick={()=>layout=i}>
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
            <Input type="text" placeholder="name of the layout" bind:value={nameofnew}/>
            <Button type="submit" onclick={
            ()=>{
              data[model].value.push({name:nameofnew , subject:" Job application",header:"some header",footer:"some footer",message:"hello"});
            }
            }>Create layout</Button>
          </div>
        </fieldset>  
        </Tabs.Content>
        <Tabs.Content value="data">
          <fieldset class="grid gap-6 rounded-lg border p-4">
            <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
            <div class="grid gap-3">
              <Label for="top-p">Header</Label>
              <Textarea id="top-p" class='min-h-20 resize-none'   placeholder="others@gmail.com" bind:value={data[model].value[layout].header}/>
            </div>
            <div class="grid gap-3">
              <Label for="top-p">Footer</Label>
              <Textarea id="top-p" class='min-h-20 resize-none'  placeholder="others@gmail.com" bind:value={data[model].value[layout].footer}/>
            </div>
            <div class="grid gap-3">
              <Label for="top-p">Message</Label>
              <Textarea id="top-p" class='min-h-20 resize-none'  placeholder="others@gmail.com" bind:value={data[model].value[layout].message}/>
            </div>
          </fieldset>
        </Tabs.Content>
      </Tabs.Root>
      
      </div>
<div class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
  <Badge variant="outline" class="absolute right-3 top-3 top">Output</Badge>
  <div class="flex-1 font-dosis space-y-3" >
     <h2>{data[model].value[layout].subject}</h2>
      <h2>{data[model].value[layout].header}</h2>
      <h2>{data[model].value[layout].message}</h2>
      <h2>{data[model].value[layout].footer}</h2>
  </div>
</div>
      </div>
    </main>
  </div>
  