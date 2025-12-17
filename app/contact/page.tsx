import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4 max-w-lg">
        <Input label="Name" type="text" required />
        <Input label="Email" type="email" required />
        <Textarea label="Message" rows={4} required />
        <Button variant="primary" size="md">Send Message</Button>
      </form>
    </div>
  );
}