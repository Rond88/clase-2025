// import React from "react";
// import {
//   Table,
//   TableCaption,
//   TableBody,
//   TableCell,
//   TableRow,
//   TableHeader,
//   TableHead,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import UserTablePagination from "./user-table-pagination";

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   role: string | null;
//   phone: string | null;
//   emailVerified: boolean;
//   createdAt: string;
// };

// export default function UserTable({
//   users,
//   totalPages = 1,
//   currentPage = 1,
// }: {
//   users: User[];
//   totalPages?: number;
//   currentPage?: number;
// }) {
//   return (
//     <>
//       <Table>
//         <TableCaption>Lista de Usuarios</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Nombre</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Rol</TableHead>
//             <TableHead>Telefono</TableHead>
//             <TableHead>Verificado</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {users.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>
//                 <Badge
//                   variant={user.role === "ADMIN" ? "default" : "secondary"}
//                 >
//                   {user.role ?? "USER"}
//                 </Badge>
//               </TableCell>
//               <TableCell>{user.phone ?? "-"}</TableCell>
//               <TableCell>
//                 <Badge variant={user.emailVerified ? "default" : "destructive"}>
//                   {user.emailVerified ? "Si" : "No"}
//                 </Badge>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <UserTablePagination currentPage={currentPage} totalPages={totalPages} />
//     </>
//   );
// }
