<script>
  import * as Menubar from "$lib/components/ui/menubar";
</script>
  <Menubar.Root class='m-0 p-0 border-[0px] flex justify-end bg-gradient-to-r from-purple-500 to-pink-500 h-14'>
    <Menubar.Menu>
      <Menubar.Item class='w-full font-bebas text-xl antialiased tracking-wider'><span class="font-dosis text-2xl text-red-700">M</span>AIL.<span class="font-dosis text-2xl text-red-700">M</span>E</Menubar.Item>
    </Menubar.Menu>
    <Menubar.Menu >
      <Menubar.Trigger class='font-dosis  text-lg text-white'>
        <a data-sveltekit-preload-data="tap" href="/auth/signup">
        SignUp
      </a>
    </Menubar.Trigger>
    </Menubar.Menu>
    <Menubar.Menu >
      <Menubar.Trigger class='font-dosis  text-lg text-white'>
        <a data-sveltekit-preload-data="tap" href="/auth">
          SignIn
        </a>
      </Menubar.Trigger>
    </Menubar.Menu>
  </Menubar.Root>
<div class="bg-[url('/src/lib/images/joe-woods-4Zaq5xY5M_c-unsplash(2).jpg')] w-full h-[100vh] flex flex-col  ">
    <div>
      <h1 class="font-wireone text-[100px]"> Let's get Started with....</h1>
    </div>
    <div class="w-full text-[130px] text-center">
      <h2><span class="font-dosis text-[150px] text-red-700">M</span>AIL.<span class="font-dosis text-[150px] text-red-700">M</span>E</h2>
    </div>
</div>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>