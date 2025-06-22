import { Button } from "../ui/button";

export default function DonorInfo({
  donorName,
  donorEmail,
  donorImage,
  onRequest,
  foodStatus,
}) {
  return (
    <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t overflow-hidden">
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={donorImage}
          alt={donorName}
          className="w-12 h-12 rounded-full border shrink-0"
        />
        <div className="truncate">
          <p className="font-medium truncate">{donorName}</p>
          <p className="text-sm text-muted-foreground truncate">{donorEmail}</p>
        </div>
      </div>
      <Button
        className="bg-lime-600 hover:bg-primary/90 text-white font-bold px-4 shrink-0"
        onClick={onRequest}
        disabled={foodStatus === "requested"}
      >
        {foodStatus === "requested" ? "Already Requested" : "Food Request"}
      </Button>
    </div>
  );
}
