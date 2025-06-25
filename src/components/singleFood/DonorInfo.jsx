import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function DonorInfo({
  donorName,
  donorEmail,
  donorImage,
  onRequest,
  foodStatus,
}) {
  return (
    <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t overflow-hidden">
      <div className="flex items-center gap-3 min-w-0">
        <p className="text-sm text-muted-foreground font-medium">Donated by</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <img
                src={donorImage}
                alt={donorName}
                className="w-10 h-10 rounded-full border border-muted shrink-0 cursor-pointer"
              />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-sm font-medium text-foreground">
                {donorEmail}
              </div>
              <div className="text-sm font-medium text-foreground">
                {donorName}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
