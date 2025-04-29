import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "../../types.generated"; // ajuste le chemin si besoin

/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<Content.ButtonsSlice>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons: FC<ButtonsProps> = ({ slice }) => {
  const image = slice.primary?.ppimage;
  const link = slice.primary?.click;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center gap-6 p-8 bg-gray-100 rounded-xl shadow-md max-w-md mx-auto"
    >
      {/* Affichage de l'image si disponible */}
      {image?.url && (
        <img
          src={image.url}
          alt={image.alt || "Image"}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          width={image.width || 96}
          height={image.height || 96}
        />
      )}

      {/* Lien bouton stylisé */}
      {link?.value?.url && (
        <a
          href={link.value.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-white text-lg font-semibold bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          {link.value.text || "Visit"}
        </a>
      )}
    </section>
  );
};

export default Buttons;
