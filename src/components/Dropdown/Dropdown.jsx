import "./Dropdown.css";

function Dropdown({ children, className = "" }) {
  return <div className={`container--dropdown ${className}`}>{children}</div>;
}

/* ---------- Subcomponents ---------- */

function List({ children, className = "" }) {
  return (
    <ul role="list" className={`dropdown__list ${className}`}>
      {children}
    </ul>
  );
}

function Item({ children, className = "" }) {
  return <li className={`dropdown__list-item ${className}`}>{children}</li>;
}

function Footer({ children, className = "" }) {
  return <div className={`dropdown__footer ${className}`}>{children}</div>;
}

function FooterItem({ children, className = "" }) {
  return <div className={`dropdown__footer-item ${className}`}>{children}</div>;
}

/* ---------- Attach subcomponents ---------- */

Dropdown.List = List;
Dropdown.Item = Item;
Dropdown.Footer = Footer;
Dropdown.FooterItem = FooterItem;

export default Dropdown;
