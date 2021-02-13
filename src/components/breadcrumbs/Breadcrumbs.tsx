import React, { useState } from "react"
import styled from "@emotion/styled"

export type Props = {
  className?: string
  links: Link[]
  contentLabel?: string
}

export type Link = {
  label: string
  link: string
  current?: boolean
}

export type LinkProps =  {
  className?: string
} & Link

export const Link: React.FC<LinkProps> = ({ className, label, link, current }) => (
  <LinkWrapper className={className}>
    <a
      aria-current={current ? "page": undefined}
      href={link}
    >
      {label}
    </a>
  </LinkWrapper>
)

const LinkWrapper = styled.li`
  padding: 0.5em;
  margin-bottom: 0;

  :before {
    content: '/';
    padding-right: 1em;
  }

  :first-child {
    :before {
      content: none;
    }
  }
`

export const Breadcrumbs: React.FC<Props> = ({
  className,
  links,
  contentLabel = "Breadcrumb",
}) => {
  return (
    <Container
      aria-label={contentLabel}
      className={className}
    >
      <List>
        {links.map(({ link, label }) => <Link link={link} label={label}/>)}
      </List>
    </Container>
  )
}

const Container = styled.nav`
`

const List = styled.ol`
  display: flex;
  list-style-type: none;
  padding: 0;
`
