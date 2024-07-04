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
    import {Checkbox} from '$lib/components/ui/checkbox/index.js'
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
        <a href="/home" class="text-muted-foreground transition-colors hover:text-foreground">
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
        <a href="/about" class="text-foreground transition-colors hover:text-foreground">
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
            <a href="/mailer" class="text-muted-foreground hover:text-foreground"> Mailer </a>
            <a href="/logs" class="text-muted-foreground hover:text-foreground"> Logs </a>
            <a href="/settings" class="text-muted-foreground hover:text-foreground"> Settings </a>
            <a href="/about" class=" hover:text-foreground"> About Us </a>
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
    <main
      class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10"
    >
      <div class="mx-auto grid w-full max-w-6xl gap-2">
        <h1 class="text-3xl font-semibold">Mail.Me</h1>
      </div>
      <div
        class="mx-auto grid w-full  items-start gap-6 "
      >
          <Card.Root>
            <Card.Header>
              <Card.Title>About</Card.Title>
            </Card.Header>
            <Card.Content>
                Creating a user-friendly mailer website involves designing a platform that simplifies the process of sending and managing emails efficiently. Whether for personal or business use, the website must prioritize ease of use, security, and reliability.

                **Homepage and Navigation:**
                The homepage of our mailer website welcomes users with a clean and intuitive interface. A prominent login/sign-up section ensures easy access, while a brief overview highlights key features: email composition, contact management, and analytics.
                
                **Email Composition:**
                Our mailer website offers a streamlined email composition interface. Users can create emails using a simple drag-and-drop editor or a classic text editor, ensuring flexibility based on user preference. Built-in templates cater to various purposes, from newsletters to event invitations, saving time and effort.
                
                **Contact Management:**
                Efficient contact management is crucial. Users can import contacts from CSV files or sync with popular CRM platforms. Segmentation tools allow targeted messaging, enhancing engagement. Automated list management ensures compliance with privacy regulations.
                
                **Analytics and Reporting:**
                Detailed analytics provide insights into campaign performance. Users can track open rates, click-through rates, and other metrics to optimize email content and timing. Reports are presented in visually appealing formats for easy interpretation.
                
                **Security and Compliance:**
                Our website prioritizes data security. End-to-end encryption secures email content, while strict adherence to GDPR and CCPA guidelines ensures user privacy. Regular audits and updates maintain compliance and trust.
                
                **Customer Support:**
                Accessible customer support enhances user experience. A comprehensive help center offers guides, FAQs, and troubleshooting tips. Live chat support resolves queries promptly, fostering user confidence.
                
                **Mobile Optimization:**
                With the increasing use of mobile devices, our website is fully optimized for smartphones and tablets. The responsive design ensures seamless functionality across different screen sizes.
                
                **Conclusion:**
                In conclusion, our mailer website combines user-friendly design with robust features to meet the diverse needs of individuals and businesses alike. From easy email composition to advanced analytics and compliance with security standards, our platform aims to simplify and enhance the email marketing experience.
                
                Keywords: mailer website, email composition, contact management, analytics, security, compliance, customer support, mobile optimization
            </Card.Content>
          </Card.Root>
      </div>
    </main>
  </div>
  