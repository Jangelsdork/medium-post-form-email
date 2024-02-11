/* eslint-disable import/prefer-default-export */
"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// import the form components 
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(5).max(500),
})

export function SubmissionForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // all values must match names defined in schema 
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "", 
      message: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

// return the jsx that will render 
return (
  //  this defines our entire form 

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* the formField component defines individual elements - in this case "firstName" */} 
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Rodney" {...field} />
              </FormControl>
               {/* the form control element is redundant in our case, but can create a good ux in more complex forms */}
              <FormDescription>
                The chosen name your parents gifted to you
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* a new form field for "lastName" */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="McDoogle" {...field} />
              </FormControl>       
              <FormMessage />
            </FormItem>
          )}
        />

         {/* a new form field for email. It will use the same input, and validation will be handled by Zod */}
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="r.mcdoogz@gmail.com" {...field} />
              </FormControl>       
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea placeholder="I think your work is really great, let me offer you one million dollars for..." {...field} />
              </FormControl>       
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

}