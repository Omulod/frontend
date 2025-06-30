import { IAccordionItem } from "@/types/common.types";
import Accordion from "../accordion/_accordion";
import ArrowRightUpIcon from "@/components/ui/icons/arrow-right-up-icon";
import Button from "@/components/ui/button";

const items: IAccordionItem[] = [
  {
    title: "Show all services",
    id: "1",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum maxime, minus at quaerat quas in? Incidunt doloremque aperiam reprehenderit pariatur quasi autem, expedita a sunt eveniet iure harum quos. Ipsa, quibusdam autem. Quaerat, vel quis cum provident, iusto dolor illum deserunt nihil ipsam doloremque deleniti doloribus quod fuga impedit! Praesentium, modi, assumenda atque dicta officia cumque unde repudiandae vitae perferendis quas numquam totam. Officia ab magnam reiciendis sequi voluptate vel aspernatur quas magni mollitia? Modi accusantium consequuntur nobis? Iusto cum cumque inventore modi. Sint sed maiores perferendis odit omnis! Amet nihil quaerat repudiandae tempore sit quae quasi aliquam cum.",
  },
  {
    title: "Show all technologies",
    id: "2",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum maxime, minus at quaerat quas in? Incidunt doloremque aperiam reprehenderit pariatur quasi autem, expedita a sunt eveniet iure harum quos. Ipsa, quibusdam autem. Quaerat, vel quis cum provident, iusto dolor illum deserunt nihil ipsam doloremque deleniti doloribus quod fuga impedit! Praesentium, modi, assumenda atque dicta officia cumque unde repudiandae vitae perferendis quas numquam totam. Officia ab magnam reiciendis sequi voluptate vel aspernatur quas magni mollitia? Modi accusantium consequuntur nobis? Iusto cum cumque inventore modi. Sint sed maiores perferendis odit omnis! Amet nihil quaerat repudiandae tempore sit quae quasi aliquam cum.",
  },
  {
    title: "Show all industries",
    id: "3",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum maxime, minus at quaerat quas in? Incidunt doloremque aperiam reprehenderit pariatur quasi autem, expedita a sunt eveniet iure harum quos. Ipsa, quibusdam autem. Quaerat, vel quis cum provident, iusto dolor illum deserunt nihil ipsam doloremque deleniti doloribus quod fuga impedit! Praesentium, modi, assumenda atque dicta officia cumque unde repudiandae vitae perferendis quas numquam totam. Officia ab magnam reiciendis sequi voluptate vel aspernatur quas magni mollitia? Modi accusantium consequuntur nobis? Iusto cum cumque inventore modi. Sint sed maiores perferendis odit omnis! Amet nihil quaerat repudiandae tempore sit quae quasi aliquam cum.",
  },
];
const FooterAccordion = () => {
  return (
    <div className="container">
      <Accordion items={items} />
      <div className="flex items-center justify-end gap-6 pt-8">
        <div>
          <p>Let’s work together</p>
          <p className="text-primary-500 text-3xl font-semibold">
            Call omulod*
          </p>
        </div>
        <Button className="aspect-square !p-4">
          <ArrowRightUpIcon />
        </Button>
      </div>
    </div>
  );
};

export default FooterAccordion;
