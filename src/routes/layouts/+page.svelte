<script lang="ts">

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
    
    import {Navbar , Input , Preview } from "$lib/navbar/navbar";

    const data = [
      {name:"Business",disc:"Our fastest model for general use cases."},
      {name:"Invitation",disc:"Performance and speed for efficiency."},
      {name:"Job application",disc:"The most powerful model for complex computations"}
    ]

    const data1=[
        {name:"b1",subject:"business class",header:"some header",footer:"some footer",message:"hello"},
        {name:"b2",subject:"not business invitation",header:"some header",footer:"some footer",message:"hello"},
        {name:"b3",subject:"business",header:"some header",footer:"some footer",message:"hello"}
    ];

    const data2=[
      {name:"i1",subject:" invitation",header:"some header",footer:"some footer",message:"hello"},
      {name:"i2",subject:"not  invitation",header:"some header",footer:"some footer",message:"hello"},
      {name:"i3",subject:"simple invitation",header:"some header",footer:"some footer",message:"hello"}
    ]

  const data3=[
  {name:"j1",subject:" Job application",header:"some header",footer:"some footer",message:"hello"},      
  {name:"j2",subject:"not Job application",header:"some header",footer:"some footer",message:"hello"},
  {name:"j3",subject:"simple Job application",header:'some header',footer:"some footer",message:"hello"}
  ]

  let model = $state(data[0]);
  let layout:layoutType = $state(data1[0]);


</script>
  
  <div class="flex min-h-screen w-full flex-col">
    <Navbar nav_status="Layouts"/> 
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <Input/>
        <Preview header={layout.header} footer={layout.footer} subject={layout.subject} message={layout.message}   />
      </div>
    </main>
  </div>
  