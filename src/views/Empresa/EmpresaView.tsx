import { Chip } from "@mui/material";
import React, { useState } from "react";

import { LabelComponent } from "../../components/common/Label";
import { useForm } from "../../components/hooks/useForm";
import { DividerComponent } from "../../components/common/Divider";

export const EmpresaView = () => {
  const [values, handleInputChange, reset]: any = useForm({ tag: "" });

  const [etiquetas, setEtiquetas] = useState([]);

  const { tag } = values;

  const handleDeleteChip = () => {
    alert("eliminado");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEtiquetas([...etiquetas, tag]);
    reset();
  };

  return (
    <>
      <LabelComponent text="Empresa" type="m" />
      <LabelComponent
        text="Actualiza los detalles de tu empresa aquí"
        type="s"
      />
      <DividerComponent />
      <LabelComponent text="Empresa" type="m" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tag}
          onChange={handleInputChange}
          name="tag"
        />
      </form>
      {etiquetas.map((etiqueta: any) => (
        <Chip key={etiqueta} label={etiqueta} onDelete={handleDeleteChip} />
      ))}
    </>
  );
};
