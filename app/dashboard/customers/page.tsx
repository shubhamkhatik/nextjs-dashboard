import CustomersTable from "@/app/ui/customers/table";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Customers",
};
export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />;
      </Suspense>
    </>
  );
}
