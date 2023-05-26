import { FER } from "./FER";
import { useState } from "react";

export const Emoji = () => {
  const [expressions, setExpressions] = useState(null);

  const handleExpressionsChange = (newExpressions) => {
    setExpressions(newExpressions);
  };

  return (
    <div>
      <FER onExpressionsChange={handleExpressionsChange} />
      {expressions && <div>Expressions: {JSON.stringify(expressions)}</div>}
    </div>
  );
};
