import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 p-5">
        <h1 className="text-center text-2xl font-bold p-1">Tire suas dúvidas</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>O planit é de graça?</AccordionTrigger>
          <AccordionContent>
           Sim, o planit é de graça e sempre vai ser.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Posso acessar o Planit em diferentes dispositivos?</AccordionTrigger>
          <AccordionContent>
           Sim, o planit pode ser usado no celular, table ou computador.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>O Planit funciona offline?</AccordionTrigger>
          <AccordionContent>
          Não, o planit precisa de internet para funcionar.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Meus dados estão seguros com o Planit?</AccordionTrigger>
          <AccordionContent>
          Sim, nós não pedimos dados sensíveis para usar o planit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Questions;
