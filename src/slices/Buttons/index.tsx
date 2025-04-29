import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<Content.ButtonsSlice>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons: FC<ButtonsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center gap-4 py-8 bg-gray-100 rounded-xl shadow-md"
    >
      {/* Image */}
      {slice.primary.ppimage?.url && (
        <img
          src={slice.primary.ppimage.url}
          alt={slice.primary.ppimage.alt || "Image"}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
        />
      )}

      {/* Lien comme bouton */}
      {slice.primary.click?.value?.url && (
        <a
          href={slice.primary.click.value.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-white text-lg font-semibold bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          {slice.primary.click.value.text || "Visit"}
        </a>
      )}
    </section>
  );
};

export default Buttons;
