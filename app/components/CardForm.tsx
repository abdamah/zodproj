import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "./Form";

export default function CardForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl pb-2">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to sign up an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  );
}
