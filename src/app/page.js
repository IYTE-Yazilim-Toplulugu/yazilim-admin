"use client";

import Image from "next/image";
import DataTable from "./components/dataTable";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable />
    </main>
  );
}
