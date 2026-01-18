import { CV_VARIANTS, CvVariantId } from './CvVariants';

type CvDefaultSelectorProps = {
  activeVariantId: CvVariantId;
  onChange: (variantId: CvVariantId) => void;
};

export function CvDefaultSelector({ activeVariantId, onChange }: CvDefaultSelectorProps) {
  return (
    <div>
      <h2 className="mb-4 font-semibold ">CV Variant</h2>

      <select
        value={activeVariantId}
        onChange={(e) => onChange(e.target.value as CvVariantId)}
        className="w-full border rounded px-2 py-1 max-w-fit"
      >
        {CV_VARIANTS.map((variant) => (
          <option key={variant.id} value={variant.id}>
            {variant.label}
          </option>
        ))}
      </select>
    </div>
  );
}
