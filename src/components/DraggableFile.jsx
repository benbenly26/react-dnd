import { Grid } from "@mui/material";
import React, { forwardRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableFile = forwardRef(({ id, children, onDrop, index }, ref) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TEST",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: "TEST",

    drop(item) {
      onDrop(item.index, index);
    },
  });

  const opacity = isDragging ? 0 : 1;
  const transform = isDragging ? "scale(1.05)" : "scale(1)";
  const cursorStyle = isDragging ? "grabbing" : "grab";

  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        p={1}
        ref={(node) => drag(drop(node))}
        sx={{
          opacity: opacity,
          transform: transform,
          transition: "transform 300ms ease, opacity 300ms ease",
          cursor: cursorStyle,
        }}
      >
        {children}
      </Grid>
    </>
  );
});

export default DraggableFile;
