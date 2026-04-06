import React from "react";

function Button({
  children,
  className,
  onClick = "",
  href = "",
  target = "_self",
  rel = "",
  ...rest
}) {
  if (href) {
    const isEXTERNAL = target === "_blank";
    return (
      <a
        href={href}
        target={target}
        rel={isEXTERNAL ? "noopener noreferrer" : rel}
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
