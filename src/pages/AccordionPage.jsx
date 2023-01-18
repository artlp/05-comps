import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "asdad2",
      label: "Header number one",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque cupiditate eum ipsa asperiores obcaecati. Aperiam commodi maxime dolorum obcaecati amet nulla pariatur sapiente explicabo, nihil ex rem iure reprehenderit alias!",
    },
    {
      id: "asd213ad",
      label: "Amazing discovery",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci sint illo impedit dolores illum quasi eum natus, laborum placeat? At.",
    },
    {
      id: "as14dad",
      label: "Is it weird to smell cats?",
      content: `Lorem ipsum dolor sit amet consectetur.`,
    },
  ];
  return <Accordion items={items}/>;
}

export default AccordionPage;
