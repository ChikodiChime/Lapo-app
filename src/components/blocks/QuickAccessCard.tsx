import { ChevronRight } from "lucide-react";

function QuickAccessCard({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 p-4 bg-[#F1F7FF] rounded-lg border hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 text-white p-2 rounded-full">{icon}</div>
        <div className="flex items-end gap-3">
          <span className="font-medium">{title}</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </a>
  );
}

export default QuickAccessCard;
