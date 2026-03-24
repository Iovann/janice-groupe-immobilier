import AnnoncesPage from "@/views/AnnoncesPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <AnnoncesPage />
    </Suspense>
  );
}
