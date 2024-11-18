import Header from "@/components/Header";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z
    .string()
    .min(7, {
      message: "Email must be at least 7 characters",
    })
    .email("This is not a valid email address"),
  message: z.string().nonempty("Message is required"),
  name: z.string().nonempty("Name is required"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const { toast } = useToast();
  const sendEmail: SubmitHandler<FormSchemaType> = (data) => {
    emailjs
      .send(
        "service_otkbtvj",
        "template_do5nneo",
        {
          email: data.email,
          message: data.message,
          name: data.name,
        },
        "f-Mou5V2mcTwxei_e"
      )
      .then(
        () => {
          toast({ description: "Your message has been sent" });
          window.location.reload();
        },
        (error) => {
          toast({ description: "Error: " + error.text });
        }
      );
  };

  return (
    <div className="mx-auto py-6">
      <Header title="Contact" />
      <Form {...form}>
        <form
          className="flex flex-col px-6 lg:w-3/4 mx-auto"
          onSubmit={form.handleSubmit(sendEmail)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter an email address" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="my-6" type="submit">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
