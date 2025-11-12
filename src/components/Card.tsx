import React from "react";

// 🔹 Subcomponente: CardContainer
function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="card"
      style={{ width: "630px" , fontFamily:"cursive"}} // 👈 ancho del card
    >
      {children}
    </div>
  );
}

// 🔹 Subcomponente: CardBody
function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>;
}

// 🔹 Subcomponente: CardTitle
function CardTitle({ title }: { title: string }) {
  return <h5 className="card-title">{title}</h5>;
}

// 🔹 Subcomponente: CardText
function CardText({ text }: { text: string }) {
  return <p className="card-text">{text}</p>;
}

// 🔹 Subcomponente: CardLink
interface CardLinkProps {
  href: string;
  label: string;
  variant?: string;
}

function CardLink({ href, label, variant = "primary" }: CardLinkProps) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {label}
    </a>
  );
}

// 🔹 Componente principal: Card
export default function Card() {
  return (
    <CardContainer>
      <CardBody>
        <CardTitle title="Card ejemplo" />
        <CardText text="ya ing confirme ese 10 " />
        <CardLink href="#" label="pongame 10" />
      </CardBody>
    </CardContainer>
  );
}
