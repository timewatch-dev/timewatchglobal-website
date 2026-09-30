import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useBlogStore } from "@/features/blog/store/useBlogStore";


const STATUS_STYLES = {
  published:
    "bg-green-100 text-green-800 border-green-200 dark:bg-green-500/15 dark:text-green-400 dark:border-green-500/30",
  draft:
    "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/15 dark:text-yellow-400 dark:border-yellow-500/30",
};
const STATUS_STYLE_FALLBACK = "bg-muted text-muted-foreground border-border";

function AlertDialogDelete({ blogId, children }) {
  const { deleteProduct } = useBlogStore();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the blog from the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteProduct(blogId)}
            className="cursor-pointer bg-destructive hover:bg-destructive/90 text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const columns = [
  {
    accessorKey: "title",
    header: "Blog Name",
    cell: ({ row }) => (
      <span className="block truncate max-w-[280px]" title={row.original.title}>
        {row.original.title || "-"}
      </span>
    ),
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <span className="block truncate max-w-[200px] text-muted-foreground" title={row.original.slug}>
        {row.original.slug || "-"}
      </span>
    ),
  },
  {
    accessorKey: "featuredImage",
    header: "Thumbnail",
    cell: ({ row }) => {
      const image = row.original.featuredImage;
      if (!image) return "-";
      return (
        <div className="relative w-12 h-12 rounded border border-border overflow-hidden bg-muted">
          <Image
            src={image}
            alt="blog"
            fill
            className="object-cover"
            sizes="48px"
            unoptimized
          />
        </div>
      );
    },
  },
  {
    accessorKey: "mainCategory",
    header: "Category",
    cell: ({ row }) => row.original.mainCategory || "-",
  },
  {
    accessorKey: "subCategory",
    header: "Subcategory",
    cell: ({ row }) => row.original.subCategory || "-",
  },
{
  accessorKey: "updatedAt",
  header: "Updated At",
  cell: ({ row }) => {
    const date = new Date(row.original.updatedAt);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata", // optional, for IST
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  },
},
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return status ? (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            STATUS_STYLES[status] || STATUS_STYLE_FALLBACK
          }`}
        >
          {status}
        </span>
      ) : (
        "-"
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const blog = row.original;
      return (
        <div className="flex items-center gap-3">
          <Link
            href={`/blog/create/${blog.slug}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Edit className="w-5 h-5" />
          </Link>
          <AlertDialogDelete blogId={blog._id}>
            <button
              type="button"
              className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </AlertDialogDelete>
        </div>
      );
    },
  },
];
