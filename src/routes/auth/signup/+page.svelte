<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
  </script>
<div>
    
<div class="w-full h-[100vh] flex justify-center align-middle flex-wrap bg-[#090909]">   
  <div class="w-full text-center text-5xl"><h1 class="text-white"><span class="font-dosis text-6xl text-red-700">M</span>AIL.<span class="font-dosis text-6xl text-red-700">M</span>E</h1></div>

  <div class="h-[70vh]"> 
  <Card.Root class="mx-auto max-w-lg">
    <Card.Header>
      <Card.Title class="text-xl">Sign Up</Card.Title>
      <Card.Description>Enter your information to create an account</Card.Description>
    </Card.Header>
    <Card.Content>
      <form method="post" action="?/register" >
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" name="fname" required />
          </div>
          <div class="grid gap-2">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" name="lname" required />
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" name="email" required />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" name="password" />
        </div>
        <Button type="submit" class="w-full">Create an account</Button>
        <Button variant="outline" class="w-full">Sign up with GitHub</Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <a href="##" class="underline"> Sign in </a>
      </div>
    </form>
    </Card.Content>
  </Card.Root>
</div>
</div>
</div>