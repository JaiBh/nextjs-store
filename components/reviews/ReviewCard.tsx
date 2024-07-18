import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
import Image from "next/image";
import Link from "next/link";

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
    productId: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt={reviewInfo.name}
            className="w-12 h-12 rounded-full object-cover"
            width={48}
            height={48}
          ></Image>
          <div className="ml-4 grid gap-y-2">
            <Link
              href={`/products/${reviewInfo.productId}`}
              className="text-sm font-bold capitalize"
            >
              {reviewInfo.name}
            </Link>
            <Rating rating={reviewInfo.rating}></Rating>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment}></Comment>
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;
