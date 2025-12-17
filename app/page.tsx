import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-gray-800">
      <div className="container mx-auto py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">AI Chatbot Integration</h1>
        <p className="text-lg mb-8">
          Revolutionize your customer service with intelligent AI-powered chatbots.
        </p>
        <Button variant="primary" size="lg">Get Started</Button>
      </div>
    </div>
  );
}