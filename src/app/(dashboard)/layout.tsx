// import { AppSidebar } from '@/components/shared/sidebar/AppSidebar';
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from '@/components/ui/sidebar';

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className=''>
//       <SidebarProvider>
//         <AppSidebar />
//         <SidebarInset>
//           <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
//             <div className='flex items-center gap-2 px-4'>
//               <SidebarTrigger className='m-4' />
//             </div>
//           </header>
//           <div className='flex p-6'>
//             <div className='w-full'>{children}</div>
//           </div>
//         </SidebarInset>
//       </SidebarProvider>
//     </div>
//   );
// }
