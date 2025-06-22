export default function DonorInfo({ donorName, donorEmail, donorImage }) {
  return (
    <div className="flex items-center gap-4 mt-6 pt-4 border-t">
      <img
        src={donorImage}
        alt={donorName}
        className="w-12 h-12 rounded-full border"
      />
      <div>
        <p className="font-medium">{donorName}</p>
        <p className="text-sm text-muted-foreground">{donorEmail}</p>
      </div>
    </div>
  );
}
