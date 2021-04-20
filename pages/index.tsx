import { useRouter } from "next/router";
import { Button, Layout, PlanSelector, Typography } from "../src/components";

function PlanSelectorPage() {
  const router = useRouter();
  return (
    <Layout hideBackButton>
      <Typography variant="h1">Confira o seu plano:</Typography>
      <PlanSelector />
      <Button onClick={() => router.push("/form-payment")} size="huge">
        Avançar
      </Button>
    </Layout>
  );
}

export default PlanSelectorPage;
