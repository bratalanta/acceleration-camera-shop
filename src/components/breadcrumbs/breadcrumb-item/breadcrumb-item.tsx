type BreadcrumbItemProps = {
  name: string;
}

function BreadcrumbItem({name}: BreadcrumbItemProps) {
  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__link breadcrumbs__link--active">
        {name}
      </span>
    </li>
  );
}

export default BreadcrumbItem;
