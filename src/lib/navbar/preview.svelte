<script lang="ts">
    
    import { Badge } from "$lib/components/ui/badge/index.js";

    const data = [{name:"Business",disc:"Our fastest model for general use cases."},
                  {name:"Invitation",disc:"Performance and speed for efficiency."},
                  {name:"Job application",disc:"The most powerful model for complex computations"}
    ]
    let to = $state('');
    let cc = $state('');
    let header = $state('');
    let footer = $state('');
    let message = $state('');
    let subject = $state('');
  </script>

<div class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
    <Badge variant="outline" class="absolute right-3 top-3 top">Output</Badge>
    <div class="flex-1 font-dosis space-y-3" >
       <h2>{subject}</h2>
        <h2>{header}</h2>
        <h2>{message}</h2>
        <h2>{footer}</h2>
    </div>
</div>