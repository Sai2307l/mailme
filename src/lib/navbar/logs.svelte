<script lang="ts">

    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Table from "$lib/components/ui/table/index.js";

    let data = [
        {name:"Liam Johnson",email:"liam@example.com",type:"Sale",status:"Approved",date:"2023-06-23",mails:"12"},
        {name:"Olivia Smith",email:"liam@example.com",type:"Sale",status:"Approved",date:"2023-06-23",mails:"12"},
        {name:"Liam Johnson",email:"liam@example.com",type:"Sale",status:"Approved",date:"2023-06-23",mails:"12"},
        {name:"Liam Johnson",email:"liam@example.com",type:"Sale",status:"Approved",date:"2023-06-23",mails:"12"},
        {name:"Liam Johnson",email:"liam@example.com",type:"Sale",status:"Approved",date:"2023-06-23",mails:"12"}
    ]
  </script>

<Card.Root class="xl:col-span-2">
    <Card.Header class="flex flex-row items-center">
      <div class="grid gap-2">
        <Card.Title>Mail Logs</Card.Title>
        <Card.Description>Recent Mails Sent By You</Card.Description>
      </div>
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
            {#each data as {name,email,type,status,date,mails}, i}
            <Table.Row>
            <Table.Cell>
              <div class="font-medium">{name}</div>
              <div class=" text-sm text-muted-foreground md:inline">
                {email}
              </div>
            </Table.Cell>
            <Table.Cell class="xl:table.-column ">{type}</Table.Cell>
            <Table.Cell class="xl:table.-column ">
              <Badge class="text-xs" variant="outline">{status}</Badge>
            </Table.Cell>
            <Table.Cell
              class="md:table.-cell xl:table.-column"
            >
              {date}
            </Table.Cell>
            <Table.Cell class="text-right">{mails}</Table.Cell>
          </Table.Row>   
            {/each }
        </Table.Body>
      </Table.Root>
    </Card.Content>
  </Card.Root>