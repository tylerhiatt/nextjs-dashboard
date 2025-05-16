import DashboardSkeleton from "@/app/ui/skeletons";

// nextjs file built on top of React Suspense -> create a fallback UI to show while page content loads for dynamic rendering
export default function Loading() {
  return <DashboardSkeleton />;
}
