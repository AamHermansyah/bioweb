import { cn } from "@/lib/utils";

interface IllustrationCardProps {
  title?: string;
  subtitle?: string;
  caption?: string;
  imageUrl?: string;
  className?: string;
}

const IllustrationCard: React.FC<IllustrationCardProps> = ({
  title,
  subtitle,
  caption,
  imageUrl,
  className,
}) => {
  return (
    <div className="rounded-xl overflow-hidden border border-green-100 bg-white p-4">
      <div className="relative aspect-video bg-gradient-to-r from-teal-50 to-green-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
        <div className="text-center p-8">
          <div className="w-24 h-24 mx-auto bg-white/40 rounded-full flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-teal-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 14v4.75A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75V14M18 14v-3a2 2 0 00-2-2h-2M18 14l-5 5.25-5-5.25M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          {title && <p className="text-teal-700 font-medium">{title}</p>}
          {subtitle && <p className="text-sm text-teal-600 mt-1">{subtitle}</p>}
        </div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title || 'Gambar'}
            className={cn('absolute w-full h-full object-cover', className)}
          />
        )}
      </div>
      {caption && <p className="text-sm text-gray-500 text-center">{caption}</p>}
    </div>
  );
};

export default IllustrationCard;
