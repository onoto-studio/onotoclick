import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next"; // Assure-toi d'importer les deux composants correctement

/**
 * Props for Buttons Slice
 */
export type ButtonsProps = SliceComponentProps<any>;

const Buttons: FC<ButtonsProps> = ({ slice }) => {
  const image = slice.primary?.ppimage;
  const link = slice.primary?.click;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center gap-6 p-8 bg-gray-100 rounded-xl shadow-md max-w-md mx-auto"
    >
      {/* Affichage de l'image avec PrismicNextImage */}
      {image?.url && (
        <PrismicNextImage
          field={image}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          width={image.width || 96}
          height={image.height || 96}
          alt={image.alt || "Image"}
        />
      )}

      {/* Lien avec PrismicNextLink */}
      {link?.value?.url && (
        <PrismicNextLink field={link}>
          <a
            className="px-6 py-3 text-white text-lg font-semibold bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            {link.value.text || "Visit"}
          </a>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default Buttons;
