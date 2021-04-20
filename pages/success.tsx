import { useRouter } from "next/router";
import React from "react";
import { Button, CongratulationMessage, Layout } from "../src/components";

function SuccessPage() {
  const router = useRouter();
  const goToHome = () => router.push("/");
  return (
    <Layout>
      <CongratulationMessage />
      <Button onClick={goToHome} size="huge">
        Ir para a Home
      </Button>
    </Layout>
  );
}

export default SuccessPage;
