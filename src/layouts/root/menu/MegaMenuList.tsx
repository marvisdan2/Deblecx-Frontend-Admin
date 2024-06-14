import { Fragment } from "react";
import clsx from "clsx";
// CUSTOM COMPONENTS
import Link from "@/components/link";
import { H6 } from "@/components/typography";
// CUSTOM DEFINED HOOK
import useLocation from "@/hooks/useLocation";
// STYLED COMPONENT
import { MenuList } from "./styles";

// ==============================================================
type Props = {
  title: string;
  child: { title: string; id: number; href: string }[];
};
// ==============================================================

export default function MegaMenuList({ title, child }: Props) {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <H6 fontSize={14}>{title}</H6>

      <MenuList>
        {child.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={clsx({ active: pathname === item.href })}
          >
            {item.title}
          </Link>
        ))}
      </MenuList>
    </Fragment>
  );
}
