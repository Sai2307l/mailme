<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
  </script>
<div>
    
<div class="w-full h-[100vh] flex justify-center align-middle flex-wrap bg-[#090909]">   
  <div class="w-full text-center text-5xl"><h1 class="text-white"><span class="font-dosis text-6xl text-red-700">M</span>AIL.<span class="font-dosis text-6xl text-red-700">M</span>E</h1></div>
  <div class="h-[80vh]">
    <Card.Root class="mx-auto max-w-sm">
    <Card.Header>
      <Card.Title class="text-2xl">Login</Card.Title>
      <Card.Description>Enter your email below to login to your account</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="/home" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" class="w-full">Login</Button>
        <Button variant="outline" class="w-full">Login with Google</Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don&apos;t have an account?
        <a href="##" class="underline"> Sign up </a>
      </div>
    </Card.Content>
  </Card.Root>
</div>
</div>
</div>