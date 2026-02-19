// import React from "react";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import UserTable from "@/components/admin/user-table";
// import { getUsersTable } from "@/lib/actions/user.actions";

// export default async function AdminUsersPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] }>;
// }) {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });
//   if (!session || session.user.role !== "ADMIN") {
//     return <div>No autorizado</div>;
//   }
//   const { page = 1, pageSize = 5 } = await searchParams;
//   const { data, pageInfo } = await getUsersTable({
//     page: Number(page),
//     pageSize: Number(pageSize),
//   });
//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
//       <UserTable
//         users={data}
//         currentPage={pageInfo.currentPage}
//         totalPages={pageInfo.totalPages}
//       />
//     </>
//   );
// }
