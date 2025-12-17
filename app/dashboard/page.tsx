import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-xl font-bold mb-2">Conversations</h2>
          <p>View and manage all chatbot conversations.</p>
          <Button variant="outline">View Conversations</Button>
        </Card>
        <Card>
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          <p>Analyze chatbot performance and user interactions.</p>
          <Button variant="outline">View Analytics</Button>
        </Card>
        <Card>
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <p>Manage chatbot configurations and integrations.</p>
          <Button variant="outline">Go to Settings</Button>
        </Card>
      </div>
    </div>
  );
}